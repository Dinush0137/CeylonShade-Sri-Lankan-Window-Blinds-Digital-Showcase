import { useState, useEffect, useRef } from 'react';
import CloseButton from './CloseButton.jsx';
import FormView from './FormView.jsx';
import SuccessView from './SuccessView.jsx';

// ---------------------------------------------------------------------------
// Config — replace with real values before going live
// ---------------------------------------------------------------------------
const WHATSAPP_NUMBER = '94771234567'; // TODO: replace with Premiyo Corporation's real WhatsApp Business number
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME'; // TODO: replace with Premiyo Corporation's real Formspree form ID

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

/**
 * Validates a Sri Lankan mobile number (9 digits after the +94 prefix).
 * Accepts formats like "771234567", "77 123 4567", "77-123-4567".
 */
function isValidSLPhone(value) {
  // Strip spaces and dashes, then check for exactly 9 digits
  const digits = value.replace(/[\s-]/g, '');
  return /^\d{9}$/.test(digits);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Runs name + phone validation. Returns an errors object
 * { name: string|null, phone: string|null }.
 */
function validateNameAndPhone(name, phone) {
  const errors = { name: null, phone: null };
  if (!name || name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters.';
  }
  if (!phone || !isValidSLPhone(phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Default state factory — called on every fresh open
// ---------------------------------------------------------------------------
function defaultState() {
  return {
    view: 'form',              // 'form' | 'success'
    name: '',
    phone: '',
    email: '',
    fieldErrors: { name: null, phone: null },
    submissionError: null,
    isSubmitting: false,
  };
}

// ---------------------------------------------------------------------------
// InquiryModal
// ---------------------------------------------------------------------------

/**
 * InquiryModal — single reusable modal component that conditionally renders
 * the form state (default / error) or the success state based on internal state.
 *
 * @param {{
 *   isOpen: boolean,
 *   onClose: () => void,
 *   product: {
 *     name: string,
 *     imageUrl: string,
 *     imageAlt: string,
 *     widthCm: number|string,
 *     heightCm: number|string,
 *     densityLabel: string,
 *   }
 * }} props
 */
export default function InquiryModal({ isOpen, onClose, product }) {
  const [state, setState] = useState(defaultState());

  // Remember last valid email POST body for "Try Again"
  const lastEmailPayloadRef = useRef(null);

  // Reset all internal state whenever the modal is (re-)opened
  useEffect(() => {
    if (isOpen) {
      setState(defaultState());
      lastEmailPayloadRef.current = null;
    }
  }, [isOpen]);

  // Don't render anything when closed
  if (!isOpen) return null;

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function setField(field, value) {
    setState((prev) => ({
      ...prev,
      [field]: value,
      // Clear the field error for this field as the user types
      fieldErrors: { ...prev.fieldErrors, [field]: null },
      submissionError: null,
    }));
  }

  // ---------------------------------------------------------------------------
  // WhatsApp handler
  // ---------------------------------------------------------------------------

  function handleWhatsApp() {
    const errors = validateNameAndPhone(state.name, state.phone);
    if (errors.name || errors.phone) {
      setState((prev) => ({ ...prev, fieldErrors: errors }));
      return;
    }

    const message =
      `Hi, I'm interested in ${product.name} ` +
      `(${product.widthCm}cm x ${product.heightCm}cm, ${product.densityLabel} finish). ` +
      `My name is ${state.name.trim()}, phone +94 ${state.phone.trim()}.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    // WhatsApp deep-link can't report delivery — opening == success
    setState((prev) => ({ ...prev, view: 'success' }));
  }

  // ---------------------------------------------------------------------------
  // Email (Formspree) handler
  // ---------------------------------------------------------------------------

  async function postToFormspree(payload) {
    setState((prev) => ({ ...prev, isSubmitting: true, submissionError: null }));
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setState((prev) => ({ ...prev, isSubmitting: false, view: 'success' }));
      } else {
        setState((prev) => ({
          ...prev,
          isSubmitting: false,
          submissionError: 'System failure unable to send inquiry.',
        }));
      }
    } catch {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        submissionError: 'System failure unable to send inquiry.',
      }));
    }
  }

  function handleEmail() {
    const errors = validateNameAndPhone(state.name, state.phone);
    const hasFieldErrors = errors.name || errors.phone;

    if (hasFieldErrors) {
      setState((prev) => ({ ...prev, fieldErrors: errors }));
      return;
    }

    // Email is required for this path — surface via the top error banner
    if (!state.email.trim() || !isValidEmail(state.email)) {
      setState((prev) => ({
        ...prev,
        fieldErrors: errors, // name + phone already clean
        submissionError: 'Please enter a valid email address.',
      }));
      return;
    }

    const payload = {
      name: state.name.trim(),
      phone: `+94 ${state.phone.trim()}`,
      email: state.email.trim(),
      product_name: product.name,
      dimensions: `${product.widthCm}cm x ${product.heightCm}cm`,
      density: product.densityLabel,
    };

    lastEmailPayloadRef.current = payload;
    postToFormspree(payload);
  }

  function handleTryAgain() {
    if (lastEmailPayloadRef.current) {
      postToFormspree(lastEmailPayloadRef.current);
    }
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    /* Backdrop — overflow-y-auto so the modal is scrollable on short viewports */
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40">
      {/* Inner flex wrapper — min-h-full + items-center centres the card when it fits */}
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal card — my-4 gives breathing room when the card is taller than the viewport */}
        <div className="bg-surface-container-lowest rounded-xl modal-shadow border border-surface-variant overflow-hidden relative w-full max-w-[600px] my-4">
          <CloseButton onClose={onClose} />

          {state.view === 'success' ? (
            <SuccessView onClose={onClose} />
          ) : (
            <FormView
              product={product}
              name={state.name}
              phone={state.phone}
              email={state.email}
              fieldErrors={state.fieldErrors}
              submissionError={state.submissionError}
              isSubmitting={state.isSubmitting}
              onChange={setField}
              onWhatsApp={handleWhatsApp}
              onEmail={handleEmail}
              onTryAgain={handleTryAgain}
            />
          )}
        </div>
      </div>
    </div>
  );
}

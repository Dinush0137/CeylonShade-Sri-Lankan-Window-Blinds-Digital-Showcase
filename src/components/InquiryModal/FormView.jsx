import ProductSummaryCard from './ProductSummaryCard.jsx';

/**
 * FormView — renders the inquiry form for both the default and error states.
 * The error state is the same form with conditional classes/messages layered on,
 * exactly as code.html's State 1 and State 3 share the same field structure.
 *
 * @param {{
 *   product: object,
 *   name: string,
 *   phone: string,
 *   email: string,
 *   fieldErrors: { name: string|null, phone: string|null },
 *   submissionError: string|null,
 *   isSubmitting: boolean,
 *   onChange: (field: string, value: string) => void,
 *   onWhatsApp: () => void,
 *   onEmail: () => void,
 *   onTryAgain: () => void,
 * }} props
 */
export default function FormView({
  product,
  name,
  phone,
  email,
  fieldErrors,
  submissionError,
  isSubmitting,
  onChange,
  onWhatsApp,
  onEmail,
  onTryAgain,
}) {
  const nameHasError = Boolean(fieldErrors.name);
  const phoneHasError = Boolean(fieldErrors.phone);

  return (
    <div className="p-lg md:p-xl flex flex-col gap-xl">
      {/* Header */}
      <div>
        <h2
          className="font-headline-md text-headline-md text-primary mb-sm"
          style={submissionError ? { color: 'rgb(145, 114, 60)' } : undefined}
        >
          Send Your Inquiry
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Our design team will get back to you with pricing and customization options.
        </p>
      </div>

      {/* Error Banner — only when submissionError is set */}
      {submissionError && (
        <div className="bg-error-container text-on-error-container p-4 rounded-xl flex items-start gap-sm border border-error/20">
          <span
            className="material-symbols-outlined mt-0.5"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            error
          </span>
          <div>
            <p className="font-body-md text-body-md font-medium">{submissionError}</p>
            <button
              className="font-label-md text-label-md underline mt-xs hover:opacity-80 transition-opacity"
              onClick={onTryAgain}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Product Summary Card */}
      <ProductSummaryCard product={product} />

      {/* Form Fields */}
      <form className="flex flex-col gap-lg" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <div className="flex flex-col gap-sm">
          <label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="modal-name">
            Full Name
          </label>
          <input
            id="modal-name"
            type="text"
            placeholder="e.g. Jane Doe"
            value={name}
            onChange={(e) => onChange('name', e.target.value)}
            className={
              nameHasError
                ? 'w-full bg-surface-container-lowest border border-error rounded-xl px-lg py-3 font-body-md text-body-md text-on-surface focus:border-error focus:ring-1 focus:ring-error transition-colors outline-none'
                : 'w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-lg py-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none'
            }
          />
          {nameHasError && (
            <p className="font-body-md text-body-md text-sm text-error flex items-center gap-xs mt-1">
              <span className="material-symbols-outlined text-[16px]">info</span>{' '}
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-sm">
          <label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="modal-phone">
            Phone Number
          </label>
          <div
            className={
              phoneHasError
                ? 'flex rounded-xl overflow-hidden border border-error focus-within:border-error focus-within:ring-1 focus-within:ring-error transition-colors'
                : 'flex rounded-xl overflow-hidden border border-outline-variant focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-colors'
            }
          >
            <span
              className={`bg-surface-container-low px-lg py-3 font-body-md text-body-md text-on-surface-variant flex items-center justify-center ${
                phoneHasError ? 'border-r border-error' : 'border-r border-outline-variant'
              }`}
            >
              +94
            </span>
            <input
              id="modal-phone"
              type="tel"
              placeholder="77 123 4567"
              value={phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className={`w-full bg-surface-container-lowest px-lg py-3 font-body-md text-body-md border-none focus:ring-0 outline-none ${
                phoneHasError ? 'text-error' : 'text-on-surface'
              }`}
            />
          </div>
          {phoneHasError && (
            <p className="font-body-md text-body-md text-sm text-error flex items-center gap-xs mt-1">
              <span className="material-symbols-outlined text-[16px]">info</span>{' '}
              {fieldErrors.phone}
            </p>
          )}
        </div>

        {/* Email Address — no per-field error variant per design spec */}
        <div className="flex flex-col gap-sm">
          <label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="modal-email">
            Email Address
          </label>
          <input
            id="modal-email"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-lg py-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none"
          />
        </div>
      </form>

      {/* Actions — opacity-60 pointer-events-none when submitting */}
      <div className={`flex flex-col sm:flex-row gap-md pt-sm${isSubmitting ? ' opacity-60 pointer-events-none' : ''}`}>
        <button
          className="flex-1 flex items-center justify-center gap-sm bg-secondary hover:bg-secondary/90 text-on-secondary font-label-md text-label-md uppercase rounded-xl py-4 transition-colors"
          style={{ backgroundColor: 'rgb(145, 114, 60)' }}
          onClick={onWhatsApp}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            chat
          </span>
          Continue on WhatsApp
        </button>
        <button
          className="flex-1 flex items-center justify-center gap-sm bg-transparent border-[1.5px] border-on-tertiary-container text-on-tertiary-container hover:bg-on-tertiary-container/5 font-label-md text-label-md uppercase rounded-xl py-4 transition-colors"
          style={{ color: 'rgb(145, 114, 60)', borderColor: 'rgb(145, 114, 60)' }}
          onClick={onEmail}
        >
          <span className="material-symbols-outlined">mail</span>
          Send by Email
        </button>
      </div>

      {/* Privacy Policy */}
      <p className="text-center font-body-md text-body-md text-on-surface-variant text-sm">
        By submitting, you agree to our{' '}
        <a className="underline hover:text-primary transition-colors" href="#">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

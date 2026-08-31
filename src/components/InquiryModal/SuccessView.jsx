/**
 * SuccessView — rendered after a successful inquiry submission (WhatsApp or Email).
 * @param {{ onClose: () => void }} props
 */
export default function SuccessView({ onClose }) {
  return (
    <div className="p-lg md:p-xxl flex flex-col items-center text-center gap-lg">
      {/* Check-circle icon block */}
      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-sm">
        <span
          className="material-symbols-outlined text-display-lg text-secondary"
          style={{ fontVariationSettings: '"FILL" 1', color: 'rgb(172, 140, 83)' }}
        >
          check_circle
        </span>
      </div>

      {/* Heading + paragraph */}
      <div>
        <h2 className="font-headline-md text-headline-md text-primary mb-sm">
          Inquiry Sent!
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mx-auto">
          Thank you for reaching out. One of our design consultants will contact you shortly to
          discuss your custom piece.
        </p>
      </div>

      {/* Back to Browsing button */}
      <div className="mt-xl w-full max-w-[240px]">
        <button
          className="w-full flex items-center justify-center gap-sm bg-transparent border-[1.5px] border-outline text-on-surface hover:bg-surface-container-low font-label-md text-label-md uppercase rounded-xl py-4 transition-colors"
          onClick={onClose}
        >
          Back to Browsing
        </button>
      </div>
    </div>
  );
}

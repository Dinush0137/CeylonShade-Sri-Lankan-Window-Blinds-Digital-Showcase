/**
 * CloseButton — absolutely-positioned close icon button shared across all modal states.
 * @param {{ onClose: () => void }} props
 */
export default function CloseButton({ onClose }) {
  return (
    <button
      aria-label="Close"
      className="absolute top-lg right-lg text-on-surface-variant hover:text-on-surface transition-colors z-10 p-sm"
      onClick={onClose}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: '"FILL" 0' }}
      >
        close
      </span>
    </button>
  );
}

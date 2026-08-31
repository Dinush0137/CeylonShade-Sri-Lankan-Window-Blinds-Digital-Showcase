export default function StepIndicator() {
  return (
    <div className="flex items-center gap-sm">
      <span className="font-label-md text-label-md text-primary bg-primary-container px-3 py-1 rounded-full">1. Dimensions</span>
      <span className="material-symbols-outlined text-outline-variant text-sm">arrow_forward</span>
      <span className="font-label-md text-label-md text-outline-variant px-3 py-1">2. Density</span>
      <span className="material-symbols-outlined text-outline-variant text-sm">arrow_forward</span>
      <span className="font-label-md text-label-md text-outline-variant px-3 py-1">3. Review</span>
    </div>
  );
}

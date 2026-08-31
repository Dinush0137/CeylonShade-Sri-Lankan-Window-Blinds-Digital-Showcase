export default function InfoBanner() {
  return (
    <div className="flex items-start gap-sm bg-tertiary-fixed p-md rounded-lg mt-md">
      <span className="material-symbols-outlined text-on-tertiary-fixed-variant">info</span>
      <p className="font-body-md text-body-md text-on-tertiary-fixed-variant">Not sure about measurements? We'll confirm exact sizing after your inquiry.</p>
    </div>
  );
}

export default function TrustRow() {
  return (
    <section className="bg-surface-container-low py-xl border-y border-outline-variant/30">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-xxl grid grid-cols-1 md:grid-cols-4 gap-lg text-center">
        <div className="flex flex-col items-center gap-sm">
          <span className="material-symbols-outlined text-primary text-[40px] mb-xs" data-icon="handyman">handyman</span>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Handcrafted</h4>
          <p className="font-body-md text-on-surface-variant text-sm">Locally woven in Sri Lanka</p>
        </div>
        <div className="flex flex-col items-center gap-sm">
          <span className="material-symbols-outlined text-primary text-[40px] mb-xs" data-icon="eco">eco</span>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Sustainable</h4>
          <p className="font-body-md text-on-surface-variant text-sm">100% Natural materials</p>
        </div>
        <div className="flex flex-col items-center gap-sm">
          <span className="material-symbols-outlined text-primary text-[40px] mb-xs" data-icon="format_paint">format_paint</span>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Custom Fit</h4>
          <p className="font-body-md text-on-surface-variant text-sm">Made to your exact windows</p>
        </div>
        <div className="flex flex-col items-center gap-sm">
          <span className="material-symbols-outlined text-primary text-[40px] mb-xs" data-icon="verified">verified</span>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Guaranteed</h4>
          <p className="font-body-md text-on-surface-variant text-sm">5-Year quality warranty</p>
        </div>
      </div>
    </section>
  );
}

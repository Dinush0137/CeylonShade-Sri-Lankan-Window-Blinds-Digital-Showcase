import { useInquiryModal } from '../../context/InquiryModalContext';

export default function SummaryCard({ width, drop, unit, density, selectedProduct }) {
  const { openInquiryModal } = useInquiryModal();

  const dimensionsDisplay =
    width && drop ? `${width} x ${drop} ${unit}` : '-- x -- cm';

  const currentProduct = {
    name: selectedProduct?.name || 'Heritage Bamboo Blind',
    imageUrl: selectedProduct?.imageSrc || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHltTgaOFSrNJlYqIbbv3Drk00C38YwJ4buI1ttmWf-9mwk7BWZtpIp0e8g6wNzH53ONv8HFxixiLs2pTAMj11rsZgQUVVzVGPmu4kxMxMOi6EBFrHTPYi1VT9e_r1UmG1yz1tmP3q5aHr-xiykS8dQFhA_-gjfTlgLegEzUfbayyVHdlU8M8KOznKJyqWD07mrkv0qPk3NpuQT0ixgM-rIYOaeBn9vAufTIksgy60KpN6FyerebAggA',
    imageAlt: selectedProduct?.imageAlt || 'Product Preview',
    widthCm: width,
    heightCm: drop,
    densityLabel: density,
  };

  return (
    <aside className="w-full md:w-[380px] shrink-0">
      <div className="sticky top-[100px] bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-[0px_10px_30px_rgba(31,59,87,0.05)] flex flex-col gap-md">
        <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-md">Summary</h3>
        <div className="flex gap-md mt-sm">
          <div className="w-20 h-24 rounded-lg bg-surface-variant overflow-hidden shrink-0">
            <img
              alt={currentProduct.imageAlt}
              className="w-full h-full object-cover"
              src={currentProduct.imageUrl}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{selectedProduct?.category || 'Natural Weave'}</span>
            <span className="font-body-lg text-body-lg text-on-surface mt-xs">{currentProduct.name}</span>
          </div>
        </div>
        <div className="flex flex-col gap-sm py-md border-y border-outline-variant">
          <div className="flex justify-between items-center">
            <span className="font-body-md text-body-md text-on-surface-variant">Dimensions</span>
            <span className="font-label-md text-label-md text-on-surface">{dimensionsDisplay}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body-md text-body-md text-on-surface-variant">Density</span>
            <span className="font-label-md text-label-md text-on-surface">{density}</span>
          </div>
        </div>
        <p className="font-body-md text-body-md text-tertiary text-center text-sm italic">Final price confirmed after inquiry</p>
        <button 
          onClick={() => openInquiryModal(currentProduct)}
          className="w-full text-on-secondary font-label-md text-label-md py-4 rounded-xl transition-colors shadow-sm flex justify-center items-center gap-sm mt-sm" style={{ backgroundColor: 'rgb(145, 114, 60)' }}>
          Send Inquiry
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </aside>
  );
}

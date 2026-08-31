import { useState } from 'react';
import InquiryModal from './components/inquiry-modal/InquiryModal.jsx';

// Demo product — matches code.html's example values exactly
const DEMO_PRODUCT = {
  name: 'Kandy Natural Cane',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBlndLqBj7bHb-H_fMjzNS0pFB2cJhGCR8_UK7S9DCsSK-KhlabOaiNUBB3F70R9aDETpG-F2CbSIaoDpgxyKFot5a_C1MU97tgq7e2cEcif1Lf6ChM52ce6AeGecWI4VJuVNLtU1TbRv4QsJm2hrfibPuvy_gwb6yBorz7FN4b4rwJeSQ1dtzBYQFmR-5XeB-38W2xO-CZHO92IRU6y7TKGLJrmrAPfDbgvdAb_7imwTF2WY2FYJZ7NQ',
  imageAlt:
    'A macro shot of Kandy Natural Cane woven blind texture in a bright, modern tropical setting. Soft, diffuse natural lighting highlights the organic, handcrafted details of the bamboo and linen materials. Premium minimalist aesthetic.',
  widthCm: 120,
  heightCm: 150,
  densityLabel: 'Natural Light',
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="antialiased min-h-screen py-xxl px-margin-mobile md:px-xxl flex flex-col items-center gap-xl">
      <div className="text-center w-full max-w-container-max">
        <h1 className="font-display-lg text-display-lg text-primary mb-sm">
          CeylonShade — Inquiry Modal
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Click the button below to open the inquiry modal.
        </p>
        <button
          className="inline-flex items-center gap-sm font-label-md text-label-md uppercase rounded-xl px-xl py-4 text-on-secondary transition-colors hover:opacity-90"
          style={{ backgroundColor: 'rgb(145, 114, 60)' }}
          onClick={() => setIsOpen(true)}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            chat
          </span>
          Send an Inquiry
        </button>
      </div>

      <InquiryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={DEMO_PRODUCT}
      />
    </div>
  );
}

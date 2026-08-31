import { useNavigate } from 'react-router-dom';

export default function BottomCta() {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-xxl pb-xxl">
      <div className="bg-surface-container rounded-2xl p-xl md:p-xxl flex flex-col items-center text-center border border-outline-variant/30">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-md">Ready to transform your space?</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mb-lg">Schedule a free consultation. Our experts will measure your windows and help you select the perfect materials for your home's unique light and airflow needs.</p>
        <button 
          onClick={() => navigate('/custom-sizing')}
          className="bg-[#91723C] hover:bg-[#765a26] text-white font-label-md text-label-md px-xl py-md rounded-full transition-all duration-300 shadow-soft"
        >
          Get a Custom Quote
        </button>
      </div>
    </section>
  );
}

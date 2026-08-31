import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" data-alt="A luxurious, sunlit tropical modern interior setting. The room features large floor-to-ceiling windows covered by beautifully textured bamboo and cane blinds that filter golden sunlight onto a polished teak floor. There is lush tropical greenery visible outside, and minimal, elegant furniture inside. The lighting is bright, warm, and inviting, perfectly capturing a premium, humanist architectural aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-Lm9aQqmPXCiQ0XKt55Sqh-bRWcMTl-SBR45vxyQRQhBJd73OWV-7GVDK9OEZPKOi_yL7ECbA-p8qoupqppFVQBHm-IRCp0Dpfe-JcFkzXK5KdZrSM0iWLZfErHeXla8N-zAyVzk6ypGiZPBb0HDxnG7UDI6DZc4rhJi7Mgbt1azwbkm_E6Usb8pwYuZLAqFoZ5XrJRdg7MoC65uFgsLW8d6KqppLNlduU-RIukIi6a3GIK1_QW59w" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/60 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-xxl flex flex-col items-start gap-lg">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
          Sri Lanka’s Traditional Bamboo &amp; Cane Blinds — Built for the Tropics
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Experience the perfect blend of natural texture, privacy, and airflow. Handcrafted by local artisans to bring warmth and sophisticated tropical modernism to your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-md mt-sm">
          <button 
            onClick={() => navigate('/custom-sizing')}
            className="bg-[#91723C] hover:bg-[#765a26] text-white font-label-md text-label-md px-xl py-md rounded-full transition-all duration-300 shadow-soft"
          >
            Get a Custom Quote
          </button>
          <button 
            onClick={() => navigate('/catalogue')}
            className="border-[1.5px] border-[#1F3B57] text-[#1F3B57] hover:bg-surface-container-low font-label-md text-label-md px-xl py-md rounded-full transition-all duration-300"
          >
            View All Blinds
          </button>
        </div>
      </div>
    </section>
  );
}

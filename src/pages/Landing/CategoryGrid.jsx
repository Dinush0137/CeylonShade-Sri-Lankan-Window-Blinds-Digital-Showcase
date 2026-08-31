export default function CategoryGrid() {
  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-xxl py-xxl">
      <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-xl text-center">Shop by Material &amp; Style</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-md md:gap-lg">
        {/* Bamboo & Cane (Prominent) */}
        <a className="col-span-2 md:col-span-1 group relative rounded-xl overflow-hidden aspect-[4/5] shadow-soft border border-[#EBE7DE] bg-surface-container-lowest block" href="#">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up, macro shot of finely woven bamboo and cane blinds. The texture is rich, showing the natural variations in the cane's color from light tan to deep honey. Soft, diffused daylight filters through the horizontal slats, creating a warm, organic pattern of light and shadow, emphasizing the premium, handcrafted quality of the material in a light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhkjOOqeo-KHlvdXjFNzXJqSjoEYykvGmbB9jAhZE7JpsEfiUrTmxv2NJZfMaRIv95YwouUa_0LSlDLiljvgq0HOdt2O2SOyqMrMOSsY_hRZjO3fKzsEexyU-ORMPVGCHqVXFwGBBtMIg0F0OoVBR4hMrUzro3jg7KA4efrIIyDlXr0UIpCn1ZN9mxd0TcTNYPBRFgrGKwclzxaEtf6TRuA2hNsoL7o2fyoQZhV_K_OGckN5HJdZ8e8A" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-lg w-full">
            <h3 className="font-headline-sm text-headline-sm text-on-primary">Bamboo &amp; Cane</h3>
            <p className="font-body-md text-sm text-surface-container-low opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Authentic &amp; Handcrafted</p>
          </div>
        </a>
        {/* Roller */}
        <a className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-[#EBE7DE] bg-surface-container-lowest block" href="#">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A sleek, modern living room with large windows fitted with minimalist, pale linen-textured roller blinds. The room is decorated in a premium minimalist style with light cream walls and subtle natural wood accents. The lighting is bright and even, highlighting the clean lines and understated elegance of the roller blinds against the tropical modern luxury backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYYQdHH9wAKhbrkiGBpmYposzZXtt3X4PVc-1T4KKSKs10eFENIi1iipDqxe4jA9jqILqmd_CKWh98SdCxGC_HIUWv7wUotJM64YJWnmINAn2hOaSK2RB8RNk8iGRbpuQN6BJqMzwY4QQj0jgJZ9Gts0PjH6NMqAhzcA2rqIPMdRX2PqQatvRIzKnkA9raOi4LAIFlHukFUVg34K_IS73YBhLvD44_AjP82Av_nC0DZGwkh3pOLmO1g" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-md w-full">
            <h3 className="font-label-md text-label-md text-on-primary">Roller Blinds</h3>
          </div>
        </a>
        {/* Zebra */}
        <a className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-[#EBE7DE] bg-surface-container-lowest block" href="#">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up view of high-quality zebra blinds featuring alternating sheer and solid textured fabric bands in a soft sand tone. The light catching the sheer panels creates a sophisticated, rhythmic stripe pattern. The setting is bright and luxurious, fitting a tropical modern aesthetic with a focus on clean lines and durable materials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC80qE1dWXJ6OcQk9cwRJMoKhBdx-Foe6SpPosf_msEf24MN87wFbXsulPfniO4qAJM2nvYrjkwXqkRtkS3Zs2GQMyfo7UjSVlI6A0jzr2fhQK17mdBiw2K1uVypyxeSG5iD3R-EVjOAiPePVhc7VmZHyC0c4BZwtfj-8bA-qZs9GwDi189Jyscqe6iJnzcRBLijvYOOZH2nNFq1V13d1RHZVd-BvfHoa-wW64nL-UZlAw6MHkZRo8D-Q" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-md w-full">
            <h3 className="font-label-md text-label-md text-on-primary">Zebra Blinds</h3>
          </div>
        </a>
        {/* Vertical */}
        <a className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-[#EBE7DE] bg-surface-container-lowest block" href="#">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Elegant vertical blinds in a soft, natural cream color, drawn across a wide glass door leading to a lush tropical patio. The vertical lines add height to the room, aligning with a premium, airy architectural feel. The natural sunlight creates soft shadows on the teak floor, emphasizing a tranquil, modern luxury environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvInf8F9Sl_ovplXHJTpysSK2v-hgVl2e0qZXtAJxITdloGK6AGSu8dZ3oWBocJpfm2q4YYSuTlqaMx3pR_V8uB5Te0wfBvmTtXZe4bJ2PalJg3F6aXZQS-9lD1JGiDTolWyTDZuiT-uPDk4oKBFIuKdR6kKxyOCrW_VKhoalhN9hMLKq_FqaiAc--Qb8x6oRLz2wkGAen-IVk7o8ac-pSfvV85sOAWyv74HBlu5BXyaXePXuHo6-oYA" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-md w-full">
            <h3 className="font-label-md text-label-md text-on-primary">Vertical Blinds</h3>
          </div>
        </a>
        {/* Wooden */}
        <a className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-[#EBE7DE] bg-surface-container-lowest block" href="#">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Rich, dark mahogany wooden roman blinds partially drawn up in a sophisticated home office setting. The natural wood grain is visible and highly textured, providing a stark, beautiful contrast to the bright, light-colored walls. The scene is illuminated by natural daylight, emphasizing the bespoke, humanist quality of the interior design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHM4NLPcq5JlpNFVT2xKOsR6olnl17ftxNxIuLcuSi53U68-U-pzmilzp9VZ9K60dutKH8-5UMOa8AtYNqG4Zx4_dy-KUOvxFEuODfB3fikw8MIiNxEXszQBtap-CFBfEFPpXPdRw_xVlZmhqdkJFS3AAdqn2ztoI-UKTlyM8NP20wMEhfRbnMd6yjBzYwiC9dRcBX539ib7mEIR3xXIBQ_qUm5beefnHN33XSowx9NIeDRVeYR59BQ" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-md w-full">
            <h3 className="font-label-md text-label-md text-on-primary">Wooden Roman</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

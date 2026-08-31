import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSJ6_Rua5__cBon1f_ILm1GiJ13999-9CjVoBnhsTAg0gtlSMZ0QPVDmYw9pUMwwL-XcRTjxQEOUp1jJbztmhafDlGrEKVrDSD3w0jiY-jA7t0aeSH29MP1JqzdN9Mp5yq6D8ykK_qyZCmJuQfuzBR27sylzmQUdEBpmE1SLXsnw6TMvuEqy_GqV2pCgD4OrW01N0qsOiUIye6q7ggv1aTfopLfWLXdiE840QFWWK89khU61C9pG9VoA",
      imageAlt: "A detailed view of 'Kandy Weave' bamboo blinds installed in a minimalist bedroom. The weave is tight and precise, made of light-colored natural cane. Sunlight gently diffuses through, creating a calm, serene atmosphere. The surrounding decor is tropical modern, featuring crisp white linens and a small potted palm plant. The lighting is bright and inviting.",
      tagLabel: "Natural Cane",
      title: "The Kandy Weave",
      description: "A tight, refined weave offering excellent privacy and subtle light filtration. Ideal for bedrooms."
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsoQXCBD7R-BC4b0irq9C6iEx1pdMcXgU_JdOtugh5aifMy0P8h9_qJ4jdi-lNZM7G43CZBcBtn1MMaqj-jIJ3OF4ZxMQ9XZaah-BVBIQmlURTARwgLKaBRLpW-HMSORUHLZnGt7Kao5CGKIOv8F887pVphRmjsui2dKttJWgES_Cavs04fDqwwWV6rIGc40EwlaSSRTJn7PnTZy2m6BbATmx02wEwEArtmTbwVmMijvYje9QEYVnD0Q",
      imageAlt: "The 'Galle Matchstick' bamboo blinds hung in a breezy, open-plan living area. The blinds feature very thin, matchstick-like bamboo slats that allow more light to penetrate, creating beautiful linear shadows on the floor. The aesthetic is highly tactile and humanist, fitting perfectly within a light, premium tropical modern design scheme.",
      tagLabel: "Matchstick Bamboo",
      title: "Galle Matchstick",
      description: "Delicate and airy. Allows maximum airflow while reducing harsh tropical glare."
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeZH7OenWAJzeLi__sM6yXJXUO8MvPF5olxraG5WBbRJzKWaeYCsWYwNU8uCXOueMCATHLUgnpJHuZ63LB4zd0q20oZbILkJ6Uj9gpCJQVPwjlOEs-ubL4blGeJ8k6J11tuIvCdhJBlBlPbPr4b9VZ8M_V0yEVcHYxQXTAWkDrVf_LNORV7g_FpBJ_lMzAL81hK2IV7FmSaH3qFCDWaKF1LV00Apdm_uFdZUtlJAfjppWKuPtRTTlqGw",
      imageAlt: "A sophisticated indoor-outdoor veranda space featuring 'Colombo Tortoise' bamboo blinds. The bamboo has a unique, mottled, slightly darker tortoise-shell finish, adding depth and contrast. The setting is luxurious, with a comfortable lounge chair and tropical foliage in the background, embodying a high-end, editorial approach to natural interior design.",
      tagLabel: "Tortoise Bamboo",
      title: "Colombo Tortoise",
      description: "Features a naturally mottled finish, adding deep, rich texture to any sophisticated space."
    }
  ];

  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-xxl py-xxl">
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface">Signature Bamboo Collection</h2>
          <p className="font-body-md text-on-surface-variant mt-sm">Our most loved traditional weaves.</p>
        </div>
        <a className="hidden md:flex items-center gap-xs font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#">
          View Complete Collection <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <a className="md:hidden flex items-center justify-center gap-xs mt-xl font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#">
        View Complete Collection <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
      </a>
    </section>
  );
}

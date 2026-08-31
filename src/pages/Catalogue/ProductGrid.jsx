import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      title: "Kandy Natural Cane",
      category: "Bamboo & Cane",
      priceRange: "Rs. 8,500 - 12,000",
      tags: ["Indoor/Outdoor", "High Durability"],
      description: "Traditional hand-woven cane offering perfect dappled light and excellent ventilation for tropical verandas.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgW-v40cfZKYyZ-N3DG8eFzUz3jTjdr73uZOkvLTJQSd_p-k_3sJqFY9WTxPrKsGwEMvT6pSHzALqhCTbhyzYCEZslsCZAcX65edQMu0OZWaUtHYOnAJetqCI1hXGZfa8xT295C6QhXc9IDXWrRZLzIv2CLNM5xqKv_o07HcCuFpSGwIbz1IlVkwwOA7nxJOHbLPX_0520ZBZZRjeislXPzGyNfkURmK4ARHM0Mbr_kCelc2iWVz_93w",
      imageAlt: "A macro close-up of a beautifully hand-woven natural cane blind in a bright tropical villa setting. Sunlight filters gently through the intricate weave, casting soft geometric shadows. The aesthetic is tropical modern luxury, featuring warm beige, honey, and tan tones. High-end architectural photography style, natural lighting, sharp focus on the texture."
    },
    {
      title: "Galle Matchstick",
      category: "Bamboo & Cane",
      priceRange: "Rs. 6,200 - 9,500",
      tags: ["Indoor", "Privacy"],
      description: "Fine matchstick bamboo tightly woven with durable cotton thread for privacy and delicate light filtering.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzvXj5x45lnAWfnkO6Y4XLk5t9MTtqJgvsyEqP97jve3-G9T7IrBHGuD_DtM68tyFnWX63fiadk1lzzu2Jmmr7gH6L9nT0tDovicIHwkydcJewX-ijoh6Exfjq1zUDnnyDjNmELISBC_XuFKww9zghIIW1pGzmTG1eGjDXENPi6WlM3c5eiNxlp8CNSc2_SJVk-swC4PWQ7K2lQuZddH0epBzVVkUcWLUiPm728-jdMuW0LzneOVHUlA",
      imageAlt: "Elegant matchstick bamboo blinds partially rolled up in a modern minimalist living room. The room has high white walls and tropical plants. The blinds are a light natural wood color, allowing soft, diffused sunlight to enter. Tropical modern luxury aesthetic, clean lines, serene atmosphere. High-resolution interior photography."
    },
    {
      title: "Colombo Tortoise Bamboo",
      category: "Bamboo & Cane",
      priceRange: "Rs. 12,000 - 18,000",
      tags: ["Indoor/Semi-Outdoor", "Premium Finish"],
      description: "Distinctive speckled bamboo slats that add rich texture and warmth to modern minimalist interiors.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOazDdFmrnqc6RSwygoXoGhN0pN4W1xjzufPAwTB3szcvk8R1eHGVft8XcdRkrPS3fe8WpA3DJalnUmR5uLWH0l1IMOZdoJVa94eRYWqv0I7hczOw5AdGUEonALZQnlmUhoQhLF7huMYlIO2ZLe10DqpAbXd6wORK6GyVpVzcSbSdr68Hc4DXhd969ex-T928Zkq6dlEhJ1NUQjRiButMxVUlljdRBpvC1SrfldrBhy0JUhE2oSeS9XA",
      imageAlt: "Rich, dark tortoise bamboo blinds covering a large window in a sophisticated home office. The bamboo features distinct mottled dark brown and black markings against a warmer golden base. Tropical modern luxury styling, ambient natural lighting creating a warm, moody, and premium atmosphere. Professional architectural shot."
    },
    {
      title: "Modern Roller",
      category: "Roller Blinds",
      priceRange: "Rs. 5,000 - 8,500",
      tags: ["Indoor", "Light Filtering"],
      description: "Clean lines and minimalist appeal with light-filtering linen fabrics perfect for contemporary spaces.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqCbRUAzkxzDBPyKi_V0hOvmPFFStMDgx4j1iYHEaAahy6OCUrC80UAo891mCu_xQPNadj99gYGMTT_7JRBrnovnGx9EUVh9vEn96StgS8linWv3Tj0bSh8QNKyb9RdFztKaMeT8pxTVIPi6dMVHRdaJYrCM1717Dl4LtR8pF9S66s3zU5nKtD-JGB4g-qryBlDSIRfXcgulWFlHwj4odr36I11y1YddJUSX2gcWPrHSiQWiFf2pXU9A",
      imageAlt: "Sleek modern roller blinds in a soft off-white linen fabric, fully drawn down in a bright, airy bedroom. The setting is minimal and luxurious, with soft natural light glowing through the semi-sheer fabric. Tropical modern aesthetic, clean architectural lines, calming neutral color palette."
    },
    {
      title: "Zebra Sheer",
      category: "Roller Blinds",
      priceRange: "Rs. 9,500 - 14,000",
      tags: ["Indoor", "Adjustable"],
      description: "Alternating sheer and solid fabric bands offer total control over privacy and natural light ingress.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-GsvlztSRk3tQNXJuqo_Pl4rwR9cWp6IlTgmJwNOVe3-yQLteemvuqBAWs8O7aB8z3z7DE3zX8s5FFmNuvSFzm0FCAx-TBPQwzp4A934grdhBk_TWgSbj_8ATO3RymXDj6DRAz0jnZKtF4-C452w0E_YNrTMRYTQXgE-Cjr7JU4wWOoKv-ik_Voznbzq9uFKd0hrQGn9iadqzFAuyrURudI0OaGDx0m0iuA5bg4wKRdPznKwVCQfXTg",
      imageAlt: "Elegant Zebra sheer blinds featuring alternating horizontal bands of solid pale grey and sheer white fabric. Installed in a modern living room with large glass windows overlooking a tropical garden. Soft natural light creates a beautiful striped shadow effect on the floor. Premium interior design style."
    },
    {
      title: "Classic Wooden Roman",
      category: "Roman Shades",
      priceRange: "Rs. 11,000 - 16,500",
      tags: ["Indoor", "Elegant"],
      description: "Structured folds of woven wood that combine the softness of a drape with the natural appeal of timber.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9VGJRzxJm15F4P6Cc74TFSli1M6x_7IYagfW58CnGgQvkcmY704NYCgRTd5WQB9iMW8kHUEC1D2aAKdAVT8QkOr7qglmchr3pT0DBao8FBsJANVRKJQyVfrLQpX15ML0bgz3gbDxsF1naLSYJew_s4so7T9NmwnF81y8pmSO9rKfonrKKL4PGntTMMLwm1BdcbrrUE4CTJu19uaye9lGiAMnmdGe__zm0NC62gYgdirlC63hQag7iYg",
      imageAlt: "Classic wooden Roman blinds partially folded up, revealing a view of a lush tropical courtyard. The wood is a warm teak color, complementing the creamy white walls of the luxury villa. Soft folds create depth and texture. High-end residential photography, warm and inviting atmosphere."
    }
  ];

  return (
    <section className="w-full px-margin-mobile md:px-xxl mb-xxl max-w-container-max mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg md:gap-xl">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}

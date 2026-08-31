export default function WeaveDensitySelector({ density, setDensity }) {
  const cards = [
    {
      key: 'Light',
      label: 'Light',
      description: 'Allows soft diffused light. Ideal for living areas.',
      dataAlt: 'A close-up texture shot of a loosely woven, light-density linen fabric intended for window blinds. The fabric is light beige, nearly translucent, allowing bright, soft tropical sunlight to pass through easily. The aesthetic is airy, minimalist, and luxurious, matching a modern serene interior design. The lighting is high-key and delicate.',
      bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9XziEp9B7-JbqVuAXs_uI0ouF2GYAvs8YKwNXUGKli6RSpBmJcGn5JAAGikLG8aid5-LNEiSJo7XYTbXeWy9qXeu9c4WQlQ3I6mDZMLD6oCUmKoWBzlaC0cTrvbwAHV-ca73TysM8pY64LP1CMqs6E0CEc0eDmC0T0ElXIuEHX4iwfdnF54TCnwMa3tvaro_5hLdgjyVXza3NEcQTDNwo_C-ciogtaC5-vM52p23H9HzjzeYSUaSpYg',
    },
    {
      key: 'Medium',
      label: 'Medium',
      description: 'Balanced privacy and natural light filtering.',
      dataAlt: 'A close-up texture shot of a medium-density woven bamboo and linen blend fabric for window blinds. The material shows a balanced structure, offering moderate light filtering. The color is a warm natural tan. The lighting highlights the organic texture and subtle shadows of the weave, fitting a premium tropical modern luxury aesthetic.',
      bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALBZwkVHSqIb6numWAyuGAO7t21WgBjKoNZBGwBvdaoSNfOBd8RKzHbRjroMCDusS6AcMdaTFDAIq_Vmh_7jx0se6EaTOQWCemu1x27s7II7XO958jCMAdDvR3-CLtOGZNVd-RRLibvJzslQ02TdqGFzk2tqTp7tCLAKHeC3TfEY1tcuhz4ZUeZ_9mpI3E-E7xqNuMo4aIisTWKyNCQ6tkLj3SCYdRpTOakIsAAggsG1iuBg9RL_00cA',
    },
    {
      key: 'Dense',
      label: 'Dense',
      description: 'Maximum privacy. Recommended for bedrooms.',
      dataAlt: 'A close-up texture shot of a tightly woven, dense natural fiber blind material, likely jute or thick bamboo. The texture is robust and opaque, designed for maximum privacy and light blocking. The color is a deep, rich natural brown. The lighting is focused, emphasizing the durable, handcrafted quality of the heavy weave within a luxury tropical setting.',
      bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjd03xxNz2FW8UzHR-scfgNYC7IUw13m2CanpyRKCjx8qbIFC9Jm80ENaWp2H-zSTESIAVQXkPmPUolcD2f5r9yhPJ0mopC0vZMyK1JbSknKpot_-zGIZ08QRfJHcgAX4QgRlyN3yTF1wbElY8lGG96SUbDg00pMx7Qgu0N_yRfUUNGdEkfXGUA7_s4Hf0ztq_lft_Kvv1zyyE0v5aXGUHUYlJSxlOxnoe0eIDfK3ynTzPYutb36veHQ',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {cards.map((card) => {
        const isSelected = density === card.key;
        return (
          <button
            key={card.key}
            onClick={() => setDensity(card.key)}
            className={`flex flex-col gap-sm p-sm bg-surface-container-lowest rounded-xl text-left group relative transition-colors ${
              isSelected
                ? 'border-2 border-primary-container'
                : 'border border-outline-variant hover:border-primary-container'
            }`}
          >
            {isSelected && (
              <div className="absolute top-2 right-2 bg-primary text-on-primary rounded-full p-1 z-10 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
            )}
            <div className="w-full h-32 rounded-lg bg-surface-variant overflow-hidden relative">
              <div
                className={`bg-cover bg-center w-full h-full transition-opacity ${isSelected ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}
                data-alt={card.dataAlt}
                style={{ backgroundImage: `url("${card.bgUrl}")` }}
              ></div>
            </div>
            <div className="px-sm pb-sm">
              <span className="font-label-md text-label-md text-primary">{card.label}</span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">{card.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

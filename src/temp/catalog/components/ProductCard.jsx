export default function ProductCard({ imageSrc, imageAlt, category, title, description, tags, priceRange }) {
  const isBamboo = category === "Bamboo & Cane";
  const tagBgClass = isBamboo ? "bg-[#F0E6D2]" : "bg-surface-variant";
  const tagTextClass = isBamboo ? "text-[#1F3B57]" : "text-on-surface-variant";

  return (
    <article className="group flex flex-col bg-surface-container-lowest rounded-xl border border-surface-variant overflow-hidden hover:shadow-[0px_10px_30px_rgba(31,59,87,0.05)] transition-all duration-300">
      <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          data-alt={imageAlt}
          src={imageSrc}
        />
        <div className={`absolute top-md left-md ${tagBgClass} ${tagTextClass} text-label-md font-label-md px-sm py-xs rounded-sm uppercase tracking-widest text-[10px]`}>
          {category}
        </div>
      </div>
      <div className="p-lg flex flex-col flex-grow">
        <h3 className="text-headline-sm font-headline-sm text-on-surface mb-xs">{title}</h3>
        <p className="text-body-md font-body-md text-on-surface-variant mb-md line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-xs mb-lg mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className="text-[12px] bg-surface-container border border-outline-variant/50 text-on-surface-variant px-sm py-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-surface-variant pt-md mt-auto">
          <div className="text-body-lg font-body-lg font-semibold text-primary">{priceRange}</div>
          <button className="text-secondary hover:text-on-secondary-fixed-variant transition-colors flex items-center gap-xs text-label-md font-label-md">
            View Details <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        </div>
      </div>
    </article>
  );
}

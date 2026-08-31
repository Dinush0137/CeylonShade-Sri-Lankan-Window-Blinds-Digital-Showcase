export default function ProductCard({ imageSrc, imageAlt, tagLabel, title, description }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#EBE7DE] shadow-soft overflow-hidden group">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt={imageAlt} src={imageSrc} alt="" />
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-texture-preview flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-zoom-in" title="View Texture">
          <span className="material-symbols-outlined text-white" data-icon="zoom_in">zoom_in</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#F0E6D2] text-[#1F3B57] font-label-md text-[10px] uppercase px-3 py-1 rounded-full">{tagLabel}</span>
        </div>
      </div>
      <div className="p-lg">
        <h3 className="font-headline-sm text-lg text-on-surface mb-xs">{title}</h3>
        <p className="font-body-md text-on-surface-variant text-sm mb-md line-clamp-2">{description}</p>
        <button className="w-full border-[1.5px] border-[#1F3B57] text-[#1F3B57] hover:bg-surface-container-low font-label-md text-label-md py-sm rounded-full transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

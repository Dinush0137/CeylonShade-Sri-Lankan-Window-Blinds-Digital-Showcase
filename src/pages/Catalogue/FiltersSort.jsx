export default function FiltersSort() {
  return (
    <section className="w-full px-margin-mobile md:px-xxl mb-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-md max-w-container-max mx-auto">
      <div className="flex flex-wrap gap-sm">
        <button className="px-md py-xs rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>water_drop</span>
          High Rain Resistance
        </button>
        <button className="px-md py-xs rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>home</span>
          Indoor
        </button>
        <button className="px-md py-xs rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>deck</span>
          Outdoor
        </button>
        <button className="px-md py-xs rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>payments</span>
          Budget-Friendly
        </button>
      </div>
      <div className="flex items-center gap-sm">
        <span className="text-label-md font-label-md text-on-surface-variant">Sort by:</span>
        <select className="form-select border-outline-variant bg-surface-container-lowest rounded-md text-body-md text-on-surface py-sm pl-md pr-xl focus:border-primary focus:ring-0 cursor-pointer">
          <option>Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
    </section>
  );
}

export default function CategoryTabs() {
  return (
    <section className="w-full px-margin-mobile md:px-xxl mb-xl max-w-container-max mx-auto">
      <div className="flex overflow-x-auto pb-sm gap-md hide-scrollbar border-b border-surface-variant">
        <button className="whitespace-nowrap px-lg py-sm text-label-md font-label-md text-on-secondary bg-secondary rounded-t-lg transition-colors border-b-2 border-secondary">
          Bamboo &amp; Cane
        </button>
        <button className="whitespace-nowrap px-lg py-sm text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/50">
          Roller Blinds
        </button>
        <button className="whitespace-nowrap px-lg py-sm text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/50">
          Roman Shades
        </button>
        <button className="whitespace-nowrap px-lg py-sm text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/50">
          Wooden Venetian
        </button>
      </div>
    </section>
  );
}

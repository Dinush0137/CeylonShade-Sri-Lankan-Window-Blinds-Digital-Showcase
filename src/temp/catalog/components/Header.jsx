export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-outline-variant/30 z-50 bg-background/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-margin-mobile md:px-xxl h-16">
        {/* Leading Icon (Mobile Menu) */}
        <button className="md:hidden text-primary hover:text-secondary transition-colors duration-300 scale-95 active:opacity-80 transition-transform">
          <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Logo */}
        <div className="text-headline-sm font-headline-sm text-primary tracking-tight">
          CeylonShade
        </div>
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-lg">
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-300" href="#">Home</a>
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-300" href="#">Inspiration</a>
          <a className="text-primary font-bold font-label-md text-label-md border-b-2 border-primary" href="#">Catalogue</a>
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-300" href="#">Contact Us</a>
        </nav>
        {/* Trailing Action / Icon */}
        <div className="flex items-center flex-grow max-w-xs ml-lg">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" style={{ fontSize: '20px' }}>search</span>
            <input type="text" placeholder="Search for blinds, materials..." className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full py-sm pl-xl pr-md text-label-md font-label-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" />
          </div>
        </div>
      </div>
    </header>
  );
}

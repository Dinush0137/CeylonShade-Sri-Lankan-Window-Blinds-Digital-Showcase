import { Link } from 'react-router-dom';

export default function Header({ activePage }) {
  const isHome = activePage === 'home';

  return (
    <header className={isHome ? "bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 dark:border-outline/20 flat no shadows" : "sticky top-0 w-full border-b border-outline-variant/30 z-50 bg-background/95 backdrop-blur-md"}>
      <div className={isHome ? "flex justify-between items-center w-full px-margin-mobile md:px-xxl py-md max-w-container-max mx-auto" : "flex items-center justify-between px-margin-mobile md:px-xxl h-16"}>
        {isHome ? (
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-primary dark:text-inverse-primary md:hidden cursor-pointer" data-icon="menu">menu</span>
            <Link to="/" className="font-display-lg text-headline-sm md:text-headline-md tracking-tight text-primary dark:text-inverse-primary hover:text-secondary transition-colors duration-300">
              <span className="" style={{ color: "rgb(118, 90, 38)", fontSize: "24px", letterSpacing: "-0.6px" }}>CeylonShade</span>
            </Link>
          </div>
        ) : (
          <>
            <button className="md:hidden text-primary hover:text-secondary transition-colors duration-300 scale-95 active:opacity-80 transition-transform">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="text-headline-sm font-headline-sm text-primary tracking-tight">
              CeylonShade
            </div>
          </>
        )}

        {/* Desktop Nav Links */}
        <nav className={isHome ? "hidden md:flex items-center gap-xl" : "hidden md:flex items-center gap-lg"}>
          <Link to="/" className={isHome ? "hover:text-secondary transition-colors duration-300 text-primary border-b-2 border-primary font-bold" : "text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-300"}>Home</Link>
          <a className={isHome ? "text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300" : "text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-300"} href="#">Inspiration</a>
          <Link to="/catalogue" className={isHome ? "hover:text-secondary transition-colors duration-300 text-on-surface-variant font-medium" : "text-primary font-bold font-label-md text-label-md border-b-2 border-primary"}>Catalogue</Link>
          <a className={isHome ? "text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300" : "text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-300"} href="#">Contact Us</a>
        </nav>

        {isHome ? (
          <>
            <div className="hidden md:flex items-center relative max-w-xs w-full ml-lg">
              <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full py-2 px-4 pr-10 text-sm font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder:text-on-surface-variant/50" placeholder="Search for blinds, materials..." type="text" />
              <span className="material-symbols-outlined absolute right-3 text-on-surface-variant/70 cursor-pointer hover:text-primary transition-colors" data-icon="search">search</span>
            </div>
            <span className="material-symbols-outlined text-primary md:hidden cursor-pointer" data-icon="search">search</span>
          </>
        ) : (
          <div className="flex items-center flex-grow max-w-xs ml-lg">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" style={{ fontSize: '20px' }}>search</span>
              <input type="text" placeholder="Search for blinds, materials..." className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full py-sm pl-xl pr-md text-label-md font-label-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

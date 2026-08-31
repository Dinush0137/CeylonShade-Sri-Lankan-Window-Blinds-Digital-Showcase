import { Link } from 'react-router-dom';

export default function Header({ activePage }) {
  const isHome = activePage === 'home';
  const isCatalogue = activePage === 'catalogue';

  const activeClasses = "hover:text-secondary transition-colors duration-300 text-primary border-b-2 border-primary font-bold";
  const inactiveClasses = "text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300";

  return (
    <header className="bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 dark:border-outline/20 flat no shadows">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-xxl py-md max-w-container-max mx-auto">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary dark:text-inverse-primary md:hidden cursor-pointer" data-icon="menu">menu</span>
          <Link to="/" className="font-display-lg text-headline-sm md:text-headline-md tracking-tight text-primary dark:text-inverse-primary hover:text-secondary transition-colors duration-300">
            <span className="" style={{ color: "rgb(118, 90, 38)", fontSize: "24px", letterSpacing: "-0.6px" }}>CeylonShade</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-xl">
          <Link to="/" className={isHome ? activeClasses : inactiveClasses}>Home</Link>
          <a className={inactiveClasses} href="#">Inspiration</a>
          <Link to="/catalogue" className={isCatalogue ? activeClasses : inactiveClasses}>Catalogue</Link>
          <a className={inactiveClasses} href="#">Contact Us</a>
        </nav>

        <div className="hidden md:flex items-center relative max-w-xs w-full ml-lg">
          <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full py-2 px-4 pr-10 text-sm font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder:text-on-surface-variant/50" placeholder="Search for blinds, materials..." type="text" />
          <span className="material-symbols-outlined absolute right-3 text-on-surface-variant/70 cursor-pointer hover:text-primary transition-colors" data-icon="search">search</span>
        </div>
        <span className="material-symbols-outlined text-primary md:hidden cursor-pointer" data-icon="search">search</span>
      </div>
    </header>
  );
}

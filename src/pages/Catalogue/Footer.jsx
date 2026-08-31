export default function Footer() {
  return (
    <footer className="w-full mt-xxl border-t border-outline-variant/30 bg-surface-container-low">
      <div className="hidden md:flex flex-col items-center gap-lg py-xxl px-xxl text-center max-w-container-max mx-auto">
        <div className="text-headline-md font-headline-md text-primary mb-md">
          CeylonShade
        </div>
        <nav className="flex flex-wrap justify-center gap-lg mb-md">
          <a className="text-on-surface-variant/80 font-label-md text-label-md hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-200" href="#">Sustainability</a>
          <a className="text-on-surface-variant/80 font-label-md text-label-md hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-200" href="#">Consultation</a>
          <a className="text-on-surface-variant/80 font-label-md text-label-md hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-200" href="#">Warranty</a>
          <a className="text-on-surface-variant/80 font-label-md text-label-md hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-200" href="#">Privacy</a>
        </nav>
        <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
          © 2026 Premiyo Corporation. All Rights Reserved.
        </p>
      </div>
      {/* Mobile Footer Fallback (Simplified for mobile view consistency with requested desktop focus, but good practice to include structure) */}
      <div className="md:hidden flex flex-col items-center py-xl px-margin-mobile text-center">
        <div className="text-headline-sm font-headline-sm text-primary mb-md">CeylonShade</div>
        <p className="text-body-md font-body-md text-on-surface-variant text-sm">© 2024 CeylonShade.</p>
      </div>
    </footer>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background dark:bg-background border-b border-outline-variant dark:border-outline flat no shadows">
      <div className="flex justify-between items-center px-margin-mobile md:px-xxl py-sm w-full max-w-container-max mx-auto">
        <button className="text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full p-2 active:scale-95 duration-200 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim font-bold">Custom Sizing</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-200">
        </div>
      </div>
    </header>
  );
}

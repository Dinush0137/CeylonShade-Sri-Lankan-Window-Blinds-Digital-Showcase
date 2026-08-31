export default function DimensionsCard({ width, setWidth, drop, setDrop, unit, setUnit }) {
  return (
    <div className="flex flex-col md:flex-row gap-lg bg-surface-container-lowest p-lg rounded-xl border border-outline-variant">
      <div className="flex-1 flex flex-col gap-md justify-center">
        <div className="flex items-center justify-between">
          <label className="font-label-md text-label-md text-on-surface-variant uppercase">Width</label>
          <div className="flex bg-surface-container rounded-lg p-1">
            <button
              className={`px-2 py-1 rounded-md font-label-md text-label-md transition-colors ${unit === 'cm' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant'}`}
              onClick={() => setUnit('cm')}
            >cm</button>
            <button
              className={`px-2 py-1 rounded-md font-label-md text-label-md transition-colors ${unit === 'in' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant'}`}
              onClick={() => setUnit('in')}
            >in</button>
          </div>
        </div>
        <input
          className="w-full rounded-xl border-outline-variant bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-lg text-body-lg py-3 px-4"
          placeholder="e.g. 120"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <div className="flex items-center justify-between mt-sm">
          <label className="font-label-md text-label-md text-on-surface-variant uppercase">Drop (Height)</label>
        </div>
        <input
          className="w-full rounded-xl border-outline-variant bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-lg text-body-lg py-3 px-4"
          placeholder="e.g. 150"
          type="number"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-md bg-surface-container-low rounded-lg border border-outline-variant border-dashed">
        <svg className="w-32 h-40 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect height="16" rx="1" strokeWidth="1.5" width="16" x="4" y="4"></rect>
          <path d="M4 8h16M4 12h16M4 16h16" strokeWidth="1.5"></path>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeDasharray="2 2" strokeWidth="1.5"></path>
        </svg>
      </div>
    </div>
  );
}

/**
 * ProductSummaryCard — shared product summary block rendered inside the form view.
 *
 * @param {{ product: {
 *   name: string,
 *   imageUrl: string,
 *   imageAlt: string,
 *   widthCm: number|string,
 *   heightCm: number|string,
 *   densityLabel: string
 * } }} props
 */
export default function ProductSummaryCard({ product }) {
  return (
    <div className="bg-primary-fixed/20 border border-primary-container/30 rounded-xl p-lg flex items-start gap-lg">
      <div className="w-20 h-24 bg-surface-variant rounded-lg overflow-hidden shrink-0">
        <img
          className="w-full h-full object-cover"
          src={product.imageUrl}
          alt={product.imageAlt}
        />
      </div>
      <div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">
          {product.name}
        </h3>
        <div className="flex flex-col gap-xs font-body-md text-body-md text-on-surface-variant">
          <span className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-sm">straighten</span>{' '}
            {product.widthCm}cm x {product.heightCm}cm
          </span>
          <span className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-sm">palette</span>{' '}
            {product.densityLabel} Finish
          </span>
        </div>
      </div>
    </div>
  );
}

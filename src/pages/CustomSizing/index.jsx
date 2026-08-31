import { useState } from 'react';
import Header from './Header';
import StepIndicator from './StepIndicator';
import DimensionsCard from './DimensionsCard';
import WeaveDensitySelector from './WeaveDensitySelector';
import InfoBanner from './InfoBanner';
import SummaryCard from './SummaryCard';

export default function CustomSizing() {
  const [width, setWidth] = useState('');
  const [drop, setDrop] = useState('');
  const [unit, setUnit] = useState('cm');
  const [density, setDensity] = useState('Medium');

  return (
    <>
      <Header />
      <main className="pt-xxl mt-xl pb-xxl px-margin-mobile md:px-xxl max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-xxl">
        <div className="flex-1 flex flex-col gap-xl">
          <StepIndicator />
          <h2 className="font-headline-md text-headline-md text-on-surface">Enter Dimensions</h2>
          <DimensionsCard width={width} setWidth={setWidth} drop={drop} setDrop={setDrop} unit={unit} setUnit={setUnit} />
          <h2 className="font-headline-md text-headline-md text-on-surface mt-xl">Select Weave Density</h2>
          <WeaveDensitySelector density={density} setDensity={setDensity} />
          <InfoBanner />
        </div>
        <SummaryCard width={width} drop={drop} unit={unit} density={density} />
      </main>
    </>
  );
}

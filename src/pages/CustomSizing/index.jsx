import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import StepIndicator from './StepIndicator';
import DimensionsCard from './DimensionsCard';
import WeaveDensitySelector from './WeaveDensitySelector';
import InfoBanner from './InfoBanner';
import SummaryCard from './SummaryCard';

export default function CustomSizing() {
  const location = useLocation();
  const selectedProduct = location.state?.product || {
    name: 'Heritage Bamboo Blind',
    category: 'Natural Weave',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHltTgaOFSrNJlYqIbbv3Drk00C38YwJ4buI1ttmWf-9mwk7BWZtpIp0e8g6wNzH53ONv8HFxixiLs2pTAMj11rsZgQUVVzVGPmu4kxMxMOi6EBFrHTPYi1VT9e_r1UmG1yz1tmP3q5aHr-xiykS8dQFhA_-gjfTlgLegEzUfbayyVHdlU8M8KOznKJyqWD07mrkv0qPk3NpuQT0ixgM-rIYOaeBn9vAufTIksgy60KpN6FyerebAggA',
    imageAlt: 'Product Preview'
  };

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
        <SummaryCard width={width} drop={drop} unit={unit} density={density} selectedProduct={selectedProduct} />
      </main>
    </>
  );
}

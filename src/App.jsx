import React from 'react';
import HeroSection from './sections/HeroSection';
import ValuePropositionSection from './sections/ValuePropositionSection';
import FeaturesShowcase from './sections/FeaturesShowcase';
import LiveDemoSection from './sections/LiveDemoSection';
import PricingSection from './sections/PricingSection';
import TrustSection from './sections/TrustSection';
import Navigation from './sections/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ValuePropositionSection />
      <FeaturesShowcase />
      <LiveDemoSection />
      <PricingSection />
      <TrustSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default App;
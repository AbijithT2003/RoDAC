import React from 'react';
import HeroSection from './sections/HeroSection';
import ValuePropositionSection from './sections/ValuePropositionSection';
import FeaturesShowcase from './sections/FeaturesShowcase';
import LiveDemoSection from './sections/LiveDemoSection';
import PricingSection from './sections/Pricing/PricingSection';
import TrustSection from './sections/TrustSection';
import Navigation from './sections/Navigation';
import NewsletterSection from './sections/NewsletterSection';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection /> 
      <FeaturesShowcase />
      <ValuePropositionSection />
      <PricingSection />
      <TrustSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default App;

//<LiveDemoSection /> this section is commented out as per the original code
//<LiveDemoSection /> is not included in the final render, but can be uncommented

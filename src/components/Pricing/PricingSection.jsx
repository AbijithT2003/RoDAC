import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import GlassCard from '../ui/GlassCard';
import ResourceCalculator from './ResourceCalculator';
import PricingPlanCard from './PricingPlanCard';

const PricingSection = () => {
  const [pricingRef, isPricingVisible] = useIntersectionObserver(0.1);
  const [resources, setResources] = useState({ cpu: 4, memory: 8, storage: 100 });

  const estimatedCost = Math.round((resources.cpu * 10 + resources.memory * 5 + resources.storage * 0.1) * 0.75);

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for learning and small projects",
      features: ["2 CPU cores", "4GB RAM", "50GB storage", "Community support"],
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: `$${estimatedCost}`,
      description: "Ideal for production applications",
      features: ["Custom resources", "Priority support", "Advanced monitoring", "SLA guarantee"],
      gradient: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Built for scale and compliance",
      features: ["Unlimited resources", "Dedicated support", "Custom integrations", "SOC 2 compliance"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={pricingRef} className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Free, Scale Seamlessly</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Transparent, usage-based pricing that grows with your business.</p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <ResourceCalculator resources={resources} setResources={setResources} estimatedCost={estimatedCost} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlanCard
              key={plan.name}
              plan={plan}
              isVisible={isPricingVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

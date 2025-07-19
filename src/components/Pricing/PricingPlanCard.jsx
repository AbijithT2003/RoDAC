import React from 'react';
import { CheckCircle } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const PricingPlanCard = ({ plan, isVisible, delay }) => {
  return (
    <div
      className={`
        transition-all duration-1000 delay-${delay}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${plan.popular ? 'transform scale-105' : ''}
      `}
    >
      <GlassCard className={`h-full relative ${plan.popular ? 'border-cyan-500/50' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
          <p className="text-gray-400">{plan.description}</p>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className={`w-full bg-gradient-to-r ${plan.gradient}`} size="lg">
          {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </GlassCard>
    </div>
  );
};

export default PricingPlanCard;

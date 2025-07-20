import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingPlanCard = ({ plan, isVisible, delay }) => {
  return (
    <div
      className={`
        transition-all duration-1000 delay-${delay}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className={`pricing-glass-card h-full ${plan.popular ? 'pricing-popular' : ''}`}>
        {plan.popular && (
          <div className="popular-badge">
            Most Popular
          </div>
        )}

        <div className="plan-header">
          <h3 className="plan-name">{plan.name}</h3>
          <div className="plan-price">{plan.price}</div>
          {plan.price !== 'Free' && plan.price !== 'Custom' && (
            <div className="text-gray-400 text-sm">/month</div>
          )}
          <p className="plan-description">{plan.description}</p>
        </div>

        <ul className="features-list">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="feature-item">
              <CheckCircle className="feature-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`pricing-button ${plan.buttonClass}`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingPlanCard;
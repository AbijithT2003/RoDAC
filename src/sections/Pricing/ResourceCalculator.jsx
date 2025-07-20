import React from 'react';

const ResourceCalculator = ({ resources, setResources, estimatedCost, isVisible }) => {
  const sliders = [
    { key: 'cpu', label: 'CPU Cores', max: 32, unit: 'cores' },
    { key: 'memory', label: 'Memory', max: 128, unit: 'GB' },
    { key: 'storage', label: 'Storage', max: 1000, unit: 'GB' }
  ];

  return (
    <div className={`resource-calculator transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="calculator-title">Resource Calculator</h3>
      <div className="space-y-6">
        {sliders.map(({ key, label, max, unit }) => (
          <div key={key} className="slider-container">
            <div className="slider-header">
              <span className="slider-label">{label}</span>
              <span className="slider-value">{resources[key]} {unit}</span>
            </div>
            <input
              type="range"
              min="1"
              max={max}
              value={resources[key]}
              onChange={(e) => setResources({ ...resources, [key]: parseInt(e.target.value) })}
              className="custom-slider"
            />
          </div>
        ))}
        <div className="cost-display">
          <div className="cost-amount">${estimatedCost}</div>
          <div className="text-sm">
            <span className="text-gray-400">/month</span>
          </div>
          <div className="cost-description">Estimated cost with 25% savings vs traditional cloud</div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCalculator;
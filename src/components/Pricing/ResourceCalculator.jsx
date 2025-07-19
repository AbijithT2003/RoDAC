import React from 'react';
import GlassCard from '../ui/GlassCard';

const ResourceCalculator = ({ resources, setResources, estimatedCost }) => {
  const sliders = [
    { key: 'cpu', label: 'CPU Cores', max: 32, unit: 'cores' },
    { key: 'memory', label: 'Memory', max: 128, unit: 'GB' },
    { key: 'storage', label: 'Storage', max: 1000, unit: 'GB' }
  ];

  return (
    <GlassCard>
      <h3 className="text-xl font-bold text-white mb-6">Resource Calculator</h3>
      <div className="space-y-6">
        {sliders.map(({ key, label, max, unit }) => (
          <div key={key}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{label}</span>
              <span className="text-cyan-400">{resources[key]} {unit}</span>
            </div>
            <input
              type="range"
              min="1"
              max={max}
              value={resources[key]}
              onChange={(e) => setResources({ ...resources, [key]: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        ))}
        <div className="text-center pt-4 border-t border-white/10">
          <div className="text-3xl font-bold text-white mb-2">${estimatedCost}/month</div>
          <div className="text-gray-400">Estimated cost with 25% savings vs traditional cloud</div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ResourceCalculator;

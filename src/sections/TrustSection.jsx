import React from 'react';
import useAnimatedCounter from '../hooks/useAnimatedCounter';
import './TrustSection.css';

const TrustSection = () => {
  const users = useAnimatedCounter(12000);
  const deployments = useAnimatedCounter(32000);
  const upTime = useAnimatedCounter(99.999);

  return (
    <section className="py-24 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Trusted by Developers and Teams Worldwide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        <div>
          <p className="text-5xl font-bold text-green-400">{users}+</p>
          <p className="mt-2 text-white/70">Active Users</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-blue-400">{deployments}+</p>
          <p className="mt-2 text-white/70">Deployments</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-purple-400">{upTime}%</p>
          <p className="mt-2 text-white/70">System Uptime</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
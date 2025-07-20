import React from 'react';
import useAnimatedCounter from '../hooks/useAnimatedCounter';
import './TrustSection.css'; // Make sure this file exists and is correctly styled

const TrustSection = () => {
  const users = useAnimatedCounter(12000);
  const deployments = useAnimatedCounter(32000);
  const upTime = useAnimatedCounter(99.999);

  return (
    <section className="trust-section">
      <h2 className="trust-heading">Trusted by Developers and Teams Worldwide</h2>
      <div className="trust-grid">
        <div className="trust-card">
          <p className="trust-number green">{users}+</p>
          <p className="trust-label">Active Users</p>
        </div>
        <div className="trust-card">
          <p className="trust-number blue">{deployments}+</p>
          <p className="trust-label">Deployments</p>
        </div>
        <div className="trust-card">
          <p className="trust-number purple">{upTime}%</p>
          <p className="trust-label">System Uptime</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

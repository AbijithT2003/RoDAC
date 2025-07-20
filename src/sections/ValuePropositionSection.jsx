// File: src/sections/ValuePropositionSection.jsx
import React from 'react';
import GlassCard from '../UI/GlassCard';
import { LucideCloudCog, LucideShieldCheck, LucideCpu } from 'lucide-react';
import './ValuePropositionSection.css';

const ValuePropositionSection = () => {
  const propositions = [
    {
      icon: <LucideCloudCog size={32} />,
      title: 'AI-Ready Infrastructure',
      desc: 'GPU-accelerated compute, low-latency storage, high-throughput bandwidth.',
    },
    {
      icon: <LucideShieldCheck size={32} />,
      title: 'Decentralized & Secure',
      desc: 'Data sovereignty, encryption, and blockchain-based access control.',
    },
    {
      icon: <LucideCpu size={32} />,
      title: 'Optimized Workload Placement',
      desc: 'Smart scheduling algorithms that prioritize latency and carbon efficiency.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="heading">Why RoDAC?</h2>
        <p className="subtext">
          Because AI deserves a smarter, greener, and more connected data layer.
        </p>
        <div className="grid">
          {propositions.map((item, index) => (
            <GlassCard key={index} className={`card delay${index}`}>
              <div className="cardContent">
                {item.icon}
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardDesc">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;

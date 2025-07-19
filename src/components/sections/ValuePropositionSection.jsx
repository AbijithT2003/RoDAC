
// File: src/sections/ValuePropositionSection.jsx
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { LucideCloudCog, LucideShieldCheck, LucideCpu } from 'lucide-react';

const ValuePropositionSection = () => {
  const propositions = [
    { icon: <LucideCloudCog size={32} />, title: 'AI-Ready Infrastructure', desc: 'GPU-accelerated compute, low-latency storage, high-throughput bandwidth.' },
    { icon: <LucideShieldCheck size={32} />, title: 'Decentralized & Secure', desc: 'Data sovereignty, encryption, and blockchain-based access control.' },
    { icon: <LucideCpu size={32} />, title: 'Optimized Workload Placement', desc: 'Smart scheduling algorithms that prioritize latency and carbon efficiency.' }
  ];

  return (
    <section className="py-20 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RoDAC?</h2>
        <p className="text-gray-400 mb-12">Because AI deserves a smarter, greener, and more connected data layer.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {propositions.map((item, index) => (
            <GlassCard key={index} className={`transition-opacity delay-${index * 200}`}>
              <div className="flex flex-col items-center gap-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
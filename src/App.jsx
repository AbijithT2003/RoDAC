import React from 'react';
import './App.css';

const features = [
  'Virtual Colocation Environments',
  'AI/ML-Ready Infrastructure',
  'Multi-Cloud & Edge Orchestration',
  'Real-Time Workload Optimization',
];

const FeatureCard = ({ text }) => (
  <div className="feature-card">
    <p>{text}</p>
  </div>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-gradient" />
    <h1>RoDAC: Decentralized Virtual Data Centers</h1>
    <p>
      A futuristic platform enabling scalable, AI-ready infrastructure across multi-cloud and edge.
    </p>
    <div className="button-group">
      <button className="button-primary">Start Free Trial</button>
      <button className="button-secondary">Learn More</button>
    </div>
  </section>
);

const Features = () => (
  <section className="features">
    <h2>Why RoDAC?</h2>
    <div className="feature-grid">
      {features.map((f, idx) => (
        <FeatureCard key={idx} text={f} />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} RoDAC. All rights reserved.
  </footer>
);

const App = () => (
  <div>
    <Hero />
    <Features />
    <Footer />
  </div>
);

export default App;

import React from 'react';
import { Settings, Code, Zap, Brain, Leaf, Shield } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './FeaturesShowcase.css';

const FeaturesShowcase = () => {
  const [featuresRef, isFeaturesVisible] = useIntersectionObserver(0.1);

  const features = [
    {
      title: "Meta-Orchestration",
      description: "Manage multi-cloud infrastructure from a single control plane",
      icon: Settings,
      demo: "Live multi-cloud dashboard preview"
    },
    {
      title: "Developer-First UX",
      description: "Intuitive APIs and CLI tools built for modern development workflows",
      icon: Code,
      demo: "Interactive code editor"
    },
    {
      title: "Edge Computing",
      description: "Deploy workloads closer to users for ultra-low latency",
      icon: Zap,
      demo: "Real-time latency map"
    },
    {
      title: "AI/ML Optimization",
      description: "Purpose-built infrastructure for machine learning workloads",
      icon: Brain,
      demo: "Performance analytics"
    },
    {
      title: "Sustainability",
      description: "Carbon-efficient computing with renewable energy tracking",
      icon: Leaf,
      demo: "Carbon footprint tracker"
    },
    {
      title: "Enterprise Security",
      description: "Zero-trust architecture with end-to-end encryption",
      icon: Shield,
      demo: "Security dashboard"
    }
  ];

  return (
    <section
      ref={featuresRef}
      className="features-section"
    >
      <div className="features-container">
        <div className={`features-header ${isFeaturesVisible ? 'visible' : ''}`}>
          <h2>Everything You Need. Nothing You Don't.</h2>
          <p>Comprehensive platform features designed for modern infrastructure needs.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`feature-card ${isFeaturesVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card">
                  <Icon className="feature-icon" />
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-demo">{feature.demo}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
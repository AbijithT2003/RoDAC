import React from 'react';
import {  
  Rocket, Play, Users, Activity, Globe, BookOpen, Code,
  GitBranch, ExternalLink, ArrowRight
} from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';
import './DeveloperResourcesSection.css';

const DeveloperResourcesSection = () => {
  const [resourcesRef, isResourcesVisible] = useIntersectionObserver(0.1);

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: BookOpen,
      stats: "500+ pages",
      link: "#docs",
      gradient: "gradient-blue"
    },
    {
      title: "API Reference",
      description: "Access and interact with RoDAC's core services",
      icon: Code,
      stats: "100+ endpoints",
      link: "#api",
      gradient: "gradient-purple"
    },
    {
      title: "GitHub",
      description: "View the source code, contribute, or fork",
      icon: GitBranch,
      stats: "200+ stars",
      link: "#github",
      gradient: "gradient-yellow"
    },
    {
      title: "Quickstart",
      description: "Get up and running in under 5 minutes",
      icon: Rocket,
      stats: "5 min setup",
      link: "#quickstart",
      gradient: "gradient-green"
    }
  ];

  return (
    <section ref={resourcesRef} className="developer-section" id="docs">
      <div className="developer-header">
        <h2 className="developer-title">Developer Resources</h2>
        <p className="developer-subtitle">
          Everything you need to build, deploy, and scale with RoDAC.
        </p>
      </div>
      <div className="developer-grid">
        {resources.map((resource, index) => (
          <div
            key={resource.title}
            className={`dev-card-wrapper ${isResourcesVisible ? 'visible' : 'hidden'} delay-${index}`}
          >
            <GlassCard className={`dev-resource-card ${resource.gradient}`}>
              <div className="dev-card-header">
                <resource.icon className="dev-icon" />
                <span className="dev-stats">
                  {resource.stats}
                </span>
              </div>
              <h3 className="dev-title">
                {resource.title}
              </h3>
              <p className="dev-description">
                {resource.description}
              </p>
              <Button variant="ghost" size="sm" className="dev-button">
                Learn more <ArrowRight className="dev-arrow-icon" />
              </Button>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperResourcesSection;

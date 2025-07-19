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
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "API Reference",
      description: "Access and interact with RoDAC's core services",
      icon: Code,
      stats: "100+ endpoints",
      link: "#api",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "GitHub",
      description: "View the source code, contribute, or fork",
      icon: GitBranch,
      stats: "200+ stars",
      link: "#github",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Quickstart",
      description: "Get up and running in under 5 minutes",
      icon: Rocket,
      stats: "5 min setup",
      link: "#quickstart",
      gradient: "from-green-500 to-lime-500"
    }
  ];

  return (
    <section ref={resourcesRef} className="py-20 px-4 sm:px-6 lg:px-8" id="docs">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Developer Resources
        </h2>
        <p className="text-base text-gray-300">
          Everything you need to build, deploy, and scale with RoDAC.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div
            key={resource.title}
            className={`transition-all duration-1000 delay-[${index * 100}ms]
              ${isResourcesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <GlassCard className={`bg-gradient-to-br ${resource.gradient} p-6 rounded-2xl shadow-lg h-full`}>
              <div className="flex items-center justify-between mb-4">
                <resource.icon className="w-8 h-8 text-white" />
                <span className="text-sm text-white bg-black bg-opacity-20 rounded-full px-3 py-1">
                  {resource.stats}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                {resource.description}
              </p>
              <Button variant="ghost" size="sm" className="text-white hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperResourcesSection;

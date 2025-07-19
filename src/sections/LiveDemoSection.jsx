import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Monitor, Globe, Zap } from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './LiveDemoSection.css';

const LiveDemoSection = () => {
  const [demoRef, isDemoVisible] = useIntersectionObserver(0.1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { title: 'Initialize Project', command: 'rodac init my-app --template=react', status: 'completed' },
    { title: 'Configure Resources', command: 'rodac config --cpu=4 --memory=8GB', status: 'active' },
    { title: 'Deploy Globally', command: 'rodac deploy --regions=global', status: 'pending' },
    { title: 'Scale Automatically', command: 'rodac scale --auto', status: 'pending' }
  ];

  const metrics = [
    { label: 'Response Time', value: '12ms', icon: Zap, color: 'text-green-400' },
    { label: 'Active Regions', value: '25', icon: Globe, color: 'text-blue-400' },
    { label: 'CPU Usage', value: '34%', icon: Monitor, color: 'text-purple-400' }
  ];

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= demoSteps.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <section ref={demoRef} className="py-20 px-4 sm:px-6 lg:px-8" id="demo">
      <div className="max-w-7xl mx-auto">
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isDemoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See RoDAC in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how easy it is to deploy and scale your applications with RoDAC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Demo */}
          <div className={`
            transition-all duration-1000 delay-300
            ${isDemoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            <GlassCard className="p-0 overflow-hidden">
              <div className="bg-black/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4">RoDAC Terminal</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" onClick={handlePlayDemo}>
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={resetDemo}>
                      <RotateCcw size={16} />
                    </Button>
                  </div>
                </div>

                <div className="font-mono text-sm space-y-2">
                  {demoSteps.map((step, index) => (
                    <div key={index} className={`
                      transition-all duration-500
                      ${index <= currentStep ? 'opacity-100' : 'opacity-30'}
                    `}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-cyan-400">$</span>
                        <span className="text-green-400">{step.command}</span>
                      </div>
                      {index <= currentStep && (
                        <div className="text-gray-300 ml-4 animate-pulse">
                          ✓ {step.title} {index === currentStep && isPlaying ? '...' : 'completed'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Metrics Dashboard */}
          <div className={`
            transition-all duration-1000 delay-500
            ${isDemoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-6">Live Metrics</h3>
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div key={metric.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                      <span className="text-gray-300">{metric.label}</span>
                    </div>
                    <div className={`text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Usage Graph Placeholder */}
              <div className="mt-8">
                <div className="text-sm text-gray-400 mb-2">Resource Usage (Last 24h)</div>
                <div className="h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-end gap-1 p-4">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i}
                      className="bg-gradient-to-t from-cyan-500 to-purple-500 rounded-sm flex-1 animate-pulse"
                      style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;

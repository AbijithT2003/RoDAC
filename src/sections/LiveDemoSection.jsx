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
    { title: 'Initialize Project', command: 'rodac init my-app --template=react' },
    { title: 'Configure Resources', command: 'rodac config --cpu=4 --memory=8GB' },
    { title: 'Deploy Globally', command: 'rodac deploy --regions=global' },
    { title: 'Scale Automatically', command: 'rodac scale --auto' }
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
            clearInterval(interval);
            setIsPlaying(false);
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
    <section ref={demoRef} className="live-demo-section" id="demo">
      <div className="max-w-7xl mx-auto">
        <div className={`live-demo-header ${isDemoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2>See RoDAC in Action</h2>
          <p>Watch how easy it is to deploy and scale your applications with RoDAC.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Demo */}
          <div className={`transition-all duration-1000 delay-300 ${isDemoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <GlassCard className="p-0 overflow-hidden">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control-red" />
                    <div className="control-yellow" />
                    <div className="control-green" />
                    <span className="terminal-title">RoDAC Terminal</span>
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

                <div className="command-line">
                  {demoSteps.map((step, index) => (
                    <div key={index} className={`${index <= currentStep ? 'opacity-100' : 'opacity-30'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="prompt">$</span>
                        <span className="command">{step.command}</span>
                      </div>
                      {index <= currentStep && (
                        <div className="status">
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
          <div className={`transition-all duration-1000 delay-500 ${isDemoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-6">Live Metrics</h3>
              <div className="live-metrics">
                {metrics.map(metric => (
                  <div key={metric.label} className="metric-row">
                    <div className="metric-label">
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                      <span>{metric.label}</span>
                    </div>
                    <div className={`metric-value ${metric.color}`}>{metric.value}</div>
                  </div>
                ))}
              </div>

              <div className="usage-graph">
                <div className="usage-graph-title">Resource Usage (Last 24h)</div>
                <div className="usage-bars">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="usage-bar"
                      style={{
                        height: `${Math.random() * 80 + 20}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
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

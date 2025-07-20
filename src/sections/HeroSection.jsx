import React from 'react';
import { Rocket, Play, Users, Activity, Globe } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import AnimatedBackground from '../UI/AnimatedBackground';
import FloatingElement from '../UI/FloatingElement';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';
import './HeroSection.css';

const HeroSection = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver(0.1);
  const typingText = ("Transform Your Infrastructure Into a Superpower");

  return (
    <section ref={heroRef} className="hero-section">
      <div className="animated-background">
        <AnimatedBackground />
      </div>

      <div className="hero-content">
        <div className={`fade-in-up ${isHeroVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            {typingText}
            <span className="animate-pulse"></span>
          </h1>

          <p className="hero-subtitle">
            Virtual colocation meets AI-ready compute. Deploy anywhere, scale everywhere, pay only for what you use.
          </p>

          <div className="hero-buttons">
            <Button size="lg" icon={<Rocket size={20} />}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" icon={<Play size={20} />}>
              Watch 2-min Demo
            </Button>
          </div>

          <div className="hero-metrics-grid">
            {[
              { label: 'Active Users', value: '12K+', icon: Users },
              { label: 'Deployments', value: '50K+', icon: Rocket },
              { label: 'Uptime', value: '99.9%', icon: Activity },
              { label: 'Regions', value: '25+', icon: Globe }
            ].map(({ label, value, icon: Icon }, index) => (
              <FloatingElement key={label} delay={index * 0.5}>
                <GlassCard className="hero-metric-card">
                  <Icon className="hero-metric-icon" />
                  <div className="hero-metric-value">{value}</div>
                  <div className="hero-metric-label">{label}</div>
                </GlassCard>
              </FloatingElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

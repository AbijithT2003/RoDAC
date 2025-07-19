import React from 'react';
import { Rocket, Play, Users, Activity, Globe } from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useTypingEffect from '../../hooks/useTypingEffect';
import AnimatedBackground from '../ui/AnimatedBackground';
import FloatingElement from '../ui/FloatingElement';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const HeroSection = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver(0.1);
  const typingText = useTypingEffect("Transform Your Infrastructure Into a Superpower");
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className={`
          transition-all duration-1000 transform
          ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {typingText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Virtual colocation meets AI-ready compute. Deploy anywhere, scale everywhere, pay only for what you use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" icon={<Rocket size={20} />}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" icon={<Play size={20} />}>
              Watch 2-min Demo
            </Button>
          </div>
          
          {/* Floating metrics cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Active Users', value: '12K+', icon: Users },
              { label: 'Deployments', value: '50K+', icon: Rocket },
              { label: 'Uptime', value: '99.9%', icon: Activity },
              { label: 'Regions', value: '25+', icon: Globe }
            ].map(({ label, value, icon: Icon }, index) => (
              <FloatingElement key={label} delay={index * 0.5}>
                <GlassCard className="text-center">
                  <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
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
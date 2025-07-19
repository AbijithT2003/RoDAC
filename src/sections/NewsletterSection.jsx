import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [newsletterRef, isNewsletterVisible] = useIntersectionObserver(0.1);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section ref={newsletterRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`
          transition-all duration-1000
          ${isNewsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Updated with RoDAC
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get the latest updates on platform features, industry insights, and developer resources.
          </p>

          <GlassCard className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className={`w-full ${isSubscribed ? 'bg-green-500' : ''}`}
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle size={20} className="mr-2" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe to Updates'
                )}
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;


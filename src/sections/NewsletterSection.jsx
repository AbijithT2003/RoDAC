import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [newsletterRef, isVisible] = useIntersectionObserver(0.1);
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
    <section
      ref={newsletterRef}
      className={`newsletter-section ${isVisible ? 'newsletter-visible' : 'newsletter-hidden'}`}
    >
      <div className="newsletter-container">
        <h2 className="newsletter-title">Stay Updated with RoDAC</h2>
        <p className="newsletter-subtitle">
          Get the latest updates on platform features, industry insights, and developer resources.
        </p>

        <GlassCard className="newsletter-card">
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
            </div>

            <Button
              type="submit"
              className={`newsletter-button ${isSubscribed ? 'newsletter-subscribed' : ''}`}
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <CheckCircle size={20} className="icon-check" />
                  Subscribed!
                </>
              ) : (
                'Subscribe to Updates'
              )}
            </Button>
          </form>
          <p className="newsletter-privacy">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default NewsletterSection;

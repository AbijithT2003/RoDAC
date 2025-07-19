import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Play, Activity, Globe, Zap, TrendingUp, Users, BookOpen, 
  MessageSquare, Star, GitBranch, ExternalLink, Code, Database, Shield, 
  ArrowRight, Settings, Leaf, Brain, CheckCircle, ChevronDown 
} from 'lucide-react';

// ========================
// LAYER 1: CORE UTILITIES & HOOKS
// ========================

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const useAnimatedCounter = (end, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (now < endTime) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return count;
};

const useTypingEffect = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let index = 0;
    
    const typeWriter = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, speed);
      }
    };
    
    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, [text, speed]);

  return displayText;
};
import { useState, useEffect } from 'react';

const useAnimatedCounter = (endValue, duration = 2000, startDelay = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now() + startDelay;
    const startValue = 0;
    
    const updateCount = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(updateCount);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };
    
    const timeout = setTimeout(() => {
      requestAnimationFrame(updateCount);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [endValue, duration, startDelay]);

  // Format the number based on its value
  if (endValue < 100 && endValue % 1 !== 0) {
    return count.toFixed(3);
  }
  return Math.floor(count).toLocaleString();
};

export default useAnimatedCounter;
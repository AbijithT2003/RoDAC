import React from 'react';

const FloatingElement = ({ children, delay = 0, className = '' }) => {
  return (
    <div 
      className={`animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
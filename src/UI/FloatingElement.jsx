import React from 'react';
import './FloatingElement.css'; // Assuming you have styles for the floating element
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
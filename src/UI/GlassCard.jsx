import React from 'react';
import './styles/GlassCard.css';
const GlassCard = ({ children, className = '', ...props }) => {
  const baseClasses = 'backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300';
  
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../UI/Button';
import './Navigation.css';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="nav-container">
      <div className="nav-logo">RoDAC</div>

      <div className="nav-links-desktop">
        <a href="#features" className="nav-link">Features</a>
        <a href="#demo" className="nav-link">Demo</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#trust" className="nav-link">Trust</a>
        <Button variant="primary" size="sm">Join Beta</Button>
      </div>

      <button className="nav-toggle-button" onClick={toggleMenu}>
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="nav-mobile-menu">
          <a href="#features" className="nav-link">Features</a>
          <a href="#demo" className="nav-link">Demo</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#trust" className="nav-link">Trust</a>
          <Button variant="primary" size="sm">Join Beta</Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

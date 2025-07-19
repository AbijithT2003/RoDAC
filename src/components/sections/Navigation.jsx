import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="text-white text-xl font-bold">RoDAC</div>
      <div className="hidden md:flex gap-6 text-gray-300">
        <a href="#features">Features</a>
        <a href="#demo">Demo</a>
        <a href="#pricing">Pricing</a>
        <a href="#trust">Trust</a>
        <Button variant="primary" size="sm">Join Beta</Button>
      </div>
      <button className="md:hidden text-white" onClick={toggleMenu}>{open ? <X /> : <Menu />}</button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-6 text-gray-300">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
          <a href="#trust">Trust</a>
          <Button variant="primary" size="sm">Join Beta</Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="grid-cols">
          {/* Brand */}
          <div className="brand-section">
            <div className="brand">RoDAC</div>
            <p className="description">
              Democratizing access to high-performance computing infrastructure through 
              decentralized virtual data center orchestration.
            </p>
            <div className="social-links">
              {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
                <a key={social} href="#">{social}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h4>Product</h4>
            <ul>
              {['Features', 'Pricing', 'Documentation', 'API Reference'].map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="support-links">
            <h4>Support</h4>
            <ul>
              {['Help Center', 'Community', 'Status Page', 'Contact Us'].map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-content">
            <p>© 2025 RoDAC. All rights reserved.</p>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

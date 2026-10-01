import React from 'react';
import { Globe, Mail, MessageCircle, Phone, Stethoscope } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="#" className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#fLogoGrad)"/>
                  <path d="M16 8c-2.2 0-4 1.8-4 4v2h-1a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1h-1v-2c0-2.2-1.8-4-4-4zm2 6h-4v-2a2 2 0 114 0v2z" fill="white" opacity="0.9"/>
                  <defs>
                    <linearGradient id="fLogoGrad" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#3B82F6"/>
                      <stop offset="1" stopColor="#06B6D4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="footer-logo-text">Medi<span style={{ color: 'var(--primary)' }}>Care+</span></span>
            </a>
            <p className="footer-desc">
              Your trusted partner in healthcare. Making quality medical care accessible and affordable for everyone.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social"><Globe size={18} /></a>
              <a href="#" className="footer-social"><MessageCircle size={18} /></a>
              <a href="#" className="footer-social"><Mail size={18} /></a>
              <a href="#" className="footer-social"><Phone size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>For Patients</h4>
            <ul>
              <li><a href="#">Search for Doctors</a></li>
              <li><a href="#">Search for Clinics</a></li>
              <li><a href="#">Search for Hospitals</a></li>
              <li><a href="#">Book Diagnostic Tests</a></li>
              <li><a href="#">Book Full Body Checkups</a></li>
              <li><a href="#">Read Health Articles</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>For Providers</h4>
            <ul>
              <li><a href="#">Provider Profile</a></li>
              <li><a href="#">Provider Reach</a></li>
              <li><a href="#">Provider Ray</a></li>
              <li><a href="#">Provider Consult</a></li>
              <li><a href="#">Health Records</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MediCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Globe, Mail, MessageCircle, Phone } from 'lucide-react';
import LogoIcon from './LogoIcon';
import './Footer.css';

const FooterCol = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`footer-col ${isOpen ? 'open' : ''}`}>
      <h4 onClick={() => setIsOpen(!isOpen)}>
        {title} 
        <span className="footer-accordion-icon">{isOpen ? '-' : '+'}</span>
      </h4>
      <div className="footer-col-content">
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="#" className="footer-logo">
              <div className="footer-logo-icon">
                <LogoIcon size={30} id="footerLogo" />
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

          <FooterCol title="For Patients">
            <ul>
              <li><a href="#">Search for Doctors</a></li>
              <li><a href="#">Search for Clinics</a></li>
              <li><a href="#">Search for Hospitals</a></li>
              <li><a href="#">Book Diagnostic Tests</a></li>
              <li><a href="#">Book Full Body Checkups</a></li>
              <li><a href="#">Read Health Articles</a></li>
            </ul>
          </FooterCol>

          <FooterCol title="For Providers">
            <ul>
              <li><a href="#">Provider Profile</a></li>
              <li><a href="#">Provider Reach</a></li>
              <li><a href="#">Provider Ray</a></li>
              <li><a href="#">Provider Consult</a></li>
              <li><a href="#">Health Records</a></li>
            </ul>
          </FooterCol>

          <FooterCol title="More">
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </FooterCol>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MediCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { ShieldCheck, Headphones, MapPin, Globe } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <ShieldCheck size={16} className="topbar-icon" />
          <span>Trusted by 50M+ Patients Across India</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-item">
            <Headphones size={14} />
            <span>24/7 Support</span>
          </div>
          <div className="topbar-divider" />
          <div className="topbar-item">
            <MapPin size={14} />
            <span>Bangalore</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1l4 4 4-4"/></svg>
          </div>
          <div className="topbar-divider" />
          <div className="topbar-item">
            <Globe size={14} />
            <span>English</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1l4 4 4-4"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

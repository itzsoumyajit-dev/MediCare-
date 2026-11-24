import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Headphones, MapPin, Globe } from 'lucide-react';
import { useCity } from '../context/CityContext';
import './TopBar.css';

const TopBar = () => {
  const { selectedCity, setSelectedCity, cities } = useCity();
  const [isCityOpen, setIsCityOpen] = useState(false);
  const cityRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setIsCityOpen(false);
      }
    };
    if (isCityOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isCityOpen]);

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
          <div
            className="topbar-item topbar-city-wrapper"
            ref={cityRef}
            onClick={() => setIsCityOpen(prev => !prev)}
          >
            <MapPin size={14} />
            <span>{selectedCity}</span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="currentColor"
              style={{
                transform: isCityOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease'
              }}
            >
              <path d="M1 1l4 4 4-4"/>
            </svg>

            {isCityOpen && (
              <div className="topbar-city-dropdown" onClick={e => e.stopPropagation()}>
                <div className="topbar-city-header">Select City</div>
                <div className="topbar-city-list">
                  {cities.map(city => (
                    <div
                      key={city}
                      className={`topbar-city-option ${selectedCity === city ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityOpen(false);
                      }}
                    >
                      <MapPin size={12} />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

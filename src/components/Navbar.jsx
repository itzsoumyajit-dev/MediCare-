import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, User, Menu, ArrowRight } from 'lucide-react';
import AuthModal from './AuthModal';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState('login');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuth = (view) => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
                <path d="M16 8c-2.2 0-4 1.8-4 4v2h-1a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1h-1v-2c0-2.2-1.8-4-4-4zm2 6h-4v-2a2 2 0 114 0v2z" fill="white" opacity="0.9"/>
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#06B6D4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Medi<span className="text-primary">Care+</span></span>
              <span className="nav-logo-tagline">Better Care, Brighter Tomorrows</span>
            </div>
          </Link>

          <nav className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Find Doctors</Link>
            <Link to="/video-consult" className={`nav-link ${location.pathname === '/video-consult' ? 'active' : ''}`}>Video Consult</Link>
            <Link to="/medicines" className={`nav-link ${location.pathname === '/medicines' ? 'active' : ''}`}>Medicines</Link>
            <Link to="/lab-tests" className={`nav-link ${location.pathname === '/lab-tests' ? 'active' : ''}`}>Lab Tests</Link>
            <a href="#" className="nav-link">Hospitals</a>
            <a href="#" className="nav-link">Health Packages</a>
            <a href="#" className="nav-link nav-link-dropdown">
              For Providers <ChevronDown size={14} />
            </a>
          </nav>

          <div className="nav-actions">
            <button className="nav-search-btn">
              <Search size={20} />
            </button>
            <button className="nav-login-btn" onClick={() => openAuth('login')}>
              <User size={16} />
              Login
            </button>
            <button className="nav-signup-btn" onClick={() => openAuth('signup')}>
              Sign Up <ArrowRight size={16} />
            </button>
            <button className="nav-menu-btn">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialView={authView} 
      />
    </>
  );
};

export default Navbar;

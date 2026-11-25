import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, User, Menu, ArrowRight, X, LogOut, Calendar, FileText, ShieldCheck } from 'lucide-react';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const location = useLocation();

  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    if (isUserDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isUserDropdownOpen]);

  const openAuth = (view) => {
    setAuthView(view);
    setIsAuthOpen(true);
    setIsMobileMenuOpen(false);
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
            <button className="nav-search-btn" aria-label="Search">
              <Search size={20} />
            </button>

            {isAuthenticated && user ? (
              <div className="nav-user-profile" ref={userDropdownRef}>
                <button 
                  type="button"
                  className="nav-user-badge" 
                  onClick={() => setIsUserDropdownOpen(prev => !prev)}
                  aria-expanded={isUserDropdownOpen}
                >
                  <div className="nav-user-avatar">
                    {user.avatar || user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="nav-user-name">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={14} className={`nav-user-chevron ${isUserDropdownOpen ? 'open' : ''}`} />
                </button>

                {isUserDropdownOpen && (
                  <div className="nav-user-dropdown" onClick={e => e.stopPropagation()}>
                    <div className="user-dropdown-header">
                      <div className="user-dropdown-avatar">
                        {user.avatar || user.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="user-dropdown-info">
                        <div className="user-dropdown-fullname">{user.name}</div>
                        <div className="user-dropdown-email">{user.email}</div>
                      </div>
                    </div>
                    <div className="user-dropdown-divider" />
                    <div className="user-dropdown-menu">
                      <div className="user-dropdown-item" onClick={() => setIsUserDropdownOpen(false)}>
                        <Calendar size={16} />
                        <span>My Appointments</span>
                        <span className="user-dropdown-pill">{user.appointmentsCount || 2} Active</span>
                      </div>
                      <div className="user-dropdown-item" onClick={() => setIsUserDropdownOpen(false)}>
                        <FileText size={16} />
                        <span>Medical Records</span>
                      </div>
                      <div className="user-dropdown-item" onClick={() => setIsUserDropdownOpen(false)}>
                        <ShieldCheck size={16} />
                        <span>Health Insurance</span>
                      </div>
                    </div>
                    <div className="user-dropdown-divider" />
                    <button 
                      type="button"
                      className="user-dropdown-logout-btn" 
                      onClick={() => {
                        logout();
                        setIsUserDropdownOpen(false);
                      }}
                    >
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="nav-login-btn" onClick={() => openAuth('login')}>
                  <User size={16} />
                  Login
                </button>
                <button className="nav-signup-btn" onClick={() => openAuth('signup')}>
                  Sign Up <ArrowRight size={16} />
                </button>
              </>
            )}

            <button className="nav-menu-btn" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="nav-logo-text">
              <span className="nav-logo-name">Medi<span className="text-primary">Care+</span></span>
            </div>
            <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          
          <nav className="mobile-menu-links">
            <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Find Doctors</Link>
            <Link to="/video-consult" className={`mobile-nav-link ${location.pathname === '/video-consult' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Video Consult</Link>
            <Link to="/medicines" className={`mobile-nav-link ${location.pathname === '/medicines' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Medicines</Link>
            <Link to="/lab-tests" className={`mobile-nav-link ${location.pathname === '/lab-tests' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Lab Tests</Link>
            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Hospitals</a>
            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Health Packages</a>
            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>For Providers</a>
          </nav>
          
          <div className="mobile-menu-auth">
            {isAuthenticated && user ? (
              <div className="mobile-user-section">
                <div className="mobile-user-card">
                  <div className="mobile-user-avatar">
                    {user.avatar || user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="mobile-user-info">
                    <div className="mobile-user-name">{user.name}</div>
                    <div className="mobile-user-email">{user.email}</div>
                  </div>
                </div>
                <button 
                  className="mobile-logout-btn" 
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogOut size={18} />
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <button className="mobile-login-btn" onClick={() => openAuth('login')}>
                  <User size={20} />
                  Login
                </button>
                <button className="mobile-signup-btn" onClick={() => openAuth('signup')}>
                  Sign Up <ArrowRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <AuthModal 
        key={`${authView}-${isAuthOpen}`}
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialView={authView} 
      />
    </>
  );
};

export default Navbar;

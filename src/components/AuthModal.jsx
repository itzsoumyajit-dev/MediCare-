import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialView = 'login' }) => {
  const [view, setView] = useState(initialView); // 'login' or 'signup'

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-container" onClick={e => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="auth-modal-left">
          <div className="auth-modal-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#authLogoGrad)"/>
              <path d="M16 8c-2.2 0-4 1.8-4 4v2h-1a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1h-1v-2c0-2.2-1.8-4-4-4zm2 6h-4v-2a2 2 0 114 0v2z" fill="white" opacity="0.9"/>
              <defs>
                <linearGradient id="authLogoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#3B82F6"/>
                  <stop offset="1" stopColor="#06B6D4"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Medi<span className="text-primary">Care+</span></span>
          </div>
          <div className="auth-modal-left-content">
            <h2>{view === 'login' ? 'Welcome Back!' : 'Join MediCare+'}</h2>
            <p>
              {view === 'login' 
                ? 'Sign in to access your appointments, medical records, and expert consultations.' 
                : 'Create an account to book appointments, order medicines, and consult top doctors.'}
            </p>
          </div>
          <div className="auth-modal-left-decoration">
            <div className="auth-circle auth-circle-1"></div>
            <div className="auth-circle auth-circle-2"></div>
          </div>
        </div>

        <div className="auth-modal-right">
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${view === 'login' ? 'active' : ''}`}
              onClick={() => setView('login')}
            >
              Log In
            </button>
            <button 
              className={`auth-tab ${view === 'signup' ? 'active' : ''}`}
              onClick={() => setView('signup')}
            >
              Sign Up
            </button>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            {view === 'signup' && (
              <div className="auth-input-group">
                <label>Full Name</label>
                <div className="auth-input-wrapper">
                  <User size={18} className="auth-input-icon" />
                  <input type="text" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div className="auth-input-group">
              <label>Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={18} className="auth-input-icon" />
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Password</label>
              <div className="auth-input-wrapper">
                <Lock size={18} className="auth-input-icon" />
                <input type="password" placeholder="••••••••" />
              </div>
              {view === 'login' && (
                <div className="auth-forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
              )}
            </div>

            <button type="submit" className="auth-submit-btn">
              {view === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

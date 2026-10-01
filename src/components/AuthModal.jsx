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

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="auth-social">
            <button className="auth-social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="auth-social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.84 1.5.07 2.65.65 3.39 1.76-2.92 1.64-2.4 5.76.43 7.02-.65 1.72-1.52 3.16-2.4 4.23zm-3.69-14.7c-.16-2.05 1.79-3.79 3.8-3.84.28 2.1-1.74 4.02-3.8 3.84z"/>
              </svg>
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

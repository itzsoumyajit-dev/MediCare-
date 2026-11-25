import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LogoIcon from './LogoIcon';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialView = 'login' }) => {
  const [view, setView] = useState(initialView);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, signup, quickDemoLogin } = useAuth();

  const handleTabChange = (newView) => {
    setView(newView);
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    setTimeout(() => {
      if (view === 'login') {
        const res = login({ email, password });
        if (res.success) {
          setSuccess('Signed in successfully! Welcome back.');
          setTimeout(() => {
            setLoading(false);
            onClose();
          }, 600);
        } else {
          setLoading(false);
          setError(res.message);
        }
      } else {
        const res = signup({ name, email, password });
        if (res.success) {
          setSuccess('Account created successfully! Welcome to MediCare+.');
          setTimeout(() => {
            setLoading(false);
            onClose();
          }, 600);
        } else {
          setLoading(false);
          setError(res.message);
        }
      }
    }, 400);
  };

  const handleDemoLogin = () => {
    setError('');
    setSuccess('');
    setLoading(true);
    setTimeout(() => {
      quickDemoLogin();
      setSuccess('Logged in as Demo User (Dr. Soumya Sharma)!');
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 500);
    }, 300);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address to receive password reset instructions.');
      return;
    }
    setError('');
    setSuccess('Password reset link has been sent to your email.');
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-container" onClick={e => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="auth-modal-left">
          <div className="auth-modal-logo">
            <LogoIcon size={30} id="authModalLogo" />
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
              type="button"
              className={`auth-tab ${view === 'login' ? 'active' : ''}`}
              onClick={() => handleTabChange('login')}
            >
              Log In
            </button>
            <button 
              type="button"
              className={`auth-tab ${view === 'signup' ? 'active' : ''}`}
              onClick={() => handleTabChange('signup')}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="auth-alert auth-alert-error">
              <AlertCircle size={16} className="auth-alert-icon" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="auth-alert auth-alert-success">
              <CheckCircle2 size={16} className="auth-alert-icon" />
              <span>{success}</span>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            {view === 'signup' && (
              <div className="auth-input-group">
                <label>Full Name</label>
                <div className="auth-input-wrapper">
                  <User size={18} className="auth-input-icon" />
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="auth-input-group">
              <label>Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={18} className="auth-input-icon" />
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Password</label>
              <div className="auth-input-wrapper">
                <Lock size={18} className="auth-input-icon" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(prev => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {view === 'login' && (
                <div className="auth-forgot-password">
                  <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
                </div>
              )}
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? (
                <span className="auth-btn-loading">
                  <Loader2 size={18} className="auth-spinner" />
                  {view === 'login' ? 'Signing In...' : 'Creating Account...'}
                </span>
              ) : (
                view === 'login' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <button 
            type="button" 
            className="auth-demo-btn" 
            onClick={handleDemoLogin}
            disabled={loading}
          >
            <Sparkles size={16} className="auth-demo-icon" />
            <span>1-Click Demo Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

import React, { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_USERS = [
  {
    id: 'demo_user_1',
    name: 'Dr. Soumya Sharma',
    email: 'soumya@medicare.com',
    password: 'password123',
    avatar: 'SS',
    appointmentsCount: 2,
  },
  {
    id: 'demo_user_2',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    avatar: 'JD',
    appointmentsCount: 1,
  }
];

const getInitials = (name) => {
  if (!name) return 'U';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('medicare_users');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_USERS;
  });

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('medicare_current_user');
      if (savedUser) {
        return JSON.parse(savedUser);
      }
    } catch {
      // fallback
    }
    return null;
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  useEffect(() => {
    try {
      localStorage.setItem('medicare_users', JSON.stringify(users));
    } catch {
      // ignore
    }
  }, [users]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('medicare_current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('medicare_current_user');
      }
    } catch {
      // ignore
    }
  }, [user]);

  const login = ({ email, password }) => {
    const cleanEmail = email?.trim().toLowerCase();
    if (!cleanEmail) {
      return { success: false, message: 'Please enter your email address.' };
    }
    if (!password) {
      return { success: false, message: 'Please enter your password.' };
    }

    const matchedUser = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!matchedUser) {
      return { 
        success: false, 
        message: 'No account found with this email. Please check or switch to Sign Up.' 
      };
    }

    if (matchedUser.password !== password) {
      return { 
        success: false, 
        message: 'Incorrect password. Please try again or use Demo Login.' 
      };
    }

    setUser(matchedUser);
    showToast(`Welcome back, ${matchedUser.name}!`);
    return { success: true, user: matchedUser };
  };

  const signup = ({ name, email, password }) => {
    const cleanName = name?.trim();
    const cleanEmail = email?.trim().toLowerCase();

    if (!cleanName || cleanName.length < 2) {
      return { success: false, message: 'Please enter your full name (minimum 2 letters).' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    if (!password || password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }

    const existingUser = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (existingUser) {
      return { 
        success: false, 
        message: 'An account with this email already exists. Please Log In instead.' 
      };
    }

    const newUser = {
      id: 'user_' + Date.now(),
      name: cleanName,
      email: cleanEmail,
      password: password,
      avatar: getInitials(cleanName),
      appointmentsCount: 0,
      createdAt: new Date().toISOString()
    };

    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
    showToast(`Account created! Welcome to MediCare+, ${cleanName}!`);
    return { success: true, user: newUser };
  };

  const quickDemoLogin = () => {
    const demoUser = users[0] || DEFAULT_USERS[0];
    setUser(demoUser);
    showToast(`Logged in as demo user (${demoUser.name})!`);
    return { success: true, user: demoUser };
  };

  const logout = () => {
    const prevName = user?.name;
    setUser(null);
    showToast(prevName ? `Logged out. See you soon, ${prevName}!` : 'Logged out successfully.', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        quickDemoLogin,
        logout,
        toast,
        showToast
      }}
    >
      {children}
      {toast && (
        <div 
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: toast.type === 'error' ? '#EF4444' : '#10B981',
            color: 'white',
            padding: '14px 22px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 600,
            fontSize: '0.95rem',
            animation: 'slideInToast 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span>{toast.message}</span>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

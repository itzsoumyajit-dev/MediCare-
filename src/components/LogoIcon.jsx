import React from 'react';

const LogoIcon = ({ size = 32, className = '', id = 'logo' }) => {
  const bgGradId = `${id}BgGrad`;
  const pulseGradId = `${id}PulseGrad`;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="9" fill={`url(#${bgGradId})`} />
      <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" stroke="white" strokeOpacity="0.2" />
      
      {/* Rounded Medical Cross */}
      <path 
        d="M16 6 C17.657 6 19 7.343 19 9 V13 H23 C24.657 13 26 14.343 26 16 C26 17.657 24.657 19 23 19 H19 V23 C19 24.657 17.657 26 16 26 C14.343 26 13 24.657 13 23 V19 H9 C7.343 19 6 17.657 6 16 C6 14.343 7.343 13 9 13 H13 V9 C13 7.343 14.343 6 16 6 Z" 
        fill="white"
      />
      
      {/* Vital Heartbeat ECG Wave */}
      <path 
        d="M8 16 H12 L13.8 11.5 L16 20.5 L18.2 13.5 L19.8 16 H24" 
        stroke={`url(#${pulseGradId})`} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      <defs>
        <linearGradient id={bgGradId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id={pulseGradId} x1="8" y1="16" x2="24" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="0.5" stopColor="#0284C7" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;

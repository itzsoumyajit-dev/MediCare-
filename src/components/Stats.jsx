import React from 'react';
import { Users, UserCheck, Building2, Star } from 'lucide-react';
import './Stats.css';

const stats = [
  { icon: <Users size={28} />, number: '50M+', label: 'Happy Patients', color: '#3B82F6', bg: '#DBEAFE' },
  { icon: <UserCheck size={28} />, number: '15K+', label: 'Verified Doctors', color: '#10B981', bg: '#D1FAE5' },
  { icon: <Building2 size={28} />, number: '5K+', label: 'Partner Hospitals', color: '#8B5CF6', bg: '#EDE9FE' },
  { icon: <Star size={28} />, number: '4.8/5', label: 'Average Rating', color: '#F59E0B', bg: '#FEF3C7' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color, background: stat.bg }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

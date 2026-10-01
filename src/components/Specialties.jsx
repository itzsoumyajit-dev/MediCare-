import React from 'react';
import { ArrowRight, Heart, Crown } from 'lucide-react';
import './Specialties.css';

const specialties = [
  {
    id: 1,
    name: 'Dermatologist',
    desc: 'Skin, Hair & Nails',
    arrowColor: '#F472B6',
    arrowBg: '#FDF2F8',
    icon: '/icons/icon_1.png',
  },
  {
    id: 2,
    name: 'Pediatrician',
    desc: 'Child Healthcare',
    arrowColor: '#3B82F6',
    arrowBg: '#DBEAFE',
    popular: true,
    icon: '/icons/icon_2.png',
  },
  {
    id: 3,
    name: 'Gynecologist',
    desc: "Women's Health",
    arrowColor: '#EC4899',
    arrowBg: '#FDF2F8',
    icon: '/icons/icon_3.png',
  },
  {
    id: 4,
    name: 'Dentist',
    desc: 'Oral Care',
    arrowColor: '#3B82F6',
    arrowBg: '#EFF6FF',
    icon: '/icons/icon_4.png',
  },
  {
    id: 5,
    name: 'Cardiologist',
    desc: 'Heart Care',
    arrowColor: '#EF4444',
    arrowBg: '#FEF2F2',
    icon: '/icons/icon_5.png',
  },
  {
    id: 6,
    name: 'Orthopedic',
    desc: 'Bone & Joint',
    arrowColor: '#10B981',
    arrowBg: '#ECFDF5',
    icon: '/icons/icon_6.png',
  },
  {
    id: 7,
    name: 'General Physician',
    desc: 'Primary Care',
    arrowColor: '#8B5CF6',
    arrowBg: '#F5F3FF',
    icon: '/icons/icon_7.png',
  },
];

const Specialties = () => {
  return (
    <section className="spec-section">
      {/* Decorative elements */}
      <div className="spec-deco-circle spec-deco-circle-1"></div>
      <div className="spec-deco-circle spec-deco-circle-2"></div>
      <div className="spec-deco-circle spec-deco-circle-3"></div>
      <div className="spec-cross spec-cross-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16M4 12h16" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="spec-cross spec-cross-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16M4 12h16" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="spec-cross spec-cross-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16M4 12h16" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="spec-cross spec-cross-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16M4 12h16" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container spec-container">
        {/* Header Row */}
        <div className="spec-header">
          <div className="spec-header-left">
            <div className="spec-badge">
              <Heart size={14} fill="#EF4444" color="#EF4444" />
              <span>Your Health, Our Priority</span>
            </div>
            <h2 className="spec-title">
              Popular <span className="spec-title-accent">Specialties</span>
            </h2>
            <p className="spec-desc">
              Find the right specialist for your health needs. Book appointments, get online
              consultations and receive expert care — all in one place.
            </p>
          </div>

          {/* Doctor Cutout */}
          <div className="spec-doctor-area">
            <div className="spec-doctor-bg-shape"></div>
            <img
              src="/doctor-uploaded.png"
              alt="Professional Doctor"
              className="spec-doctor-img"
            />
            <div className="spec-doctor-annotation">
              <span>Expert Care</span>
              <span>For a Healthier</span>
              <span>Tomorrow</span>
              <svg className="spec-annotation-line" width="100" height="8" viewBox="0 0 100 8">
                <path d="M2 6c20-4 40-2 60-4s25 1 36-1" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Cards Row with View All */}
        <div className="spec-cards-header">
          <div></div>
          <a href="#" className="spec-view-all">
            View All Specialties <ArrowRight size={15} />
          </a>
        </div>

        <div className="spec-grid">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className={`spec-card ${spec.popular ? 'spec-card-popular' : ''}`}
            >
              {spec.popular && (
                <div className="spec-popular-pill">
                  <Crown size={11} />
                  <span>Popular</span>
                </div>
              )}

              <div className="spec-icon-wrap">
                <img src={spec.icon} alt={`${spec.name} Icon`} className="spec-icon-img" />
              </div>

              <div className="spec-card-body">
                <h4 className="spec-card-name">{spec.name}</h4>
                <p className="spec-card-desc">{spec.desc}</p>
              </div>

              <div className="spec-card-footer">
                <span className="spec-card-cta">Consult Experts</span>
                <button
                  className="spec-card-arrow"
                  style={{ background: spec.arrowBg, color: spec.arrowColor }}
                  aria-label={`Consult ${spec.name}`}
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

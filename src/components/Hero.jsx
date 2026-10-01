import React, { useState } from 'react';
import { Heart, ShieldCheck, Monitor, Truck, FlaskConical, Stethoscope, Video, Pill, TestTube2, Building2, MapPin, Search, ChevronDown, ArrowRight, Star, CheckCircle2, Clock } from 'lucide-react';
import './Hero.css';

const tabs = [
  { id: 'doctors', label: 'Find Doctors', icon: <Stethoscope size={16} /> },
  { id: 'video', label: 'Video Consult', icon: <Video size={16} /> },
  { id: 'medicines', label: 'Medicines', icon: <Pill size={16} /> },
  { id: 'labs', label: 'Lab Tests', icon: <TestTube2 size={16} /> },
  { id: 'hospitals', label: 'Hospitals', icon: <Building2 size={16} /> },
];

const locations = ['Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('doctors');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');

  return (
    <section className="hero">
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <div className="hero-badge">
            <Heart size={16} className="hero-badge-icon" />
            <span>Your Health, Our Priority</span>
          </div>

          <h1 className="hero-title">
            Quality Healthcare<br />
            For <span className="hero-title-highlight">A Healthier You</span>
          </h1>

          <p className="hero-subtitle">
            Book appointments with top doctors, consult online,<br />
            order medicines, book lab tests and more — all in one place.
          </p>

          {/* Feature Badges */}
          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <ShieldCheck size={18} />
              </div>
              <div>
                <span className="hero-feature-title">Verified</span>
                <span className="hero-feature-sub">Doctors</span>
              </div>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon blue">
                <Monitor size={18} />
              </div>
              <div>
                <span className="hero-feature-title">Online</span>
                <span className="hero-feature-sub">Consultation</span>
              </div>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon orange">
                <Truck size={18} />
              </div>
              <div>
                <span className="hero-feature-title">Medicine</span>
                <span className="hero-feature-sub">Delivery</span>
              </div>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon purple">
                <FlaskConical size={18} />
              </div>
              <div>
                <span className="hero-feature-title">Lab Tests</span>
                <span className="hero-feature-sub">at Home</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="hero-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`hero-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hero-search">
            <div className="hero-search-location-wrapper">
              <div
                className="hero-search-location"
                onClick={() => setIsLocationOpen(!isLocationOpen)}
              >
                <MapPin size={18} className="search-icon" />
                <span className="hero-location-text">{selectedLocation}</span>
                <ChevronDown size={14} className={`location-arrow ${isLocationOpen ? 'open' : ''}`} />
              </div>

              {isLocationOpen && (
                <>
                  <div className="hero-location-overlay" onClick={() => setIsLocationOpen(false)}></div>
                  <div className="hero-location-dropdown">
                    <div className="hero-location-dropdown-header">
                      Select City
                    </div>
                    <div className="hero-location-list">
                      {locations.map(loc => (
                        <div
                          key={loc}
                          className={`hero-location-item ${selectedLocation === loc ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedLocation(loc);
                            setIsLocationOpen(false);
                          }}
                        >
                          <MapPin size={14} className="hero-location-item-icon" />
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="hero-search-divider" />
            <div className="hero-search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search doctors, specialists, clinics or hospitals..."
                className="hero-search-input"
              />
            </div>
            <button className="hero-search-btn">
              Search <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Content - Doctor Image + Cards */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Doctor"
              className="hero-doctor-img"
            />
            <div className="hero-image-overlay"></div>
            <div className="hero-image-text">
              <span className="hero-image-text-expert">Expert Care</span>
              <span className="hero-image-text-always">Always</span>
              <span className="hero-image-text-with">with You!</span>
            </div>
          </div>

          {/* Doctor Profile Card */}
          <div className="hero-doctor-card">
            <div className="doctor-card-status">
              <span className="status-dot"></span>
              <span>Online Now</span>
            </div>
            <h4 className="doctor-card-name">Dr. Sarah Jenkins</h4>
            <p className="doctor-card-spec">MBBS, MD – General Medicine</p>
            <div className="doctor-card-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="rating-text">4.9</span>
              <span className="rating-count">(2.5K reviews)</span>
            </div>
            <div className="doctor-card-details">
              <div className="doctor-card-detail">
                <CheckCircle2 size={14} className="detail-icon" />
                <span>5+ years experience</span>
              </div>
              <div className="doctor-card-detail">
                <CheckCircle2 size={14} className="detail-icon" />
                <span>Verified</span>
              </div>
              <div className="doctor-card-detail">
                <CheckCircle2 size={14} className="detail-icon" />
                <span>Available for Video Consult</span>
              </div>
            </div>
            <button className="doctor-card-btn">Consult Now</button>
          </div>

          {/* Fast Consultation Badge */}
          <div className="hero-fast-consult">
            <div className="fast-consult-icon">
              <Clock size={20} />
            </div>
            <div className="fast-consult-text">
              <span className="fast-consult-title">Fast Consultation</span>
              <span className="fast-consult-sub">Within 15 mins</span>
            </div>
            <ArrowRight size={16} className="fast-consult-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { Search, MapPin, Video, Phone, MessageSquare, ChevronDown, CheckCircle2, Star, Clock, Heart, ShieldCheck, FileText, ArrowRight, Activity, Thermometer, Brain, Baby, Eye, Zap, Lock } from 'lucide-react';
import './VideoConsult.css';
import Stats from '../components/Stats';

const VideoConsult = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');

  const locations = ['Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const specialties = [
    { id: 1, name: 'General Physician', desc: 'Fever, cough, cold', icon: <Thermometer size={24} color="#3B82F6" />, bg: '#EFF6FF' },
    { id: 2, name: 'Dermatology', desc: 'Skin & hair issues', icon: <Zap size={24} color="#EC4899" />, bg: '#FDF2F8' },
    { id: 3, name: 'Gynecology', desc: 'Women\'s health', icon: <Heart size={24} color="#F43F5E" />, bg: '#FFF1F2' },
    { id: 4, name: 'Pediatrics', desc: 'Child specialists', icon: <Baby size={24} color="#8B5CF6" />, bg: '#F5F3FF' },
    { id: 5, name: 'Cardiology', desc: 'Heart specialists', icon: <Activity size={24} color="#EF4444" />, bg: '#FEF2F2' },
    { id: 6, name: 'Neurology', desc: 'Brain & nerves', icon: <Brain size={24} color="#06B6D4" />, bg: '#ECFEFF' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Ananya Sharma', spec: 'General Physician', exp: '8+ years', rating: '4.9', count: '3,200+', price: '₹499', img: 'https://images.unsplash.com/photo-1594824436998-5f9149459035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Dr. Rahul Verma', spec: 'Dermatologist', exp: '12+ years', rating: '4.8', count: '4,100+', price: '₹599', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Dr. Priya Desai', spec: 'Gynecologist', exp: '10+ years', rating: '4.9', count: '2,800+', price: '₹699', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Dr. Sameer Reddy', spec: 'Pediatrician', exp: '15+ years', rating: '4.7', count: '5,500+', price: '₹499', img: 'https://images.unsplash.com/photo-1537368910025-70285035658d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  const faqs = [
    { q: 'What is online doctor consultation?', a: 'Online consultation allows you to connect with a verified doctor via video, audio, or chat from anywhere using your smartphone or computer.' },
    { q: 'How quickly can I connect with a doctor?', a: 'You can typically connect with an available general physician in under 2 minutes. Specialists may require scheduled appointments.' },
    { q: 'Can I consult a specialist online?', a: 'Yes! We have specialists across 25+ categories including dermatology, gynecology, pediatrics, and more available for online consults.' },
    { q: 'Will I receive a digital prescription?', a: 'Yes, if the doctor determines medication is necessary, you will receive a valid digital prescription immediately after your consultation.' },
    { q: 'Is my consultation private?', a: 'Absolutely. All consultations are end-to-end encrypted and completely confidential, adhering to strict medical privacy standards.' },
  ];

  return (
    <div className="vc-page">
      {/* 1. PAGE HERO */}
      <section className="vc-hero">
        <div className="vc-hero-bg-elements">
          <div className="vc-hero-blob-1"></div>
          <div className="vc-hero-blob-2"></div>
        </div>
        
        <div className="container vc-hero-container">
          <div className="vc-hero-left">
            <div className="vc-eyebrow">
              <span className="vc-dot"></span> 24/7 Online Doctor Consultation
            </div>
            
            <h1 className="vc-hero-title">
              Talk to a Doctor.<br />
              <span className="text-primary">From Wherever You Are.</span>
            </h1>
            
            <p className="vc-hero-desc">
              Connect with verified doctors online, get medical guidance from home, and receive digital prescriptions with ease.
            </p>
            
            <div className="vc-hero-actions">
              <button className="vc-btn-primary">Consult Now <ArrowRight size={16} /></button>
              <button className="vc-btn-secondary">Browse Doctors</button>
            </div>
            
            <div className="vc-hero-trust-points">
              <div className="vc-trust-point">
                <ShieldCheck size={16} className="text-primary" /> <span>Verified Doctors</span>
              </div>
              <div className="vc-trust-point">
                <Lock size={16} className="text-primary" /> <span>Private & Secure</span>
              </div>
              <div className="vc-trust-point">
                <FileText size={16} className="text-primary" /> <span>Digital Prescription</span>
              </div>
            </div>
          </div>
          
          <div className="vc-hero-right">
            <div className="vc-hero-visual">
              <img src="/doctor-uploaded.png" alt="Doctor Consultation" className="vc-hero-img" />
              
              {/* Floating Cards */}
              <div className="vc-float-card vc-card-doctor">
                <div className="vc-card-doctor-header">
                  <span className="vc-status-dot"></span> <span className="vc-status-text">Online Now</span>
                </div>
                <div className="vc-card-doctor-info">
                  <h4>Dr. Ananya Sharma</h4>
                  <p>General Physician</p>
                  <div className="vc-card-doctor-rating">
                    <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="vc-card-doctor-avail">
                  <Video size={12} /> Available for Video Consult
                </div>
                <button className="vc-btn-sm">Start Consultation</button>
              </div>

              <div className="vc-float-card vc-card-wait">
                <div className="vc-wait-icon"><Clock size={16} color="#2563EB" /></div>
                <div>
                  <p className="vc-wait-title">Average wait time</p>
                  <p className="vc-wait-time">Under 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK CONSULTATION SEARCH */}
      <section className="vc-search-section">
        <div className="container">
          <div className="vc-search-panel">
            <h3 className="vc-search-title">What would you like help with?</h3>
            <div className="vc-search-bar">
              <div className="vc-search-location-wrapper">
                <div 
                  className="vc-search-location"
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                >
                  <MapPin size={18} color="#64748B" />
                  <span className="vc-location-text">{selectedLocation}</span>
                  <ChevronDown size={14} className={`vc-location-arrow ${isLocationOpen ? 'open' : ''}`} color="#64748B" />
                </div>
                
                {isLocationOpen && (
                  <>
                    <div className="vc-location-overlay" onClick={() => setIsLocationOpen(false)}></div>
                    <div className="vc-location-dropdown">
                      <div className="vc-location-dropdown-header">
                        Select City
                      </div>
                      <div className="vc-location-list">
                        {locations.map(loc => (
                          <div
                            key={loc}
                            className={`vc-location-item ${selectedLocation === loc ? 'selected' : ''}`}
                            onClick={() => {
                              setSelectedLocation(loc);
                              setIsLocationOpen(false);
                            }}
                          >
                            <MapPin size={14} className="vc-location-item-icon" />
                            {loc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="vc-search-divider"></div>
              <div className="vc-search-input-wrap">
                <Search size={18} color="#94A3B8" />
                <input type="text" placeholder="Search symptoms, conditions or specialties..." />
              </div>
              <button className="vc-btn-primary vc-search-btn">Find a Doctor</button>
            </div>
            <p className="vc-search-hint">Or choose a specialty below</p>
          </div>
        </div>
      </section>

      {/* 3. SPECIALTY SECTION */}
      <section className="vc-specialties-section">
        <div className="container">
          <div className="vc-section-header">
            <h2>Consult a Specialist Online</h2>
            <p>Get expert medical guidance from verified doctors across popular specialties.</p>
          </div>
          
          <div className="vc-spec-grid">
            {specialties.map(spec => (
              <div key={spec.id} className="vc-spec-card">
                <div className="vc-spec-icon" style={{ background: spec.bg }}>
                  {spec.icon}
                </div>
                <div className="vc-spec-info">
                  <h4>{spec.name}</h4>
                  <p>{spec.desc}</p>
                </div>
                <div className="vc-spec-footer">
                  <span>Consult Now</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AVAILABLE DOCTORS */}
      <section className="vc-doctors-section">
        <div className="container">
          <div className="vc-section-header vc-header-flex">
            <h2>Doctors Available for Online Consultation</h2>
            <a href="#" className="vc-link-btn">View All Doctors <ArrowRight size={16} /></a>
          </div>
          
          <div className="vc-doc-grid">
            {doctors.map(doc => (
              <div key={doc.id} className="vc-doc-card">
                <div className="vc-doc-header">
                  <div className="vc-doc-img-wrap">
                    <img src={doc.img} alt={doc.name} />
                    <div className="vc-doc-online"><span className="vc-status-dot"></span> Online</div>
                  </div>
                  <div className="vc-doc-basic">
                    <h4>{doc.name}</h4>
                    <p>{doc.spec}</p>
                    <div className="vc-doc-exp">{doc.exp} experience</div>
                  </div>
                </div>
                <div className="vc-doc-stats">
                  <div className="vc-doc-stat"><Star size={14} fill="#F59E0B" color="#F59E0B" /> <span>{doc.rating}</span></div>
                  <div className="vc-doc-stat-divider"></div>
                  <div className="vc-doc-stat"><MessageSquare size={14} color="#64748B" /> <span>{doc.count} consults</span></div>
                </div>
                <div className="vc-doc-verified">
                  <ShieldCheck size={14} color="#16A34A" /> Verified Doctor
                </div>
                <div className="vc-doc-modes">
                  <span><Video size={12} /> Video</span>
                  <span><Phone size={12} /> Audio</span>
                </div>
                <div className="vc-doc-footer">
                  <div className="vc-doc-price">{doc.price}</div>
                  <button className="vc-btn-primary vc-btn-sm">Consult Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION MODES */}
      <section className="vc-modes-section">
        <div className="container">
          <div className="vc-section-header">
            <h2>Choose How You Want to Consult</h2>
          </div>
          <div className="vc-modes-grid">
            <div className="vc-mode-card vc-mode-featured">
              <div className="vc-mode-icon"><Video size={28} /></div>
              <h3>VIDEO CONSULT</h3>
              <p>Face-to-face consultation with a doctor.</p>
              <button className="vc-btn-primary">Video Consult</button>
            </div>
            <div className="vc-mode-card">
              <div className="vc-mode-icon"><Phone size={28} /></div>
              <h3>AUDIO CONSULT</h3>
              <p>Talk privately with a verified doctor.</p>
              <button className="vc-btn-outline">Audio Consult</button>
            </div>
            <div className="vc-mode-card">
              <div className="vc-mode-icon"><MessageSquare size={28} /></div>
              <h3>CHAT CONSULT</h3>
              <p>Share symptoms, reports and questions securely.</p>
              <button className="vc-btn-outline">Start Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="vc-works-section">
        <div className="container">
          <div className="vc-section-header">
            <h2>How Online Consultation Works</h2>
          </div>
          <div className="vc-works-steps">
            <div className="vc-works-line"></div>
            <div className="vc-step">
              <div className="vc-step-circle">01</div>
              <h3>Choose a Specialist</h3>
              <p>Select a specialty or describe your symptoms.</p>
            </div>
            <div className="vc-step">
              <div className="vc-step-circle">02</div>
              <h3>Connect With a Doctor</h3>
              <p>Start a secure video, audio or chat consultation.</p>
            </div>
            <div className="vc-step">
              <div className="vc-step-circle">03</div>
              <h3>Get Your Care Plan</h3>
              <p>Receive medical guidance and a digital prescription when appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUST SECTION */}
      <div className="vc-stats-wrapper">
        <Stats />
      </div>

      {/* 8. WHY MEDICARE+ */}
      <section className="vc-features-section">
        <div className="container">
          <div className="vc-section-header">
            <h2>Healthcare That Fits Your Life</h2>
          </div>
          <div className="vc-features-grid">
            <div className="vc-feature-card">
              <div className="vc-feature-icon"><Lock size={24} /></div>
              <h3>PRIVATE & SECURE</h3>
              <p>Your consultation stays confidential.</p>
            </div>
            <div className="vc-feature-card">
              <div className="vc-feature-icon"><ShieldCheck size={24} /></div>
              <h3>VERIFIED DOCTORS</h3>
              <p>Connect with qualified healthcare professionals.</p>
            </div>
            <div className="vc-feature-card">
              <div className="vc-feature-icon"><Clock size={24} /></div>
              <h3>FAST CONSULTATION</h3>
              <p>Find an available doctor without unnecessary waiting.</p>
            </div>
            <div className="vc-feature-card">
              <div className="vc-feature-icon"><FileText size={24} /></div>
              <h3>DIGITAL PRESCRIPTION</h3>
              <p>Receive your prescription digitally when provided by the doctor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LARGE CTA SECTION */}
      <section className="vc-cta-section">
        <div className="container">
          <div className="vc-cta-banner">
            <div className="vc-cta-content">
              <h2>Don't Wait to Get Medical Guidance</h2>
              <p>Connect with a verified doctor online from the comfort of your home.</p>
              <div className="vc-cta-actions">
                <button className="vc-btn-white">Consult a Doctor <ArrowRight size={16} /></button>
                <span className="vc-cta-note">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="vc-faq-section">
        <div className="container">
          <div className="vc-section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="vc-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`vc-faq-item ${openFaq === index ? 'active' : ''}`}>
                <button className="vc-faq-q" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <ChevronDown size={20} className="vc-faq-icon" />
                </button>
                <div className="vc-faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoConsult;

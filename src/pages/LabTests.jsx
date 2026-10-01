import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, CheckCircle2, Heart, Star, Plus, Minus, X, Info, ShieldCheck, Clock, BadgeCheck, FileCheck, House, ArrowRight, FlaskConical, Droplet, Activity, HeartPulse, Stethoscope, Baby, Pill, Filter } from 'lucide-react';
import './LabTests.css';
import Stats from '../components/Stats';

const popularSearches = ['Full Body Checkup', 'Diabetes Test', 'Thyroid Test', 'Vitamin D', 'Lipid Profile', 'Kidney Function Test', 'Liver Function Test'];

const testCategories = [
  { name: 'Blood Tests', icon: <Droplet size={24} /> },
  { name: 'Diabetes', icon: <Activity size={24} /> },
  { name: 'Thyroid', icon: <HeartPulse size={24} /> },
  { name: 'Vitamins', icon: <Pill size={24} /> },
  { name: 'Liver', icon: <FlaskConical size={24} /> },
  { name: 'Kidney', icon: <Stethoscope size={24} /> },
  { name: 'Heart', icon: <Heart size={24} /> },
  { name: 'Women\'s Health', icon: <Baby size={24} /> }
];

const demoPackages = [
  { id: 'p1', name: 'Full Body Health Checkup', tests: '80+ Tests', sample: '1 Sample', includes: ['Complete blood assessment', 'CBC', 'LFT', 'KFT', 'Lipid Profile', 'Free home sample collection'], price: 1499, original: 2499, discount: '40% OFF', popular: true },
  { id: 'p2', name: 'Diabetes Health Checkup', tests: '45+ Tests', sample: '1 Sample', includes: ['Blood Sugar', 'HbA1c', 'Lipid Profile', 'Kidney Function', 'Free home sample collection'], price: 999, original: 1599, discount: '38% OFF' },
  { id: 'p3', name: 'Thyroid Health Checkup', tests: '35+ Tests', sample: '1 Sample', includes: ['T3', 'T4', 'TSH', 'Thyroid antibodies', 'Free home sample collection'], price: 799, original: 1299, discount: '38% OFF' },
  { id: 'p4', name: 'Vitamin Profile Checkup', tests: '30+ Tests', sample: '1 Sample', includes: ['Vitamin D', 'Vitamin B12', 'Iron', 'Calcium', 'Complete vitamin assessment'], price: 1099, original: 1799, discount: '39% OFF' }
];

const demoTests = [
  { id: 't1', name: 'Complete Blood Count (CBC)', params: '1 Parameter', rating: '4.8', reviews: '2.1K', price: 199, original: 300, discount: '34% OFF' },
  { id: 't2', name: 'Thyroid Profile (T3, T4, TSH)', params: '3 Parameters', rating: '4.7', reviews: '1.8K', price: 299, original: 450, discount: '34% OFF' },
  { id: 't3', name: 'Lipid Profile', params: '8 Parameters', rating: '4.8', reviews: '2.4K', price: 399, original: 600, discount: '34% OFF' },
  { id: 't4', name: 'Liver Function Test (LFT)', params: '11 Parameters', rating: '4.7', reviews: '1.6K', price: 399, original: 600, discount: '34% OFF' },
  { id: 't5', name: 'Kidney Function Test (KFT)', params: '8 Parameters', rating: '4.8', reviews: '1.9K', price: 399, original: 600, discount: '34% OFF' },
  { id: 't6', name: 'Vitamin D (25-OH)', params: '1 Parameter', rating: '4.7', reviews: '1.5K', price: 599, original: 850, discount: '30% OFF' },
  { id: 't7', name: 'HbA1c Test', params: '1 Parameter', rating: '4.8', reviews: '1.3K', price: 299, original: 399, discount: '25% OFF' },
  { id: 't8', name: 'Vitamin B12 Test', params: '1 Parameter', rating: '4.7', reviews: '1.1K', price: 449, original: 599, discount: '25% OFF' }
];

const labFaqs = [
  { q: 'What types of lab tests are available?', a: 'We offer a comprehensive range of diagnostic tests including blood tests, urine tests, full body checkups, and specialized profiles.' },
  { q: 'Do you provide home sample collection?', a: 'Yes, trained phlebotomists can collect samples from your home at your chosen time slot.' },
  { q: 'How long does it take to get reports?', a: 'Most standard test reports are delivered digitally within 24–48 hours.' },
  { q: 'Do I need a doctor’s prescription?', a: 'Many routine checkups can be booked without a prescription, but specific specialized tests may require one.' },
  { q: 'How will I receive my reports?', a: 'Reports are uploaded securely to your MediCare+ account and sent via email/SMS.' },
  { q: 'Can I reschedule my sample collection?', a: 'Yes, you can reschedule your booking from your dashboard before the scheduled time.' },
  { q: 'Are the laboratories verified?', a: 'Absolutely. We only partner with accredited, high-quality diagnostic laboratories.' },
  { q: 'Is home sample collection safe?', a: 'Yes, our professionals strictly follow hygiene protocols, using fresh gloves and sterile collection kits.' },
  { q: 'Can I cancel a booking?', a: 'Yes, bookings can be cancelled for a full refund up to 2 hours before the collection time.' }
];

const LabTests = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isLocOpen, setIsLocOpen] = useState(false);
  const [loc, setLoc] = useState('Bangalore');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Booking Modal State
  const [bookingModal, setBookingModal] = useState({ isOpen: false, item: null, type: null }); // type: 'test' | 'package'
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({ date: 'Today', time: '8:00 AM - 9:00 AM', collectionType: 'Home Collection' });

  const locations = ['Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Hyderabad'];

  const openBooking = (item, type) => {
    setBookingModal({ isOpen: true, item, type });
    setBookingStep(1);
  };

  const closeBooking = () => {
    setBookingModal({ isOpen: false, item: null, type: null });
  };

  const handleBookingConfirm = (e) => {
    e.preventDefault();
    setBookingStep('success');
  };

  return (
    <div className="lab-page">
      {/* HERO SECTION */}
      <section className="lab-hero">
        <div className="container lab-hero-container">
          <div className="lab-hero-left">
            <div className="lab-badge">
              <ShieldCheck size={16} /> Trusted Lab Testing
            </div>
            <h1 className="lab-hero-title">
              Accurate Lab Tests<br />
              <span className="text-primary">For A Healthier You</span>
            </h1>
            <p className="lab-hero-desc">
              Book diagnostic tests online with trusted labs, convenient home sample collection and fast digital reports.
            </p>
            <div className="lab-hero-actions">
              <button className="lab-btn-primary">Book a Lab Test <ArrowRight size={16} /></button>
              <button className="lab-btn-secondary">Explore Packages</button>
            </div>
            <div className="lab-trust-points">
              <span><CheckCircle2 size={16} className="text-success" /> Trusted Labs</span>
              <span><CheckCircle2 size={16} className="text-success" /> Home Sample Collection</span>
              <span><CheckCircle2 size={16} className="text-success" /> Digital Reports</span>
            </div>
          </div>
          <div className="lab-hero-right">
            <div className="lab-hero-visual">
              <div className="lab-visual-bg"></div>
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Lab Testing" className="lab-hero-img" />
              <div className="lab-float-card lc-1">
                <Clock size={16} color="#2563EB" />
                <span>Reports in 24-48 Hours</span>
              </div>
              <div className="lab-float-card lc-2">
                <House size={16} color="#2563EB" />
                <span>Home Collection Available</span>
              </div>
              <div className="lab-float-card lc-3">
                <BadgeCheck size={16} color="#2563EB" />
                <span>Verified Labs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH PANEL */}
      <section className="lab-search-section">
        <div className="container">
          <div className="lab-search-panel">
            <div className="lab-search-header">
              <h3>Book a Lab Test</h3>
              <p>Search for tests, packages or health checkups.</p>
            </div>
            <div className="lab-search-bar">
              <div className="lab-loc-wrapper">
                <div className="lab-loc-selector" onClick={() => setIsLocOpen(!isLocOpen)}>
                  <MapPin size={18} className="text-muted" />
                  <span>{loc}</span>
                  <ChevronDown size={14} className="text-muted" />
                </div>
                {isLocOpen && (
                  <>
                    <div className="lab-loc-overlay" onClick={() => setIsLocOpen(false)}></div>
                    <div className="lab-loc-dropdown">
                      {locations.map(l => (
                        <div key={l} className="lab-loc-item" onClick={() => { setLoc(l); setIsLocOpen(false); }}>
                          {l}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="lab-search-divider"></div>
              <div className="lab-search-input-wrap">
                <Search size={20} className="text-muted" />
                <input type="text" placeholder="Search for tests (e.g. CBC, Thyroid, Vitamin D...), packages or symptoms..." />
              </div>
              <button className="lab-btn-primary lab-search-btn">Search Tests <ArrowRight size={16} /></button>
            </div>
            <div className="lab-popular-searches">
              <span className="lps-label">Popular searches:</span>
              <div className="lps-chips">
                {popularSearches.map(s => <span key={s} className="lps-chip">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR HEALTH CHECKUP PACKAGES */}
      <section className="lab-packages-section">
        <div className="container">
          <div className="lab-section-header flex-header">
            <div>
              <h2>Popular Health Checkup Packages</h2>
              <p>Comprehensive packages for your complete health assessment.</p>
            </div>
            <a href="#" className="lab-link-btn">View All Packages <ArrowRight size={16} /></a>
          </div>
          <div className="lab-package-grid">
            {demoPackages.map(pkg => (
              <div key={pkg.id} className="lab-package-card">
                {pkg.popular && <div className="lab-pkg-badge">Most Popular</div>}
                <div className="lab-pkg-header">
                  <h3>{pkg.name}</h3>
                  <div className="lab-pkg-meta">
                    <span><FlaskConical size={14} /> {pkg.tests}</span>
                    <span><Droplet size={14} /> {pkg.sample}</span>
                  </div>
                </div>
                <div className="lab-pkg-includes">
                  <p className="lab-pkg-inc-title">Includes:</p>
                  <ul>
                    {pkg.includes.map((inc, i) => (
                      <li key={i}><CheckCircle2 size={14} className="text-success" /> {inc}</li>
                    ))}
                  </ul>
                </div>
                <div className="lab-pkg-footer">
                  <div className="lab-pkg-pricing">
                    <span className="lab-price">₹{pkg.price}</span>
                    <span className="lab-old-price">₹{pkg.original}</span>
                    <span className="lab-discount">{pkg.discount}</span>
                  </div>
                  <button className="lab-btn-outline" onClick={() => openBooking(pkg, 'package')}>Book Now <ArrowRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR LAB TESTS */}
      <section className="lab-tests-section">
        <div className="container">
          <div className="lab-section-header flex-header">
            <div>
              <h2>Popular Lab Tests <span className="lab-demo-tag">Demo UI</span></h2>
              <p>Commonly booked diagnostic tests at MediCare+</p>
            </div>
            <a href="#" className="lab-link-btn">View All Tests <ArrowRight size={16} /></a>
          </div>
          
          <div className="lab-content-layout">
            <div className="lab-mobile-filter-bar">
              <button className="lab-btn-outline lab-mobile-filter-btn" onClick={() => setIsFilterOpen(true)}>
                <Filter size={16} /> Filters
              </button>
            </div>

            {/* Filter Sidebar */}
            <div className={`lab-filter-overlay ${isFilterOpen ? 'open' : ''}`} onClick={() => setIsFilterOpen(false)}></div>
            <aside className={`lab-sidebar-filters ${isFilterOpen ? 'open' : ''}`}>
              <div className="lab-filter-header">
                <h4>Filters</h4>
                <div className="lab-filter-header-actions">
                  <button className="lab-filter-clear desktop-only">Clear</button>
                  <button className="lab-filter-close mobile-only" onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
                </div>
              </div>
              <div className="lab-filter-scroll">
                <div className="lab-filter-group">
                  <h5>Sample Type</h5>
                  <label><input type="checkbox" /> Blood</label>
                  <label><input type="checkbox" /> Urine</label>
                  <label><input type="checkbox" /> Stool</label>
                  <label><input type="checkbox" /> Other</label>
                </div>
                <div className="lab-filter-group">
                  <h5>Home Collection</h5>
                  <label><input type="radio" name="hc" /> Available</label>
                  <label><input type="radio" name="hc" /> Not Available</label>
                </div>
                <div className="lab-filter-group">
                  <h5>Report Time</h5>
                  <label><input type="checkbox" /> Same Day</label>
                  <label><input type="checkbox" /> 24 Hours</label>
                  <label><input type="checkbox" /> 48 Hours</label>
                </div>
                <div className="lab-filter-group">
                  <h5>Sort By</h5>
                  <select className="lab-sort-select">
                    <option>Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Fastest Report</option>
                  </select>
                </div>
              </div>
              <div className="lab-filter-bottom-actions mobile-only">
                <button className="lab-btn-outline" onClick={() => setIsFilterOpen(false)}>Reset</button>
                <button className="lab-btn-primary" onClick={() => setIsFilterOpen(false)}>Apply Filters</button>
              </div>
            </aside>

            {/* Test Grid */}
            <div className="lab-test-grid">
              {demoTests.map(test => (
                <div key={test.id} className="lab-test-card">
                  <div className="lab-test-top">
                    <div className="lab-test-icon"><FlaskConical size={20} /></div>
                    <button className="lab-wishlist-btn"><Heart size={16} /></button>
                  </div>
                  <h4 className="lab-test-name">{test.name}</h4>
                  <p className="lab-test-params">{test.params}</p>
                  <div className="lab-test-rating">
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{test.rating}</span>
                    <span className="text-muted">({test.reviews})</span>
                  </div>
                  <div className="lab-test-bottom">
                    <div className="lab-test-pricing">
                      <span className="lab-price">₹{test.price}</span>
                      <span className="lab-old-price">₹{test.original}</span>
                      <span className="lab-discount-sm">{test.discount}</span>
                    </div>
                    <button className="lab-btn-primary lab-btn-sm" onClick={() => openBooking(test, 'test')}>Book Test</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="lab-categories-section">
        <div className="container">
          <div className="lab-section-header">
            <h2>Explore Tests By Category</h2>
          </div>
          <div className="lab-cat-grid">
            {testCategories.map((cat, i) => (
              <div key={i} className="lab-cat-card">
                <div className="lab-cat-icon">{cat.icon}</div>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME SAMPLE COLLECTION */}
      <section className="lab-home-col-section">
        <div className="container">
          <div className="lab-hc-banner">
            <div className="lab-hc-left">
              <img src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Home Collection" />
            </div>
            <div className="lab-hc-right">
              <h2>Get Tested From The Comfort Of Your Home</h2>
              <p>No need to visit a diagnostic centre. Our trained professionals can collect your sample from home.</p>
              <div className="lab-hc-points">
                <span><CheckCircle2 size={16} /> Trained Professionals</span>
                <span><CheckCircle2 size={16} /> Safe & Hygienic</span>
                <span><CheckCircle2 size={16} /> Convenient Scheduling</span>
                <span><CheckCircle2 size={16} /> Digital Reports</span>
              </div>
              <button className="lab-btn-white">Book Home Collection <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="lab-why-section">
        <div className="container">
          <div className="lab-section-header">
            <h2>Why Choose MediCare+ Lab Tests?</h2>
          </div>
          <div className="lab-why-grid">
            <div className="lab-why-card">
              <div className="lab-why-icon"><BadgeCheck size={28} /></div>
              <h4>Trusted Labs</h4>
              <p>Diagnostic services from verified laboratory partners.</p>
            </div>
            <div className="lab-why-card">
              <div className="lab-why-icon"><House size={28} /></div>
              <h4>Home Sample Collection</h4>
              <p>Convenient sample collection at your home.</p>
            </div>
            <div className="lab-why-card">
              <div className="lab-why-icon"><FileCheck size={28} /></div>
              <h4>Accurate & Reliable</h4>
              <p>Clear and reliable diagnostic reports.</p>
            </div>
            <div className="lab-why-card">
              <div className="lab-why-icon"><Clock size={28} /></div>
              <h4>Fast Digital Reports</h4>
              <p>Get your reports digitally when they are ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="lab-works-section">
        <div className="container">
          <div className="lab-section-header">
            <h2>How It Works</h2>
          </div>
          <div className="lab-works-grid">
            <div className="lab-work-step">
              <div className="lab-work-num">01</div>
              <h4>Book Your Test</h4>
              <p>Choose a test or health package online.</p>
            </div>
            <div className="lab-work-step">
              <div className="lab-work-num">02</div>
              <h4>Sample Collection</h4>
              <p>A trained professional collects your sample.</p>
            </div>
            <div className="lab-work-step">
              <div className="lab-work-num">03</div>
              <h4>Get Your Report</h4>
              <p>Receive your digital report when it is ready.</p>
            </div>
            <div className="lab-works-line"></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="lab-stats-wrap">
        <Stats />
      </div>

      {/* HEALTH CHECKUP CTA */}
      <section className="lab-checkup-cta">
        <div className="container">
          <div className="lab-cta-banner">
            <h2>Take Charge Of Your Health</h2>
            <p>Regular health checkups can help you understand your health better.</p>
            <button className="lab-btn-white">Explore Health Packages <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* MEDICAL SAFETY */}
      <section className="lab-safety-section">
        <div className="container">
          <div className="lab-safety-box">
            <h4><Info size={18} /> Before Your Test</h4>
            <p>Some tests may require fasting or other preparation. Follow the preparation instructions provided for your selected test. Test requirements can vary. Consult your doctor or laboratory professional if you have questions about preparation.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lab-faq-section">
        <div className="container">
          <div className="lab-section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="lab-faq-list">
            {labFaqs.map((faq, i) => (
              <div key={i} className={`lab-faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="lab-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {faq.q}
                  <ChevronDown size={20} className="lab-faq-icon" />
                </div>
                <div className="lab-faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lab-final-cta">
        <div className="container">
          <div className="lab-final-banner">
            <h2>Know Your Health Better.</h2>
            <p>Book trusted lab tests with convenient sample collection and digital reports.</p>
            <div className="lab-final-actions">
              <button className="lab-btn-primary">Book a Lab Test <ArrowRight size={16} /></button>
              <button className="lab-btn-secondary">Explore Packages</button>
            </div>
          </div>
        </div>
      </section>


      {/* BOOKING MODAL */}
      {bookingModal.isOpen && (
        <div className="lab-modal-overlay" onClick={closeBooking}>
          <div className="lab-modal" onClick={e => e.stopPropagation()}>
            <div className="lab-modal-header">
              <h3>{bookingModal.type === 'package' ? 'Book Health Package' : 'Book Lab Test'}</h3>
              <button className="lab-modal-close" onClick={closeBooking}><X size={24} /></button>
            </div>
            <div className="lab-modal-body">
              {bookingStep !== 'success' && (
                <div className="lab-modal-item-summary">
                  <h4>{bookingModal.item.name}</h4>
                  <div className="lab-modal-price">₹{bookingModal.item.price}</div>
                </div>
              )}

              {bookingStep === 1 && (
                <div className="lab-booking-step">
                  <h4>Step 1: Select Date & Time</h4>
                  <div className="lab-form-group">
                    <label>Select Date</label>
                    <div className="lab-date-chips">
                      <button className="lab-date-chip active">Today</button>
                      <button className="lab-date-chip">Tomorrow</button>
                      <button className="lab-date-chip">Mon, 12 Oct</button>
                    </div>
                  </div>
                  <div className="lab-form-group">
                    <label>Select Time</label>
                    <div className="lab-time-chips">
                      <button className="lab-time-chip active">7:00 AM - 8:00 AM</button>
                      <button className="lab-time-chip">8:00 AM - 9:00 AM</button>
                      <button className="lab-time-chip">9:00 AM - 10:00 AM</button>
                      <button className="lab-time-chip">10:00 AM - 11:00 AM</button>
                    </div>
                  </div>
                  <button className="lab-btn-primary lab-btn-full" onClick={() => setBookingStep(2)}>Continue <ArrowRight size={16} /></button>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="lab-booking-step">
                  <h4>Step 2: Choose Collection</h4>
                  <div className="lab-collection-options">
                    <label className="lab-collection-option active">
                      <input type="radio" name="collection" defaultChecked />
                      <div>
                        <h5>Home Collection</h5>
                        <p>Free sample collection from your home</p>
                      </div>
                    </label>
                    <label className="lab-collection-option">
                      <input type="radio" name="collection" />
                      <div>
                        <h5>Diagnostic Centre</h5>
                        <p>Visit our nearest partner lab</p>
                      </div>
                    </label>
                  </div>
                  <div className="lab-modal-actions">
                    <button className="lab-btn-outline" onClick={() => setBookingStep(1)}>Back</button>
                    <button className="lab-btn-primary" onClick={() => setBookingStep(3)}>Continue <ArrowRight size={16} /></button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <form className="lab-booking-step" onSubmit={handleBookingConfirm}>
                  <h4>Step 3: Patient Details</h4>
                  <div className="lab-form-grid">
                    <div className="lab-form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter patient name" required />
                    </div>
                    <div className="lab-form-group">
                      <label>Age</label>
                      <input type="number" placeholder="e.g. 35" required />
                    </div>
                    <div className="lab-form-group">
                      <label>Gender</label>
                      <select required>
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="lab-form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Enter 10-digit number" required />
                    </div>
                  </div>
                  <div className="lab-modal-actions">
                    <button type="button" className="lab-btn-outline" onClick={() => setBookingStep(2)}>Back</button>
                    <button type="submit" className="lab-btn-primary">Confirm Booking</button>
                  </div>
                </form>
              )}

              {bookingStep === 'success' && (
                <div className="lab-booking-success">
                  <div className="lab-success-icon"><CheckCircle2 size={48} /></div>
                  <h3>Demo Booking Confirmed!</h3>
                  <p>Your {bookingModal.type === 'package' ? 'health package' : 'lab test'} has been successfully booked for Home Collection.</p>
                  <div className="lab-success-details">
                    <p><strong>Test:</strong> {bookingModal.item.name}</p>
                    <p><strong>Time:</strong> Today, 7:00 AM - 8:00 AM</p>
                  </div>
                  <p className="lab-demo-note">This is a frontend prototype. No real booking was made.</p>
                  <button className="lab-btn-primary lab-btn-full" onClick={closeBooking}>Done</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LabTests;

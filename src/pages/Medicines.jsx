import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, CheckCircle2, ShieldCheck, HeartPulse, RefreshCw, FileText, PackageCheck, Heart, Star, ShoppingCart, Plus, Minus, X, Info, Pill, Baby, Activity, Bandage, Stethoscope, Droplet, Wind, Sun, Clock, Filter, ArrowRight, Lock } from 'lucide-react';
import './Medicines.css';
import Stats from '../components/Stats';

const demoMedicines = [
  { id: 1, name: "Paracetamol 500 mg Tablets", cat: "Pain Relief", pack: "10 tablets", price: 25, oldPrice: 32, discount: "22% OFF", rating: "4.7", img: "https://images.unsplash.com/photo-1584308666744-24d5e4a8385e?w=400&q=80" },
  { id: 2, name: "Vitamin C 500 mg Tablets", cat: "Vitamins", pack: "60 tablets", price: 299, oldPrice: 349, discount: "14% OFF", rating: "4.8", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&q=80" },
  { id: 3, name: "ORS Electrolyte Powder", cat: "Hydration", pack: "5 sachets", price: 65, oldPrice: 75, discount: "13% OFF", rating: "4.6", img: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=400&q=80" },
  { id: 4, name: "Digital Thermometer", cat: "Health Device", pack: "1 unit", price: 249, oldPrice: 299, discount: "17% OFF", rating: "4.9", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&q=80" },
  { id: 5, name: "Antiseptic Liquid", cat: "First Aid", pack: "100 ml", price: 89, oldPrice: 105, discount: "15% OFF", rating: "4.8", img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&q=80" },
  { id: 6, name: "Multivitamin Daily Tablets", cat: "Supplements", pack: "30 tablets", price: 399, oldPrice: 449, discount: "11% OFF", rating: "4.7", img: "https://images.unsplash.com/photo-1550572017-edb7f5255ee9?w=400&q=80" },
  { id: 7, name: "Moisturizing Skin Lotion", cat: "Skin Care", pack: "200 ml", price: 279, oldPrice: 325, discount: "14% OFF", rating: "4.5", img: "https://images.unsplash.com/photo-1615397323282-3116f19df6b5?w=400&q=80" },
  { id: 8, name: "Hand Sanitizer", cat: "Personal Care", pack: "200 ml", price: 99, oldPrice: 120, discount: "18% OFF", rating: "4.8", img: "https://images.unsplash.com/photo-1584483766114-2cea6facd1b5?w=400&q=80" }
];

const categories = [
  { name: 'Medicines', icon: <Pill size={24} /> },
  { name: 'Vitamins & Supps', icon: <Activity size={24} /> },
  { name: 'Personal Care', icon: <Droplet size={24} /> },
  { name: 'Baby Care', icon: <Baby size={24} /> },
  { name: 'Diabetes Care', icon: <HeartPulse size={24} /> },
  { name: 'First Aid', icon: <Bandage size={24} /> },
  { name: 'Health Devices', icon: <Stethoscope size={24} /> },
  { name: 'Skin Care', icon: <Sun size={24} /> }
];

const faqs = [
  { q: 'What medicines can I order online?', a: 'You can order a wide range of OTC (Over-The-Counter) products and prescription medicines (subject to valid prescription verification).' },
  { q: 'How do I upload a prescription?', a: 'You can upload your prescription by clicking the "Upload Prescription" button and attaching an image or PDF of your doctor\'s prescription.' },
  { q: 'How can I track my order?', a: 'Once placed, you can track your medicine delivery in real time using the "Track Order" feature on your dashboard.' },
  { q: 'Can I reorder medicines?', a: 'Yes, you can easily access your past orders and click "Reorder" for a quick checkout.' },
  { q: 'Are prescription medicines available?', a: 'Yes, but they require a valid prescription uploaded at checkout and verification by our partner pharmacists.' },
];

const Medicines = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bangalore, Karnataka');
  const [openFaq, setOpenFaq] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const locations = ['Bangalore, Karnataka', 'Delhi, NCR', 'Mumbai, Maharashtra', 'Chennai, Tamil Nadu', 'Kolkata, West Bengal', 'Hyderabad, Telangana'];

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="med-page">
      {/* DELIVERY LOCATION STRIP */}
      <div className="med-top-location">
        <div className="container">
          <div className="med-loc-strip">
            <span className="med-loc-label">Deliver to:</span>
            <div className="med-loc-selector" onClick={() => setIsLocationOpen(!isLocationOpen)}>
              <MapPin size={16} className="text-primary" />
              <span className="med-loc-current">{selectedLocation}</span>
              <ChevronDown size={14} />
            </div>
          </div>
          {isLocationOpen && (
            <>
              <div className="med-loc-overlay" onClick={() => setIsLocationOpen(false)}></div>
              <div className="med-loc-dropdown">
                <div className="med-loc-dropdown-header">Select Delivery Location</div>
                <div className="med-loc-list">
                  {locations.map(loc => (
                    <div 
                      key={loc} 
                      className={`med-loc-item ${selectedLocation === loc ? 'selected' : ''}`}
                      onClick={() => { setSelectedLocation(loc); setIsLocationOpen(false); }}
                    >
                      <MapPin size={14} /> {loc}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="med-hero">
        <div className="container med-hero-container">
          <div className="med-hero-left">
            <div className="med-badge">
              <ShieldCheck size={16} /> Trusted Online Pharmacy
            </div>
            <h1 className="med-hero-title">
              Medicines & Healthcare,<br />
              <span className="text-primary">Delivered to Your Door.</span>
            </h1>
            <p className="med-hero-desc">
              Order medicines, wellness essentials and everyday healthcare products from the comfort of your home.
            </p>
            <div className="med-hero-actions">
              <button className="med-btn-primary">Shop Medicines <ArrowRight size={16} /></button>
              <button className="med-btn-secondary"><FileText size={16} /> Upload Prescription</button>
            </div>
            <div className="med-trust-points">
              <span><CheckCircle2 size={16} className="text-success" /> Genuine Products</span>
              <span><CheckCircle2 size={16} className="text-success" /> Secure Ordering</span>
              <span><CheckCircle2 size={16} className="text-success" /> Doorstep Delivery</span>
            </div>
          </div>
          <div className="med-hero-right">
            <div className="med-hero-visual">
              <div className="med-visual-bg"></div>
              <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pharmacy Products" className="med-hero-img" />
              <div className="med-visual-float med-float-1">
                <ShoppingCart size={20} color="#2563EB" />
                <span className="med-float-text">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH PANEL */}
      <section className="med-search-section">
        <div className="container">
          <div className="med-search-panel">
            <h3>What are you looking for?</h3>
            <div className="med-search-bar">
              <div className="med-search-input-wrap">
                <Search size={20} className="text-muted" />
                <input type="text" placeholder="Search medicines, health products and more..." />
              </div>
              <button className="med-btn-primary med-search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="med-actions-section">
        <div className="container">
          <div className="med-actions-grid">
            <div className="med-action-card">
              <div className="med-action-icon"><FileText size={24} /></div>
              <div className="med-action-content">
                <h4>Upload Prescription</h4>
                <p>Upload your prescription and order medicines easily.</p>
                <a href="#" className="med-action-link">Upload Now <ArrowRight size={14} /></a>
              </div>
            </div>
            <div className="med-action-card">
              <div className="med-action-icon"><RefreshCw size={24} /></div>
              <div className="med-action-content">
                <h4>Reorder Medicines</h4>
                <p>Quickly reorder your previous medicines.</p>
                <a href="#" className="med-action-link">View Orders <ArrowRight size={14} /></a>
              </div>
            </div>
            <div className="med-action-card">
              <div className="med-action-icon"><HeartPulse size={24} /></div>
              <div className="med-action-content">
                <h4>Health Essentials</h4>
                <p>Shop everyday wellness and healthcare essentials.</p>
                <a href="#" className="med-action-link">Explore <ArrowRight size={14} /></a>
              </div>
            </div>
            <div className="med-action-card">
              <div className="med-action-icon"><PackageCheck size={24} /></div>
              <div className="med-action-content">
                <h4>Track Order</h4>
                <p>Track your medicine delivery in real time.</p>
                <a href="#" className="med-action-link">Track Order <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="med-categories-section">
        <div className="container">
          <div className="med-section-header">
            <h2>Shop by Category</h2>
            <p>Everything you need for everyday healthcare.</p>
          </div>
          <div className="med-category-grid">
            {categories.map((cat, i) => (
              <div key={i} className="med-category-card">
                <div className="med-category-icon">{cat.icon}</div>
                <span className="med-category-name">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="med-products-section">
        <div className="container">
          <div className="med-section-header med-header-flex">
            <h2>Popular Healthcare Products <span className="med-demo-tag">Demo Catalogue</span></h2>
            <div className="med-filter-actions">
              <button className="med-btn-outline med-btn-sm"><Filter size={16} /> Filters</button>
              <a href="#" className="med-link-btn">View All <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="med-product-layout">
            <div className="med-mobile-filter-bar mobile-only">
              <button className="med-btn-outline med-mobile-filter-btn" onClick={() => setIsFilterOpen(true)}>
                <Filter size={16} /> Filters
              </button>
            </div>

            {/* Sidebar filter */}
            <div className={`med-filter-overlay ${isFilterOpen ? 'open' : ''}`} onClick={() => setIsFilterOpen(false)}></div>
            <aside className={`med-sidebar-filters ${isFilterOpen ? 'open' : ''}`}>
              <div className="med-filter-header mobile-only">
                <h4>Filters</h4>
                <div className="med-filter-header-actions">
                  <button className="med-filter-clear">Clear</button>
                  <button className="med-filter-close" onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
                </div>
              </div>
              
              <div className="med-filter-scroll">
                <div className="med-filter-group">
                  <h4>Categories</h4>
                  <label><input type="checkbox" /> Pain Relief</label>
                  <label><input type="checkbox" /> Vitamins</label>
                  <label><input type="checkbox" /> First Aid</label>
                  <label><input type="checkbox" /> Skin Care</label>
                </div>
                <div className="med-filter-group">
                  <h4>Price Range</h4>
                  <input type="range" min="0" max="1000" className="med-range" />
                  <div className="med-range-vals"><span>₹0</span><span>₹1000+</span></div>
                </div>
              </div>

              <div className="med-filter-bottom-actions mobile-only">
                <button className="med-btn-outline" onClick={() => setIsFilterOpen(false)}>Reset</button>
                <button className="med-btn-primary" onClick={() => setIsFilterOpen(false)}>Apply Filters</button>
              </div>
            </aside>
            
            {/* Product Grid */}
            <div className="med-product-grid">
              {demoMedicines.map(item => {
                const cartItem = cart.find(c => c.id === item.id);
                return (
                  <div key={item.id} className="med-product-card">
                    <div className="med-product-img-wrap">
                      <span className="med-discount-badge">{item.discount}</span>
                      <button className="med-wishlist-btn"><Heart size={18} /></button>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="med-product-info">
                      <p className="med-product-cat">{item.cat}</p>
                      <h4 className="med-product-name">{item.name}</h4>
                      <div className="med-product-meta">
                        <span className="med-product-pack">{item.pack || item.size}</span>
                        <div className="med-product-rating"><Star size={12} fill="#F59E0B" color="#F59E0B" /> {item.rating}</div>
                      </div>
                      <div className="med-product-bottom">
                        <div className="med-product-pricing">
                          <span className="med-price">₹{item.price}</span>
                          <span className="med-old-price">₹{item.oldPrice}</span>
                        </div>
                        {cartItem ? (
                          <div className="med-qty-controls">
                            <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                            <span>{cartItem.qty}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                          </div>
                        ) : (
                          <button className="med-btn-primary med-btn-sm med-add-btn" onClick={() => addToCart(item)}>Add</button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BANNER */}
      <section className="med-promo-section">
        <div className="container">
          <div className="med-promo-banner">
            <div className="med-promo-content">
              <h2>Your Everyday Healthcare,<br />All in One Place.</h2>
              <p>From medicines to wellness essentials, manage your healthcare shopping with MediCare+.</p>
              <button className="med-btn-white">Explore Health Products <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* PRESCRIPTION UPLOAD */}
      <section className="med-prescription-section">
        <div className="container med-presc-container">
          <div className="med-presc-left">
            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Prescription" className="med-presc-img" />
          </div>
          <div className="med-presc-right">
            <h2>Have a Prescription?</h2>
            <p className="med-presc-sub">Upload your prescription and let MediCare+ make medicine ordering easier.</p>
            <div className="med-presc-steps">
              <div className="med-presc-step">
                <span className="med-step-num">01</span>
                <span>Upload Prescription</span>
              </div>
              <div className="med-presc-step">
                <span className="med-step-num">02</span>
                <span>We Review Your Order</span>
              </div>
              <div className="med-presc-step">
                <span className="med-step-num">03</span>
                <span>Pharmacy Confirms Availability</span>
              </div>
              <div className="med-presc-step">
                <span className="med-step-num">04</span>
                <span>Your Order Gets Delivered</span>
              </div>
            </div>
            <button className="med-btn-primary">Upload Prescription <ArrowRight size={16} /></button>
            <p className="med-safety-note"><Info size={14} /> Prescription medicines may require a valid prescription and pharmacist verification.</p>
          </div>
        </div>
      </section>

      {/* WHY MEDICARE */}
      <section className="med-features-section">
        <div className="container">
          <div className="med-section-header">
            <h2>Why Order With MediCare+?</h2>
          </div>
          <div className="med-features-grid">
            <div className="med-feature-card">
              <div className="med-feature-icon"><ShieldCheck size={28} /></div>
              <h4>Genuine Products</h4>
              <p>Products sourced through verified pharmacy partners.</p>
            </div>
            <div className="med-feature-card">
              <div className="med-feature-icon"><Lock size={28} /></div>
              <h4>Secure Ordering</h4>
              <p>Your order and account information are protected.</p>
            </div>
            <div className="med-feature-card">
              <div className="med-feature-icon"><PackageCheck size={28} /></div>
              <h4>Convenient Delivery</h4>
              <p>Get healthcare essentials delivered to your doorstep.</p>
            </div>
            <div className="med-feature-card">
              <div className="med-feature-icon"><RefreshCw size={28} /></div>
              <h4>Easy Reordering</h4>
              <p>Quickly find and reorder products you need regularly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="med-works-section">
        <div className="container">
          <div className="med-section-header">
            <h2>How Medicine Delivery Works</h2>
          </div>
          <div className="med-works-grid">
            <div className="med-work-step">
              <div className="med-work-circle"><Search size={24} /></div>
              <h4>Search & Select</h4>
              <p>Find the medicine or healthcare product you need.</p>
            </div>
            <div className="med-work-step">
              <div className="med-work-circle"><ShoppingCart size={24} /></div>
              <h4>Add to Cart</h4>
              <p>Review your products and add them to your cart.</p>
            </div>
            <div className="med-work-step">
              <div className="med-work-circle"><PackageCheck size={24} /></div>
              <h4>Checkout & Delivery</h4>
              <p>Complete your order and receive delivery updates.</p>
            </div>
            <div className="med-works-connector"></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="med-stats-wrap">
        <Stats />
      </div>

      {/* FAQ */}
      <section className="med-faq-section">
        <div className="container">
          <div className="med-section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="med-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`med-faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="med-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {faq.q}
                  <ChevronDown size={20} className="med-faq-icon" />
                </div>
                <div className="med-faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="med-final-cta">
        <div className="container">
          <div className="med-cta-banner">
            <h2>Your Healthcare, Delivered Simply.</h2>
            <p>Shop medicines and healthcare essentials from MediCare+.</p>
            <div className="med-cta-actions">
              <button className="med-btn-white">Shop Medicines <ArrowRight size={16} /></button>
              <button className="med-btn-outline-white">Upload Prescription</button>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="med-disclaimer">
        <div className="container">
          <p><strong>Disclaimer:</strong> Medicine information is provided for general reference. Always follow your doctor's or pharmacist's instructions. Prescription medicines may require a valid prescription and pharmacist verification.</p>
        </div>
      </div>

      {/* CART DRAWER */}
      {isCartOpen && (
        <>
          <div className="med-cart-overlay" onClick={() => setIsCartOpen(false)}></div>
          <div className="med-cart-drawer">
            <div className="med-cart-header">
              <h3>My Cart ({cart.reduce((s, i) => s + i.qty, 0)})</h3>
              <button className="med-cart-close" onClick={() => setIsCartOpen(false)}><X size={24} /></button>
            </div>
            <div className="med-cart-items">
              {cart.length === 0 ? (
                <div className="med-cart-empty">
                  <ShoppingCart size={48} color="#CBD5E1" />
                  <p>Your cart is empty.</p>
                  <button className="med-btn-primary med-btn-sm" onClick={() => setIsCartOpen(false)}>Start Shopping</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="med-cart-item">
                    <img src={item.img} alt={item.name} className="med-cart-item-img" />
                    <div className="med-cart-item-info">
                      <h4>{item.name}</h4>
                      <p>{item.pack || item.size}</p>
                      <div className="med-cart-item-actions">
                        <div className="med-qty-controls sm">
                          <button onClick={() => updateQuantity(item.id, -1)}><Minus size={12} /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}><Plus size={12} /></button>
                        </div>
                        <span className="med-cart-item-price">₹{item.price * item.qty}</span>
                      </div>
                    </div>
                    <button className="med-cart-item-remove" onClick={() => removeFromCart(item.id)}><X size={16} /></button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="med-cart-footer">
                <div className="med-cart-summary">
                  <div className="med-cart-row"><span>Subtotal</span> <span>₹{cartTotal}</span></div>
                  <div className="med-cart-row"><span>Delivery</span> <span>₹40</span></div>
                  <div className="med-cart-row total"><span>Total</span> <span>₹{cartTotal + 40}</span></div>
                </div>
                <button className="med-btn-primary med-btn-full">Proceed to Checkout</button>
                <p className="med-cart-note">This is a frontend demo only. Real payments are disabled.</p>
              </div>
            )}
          </div>
        </>
      )}
      
      {/* GLOBAL CART BUTTON */}
      {cart.length > 0 && !isCartOpen && (
        <button className="med-floating-cart" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={24} />
          <span className="med-floating-cart-badge">{cart.reduce((s, i) => s + i.qty, 0)}</span>
        </button>
      )}
    </div>
  );
};

export default Medicines;

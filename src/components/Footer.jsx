import React from 'react';
import { Dumbbell, ShieldCheck, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Footer = () => {
  const { setActiveTab } = useCart();

  const handleNav = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Brand Info */}
        <div className="footer-col brand-col">
          <div className="brand-logo" onClick={() => handleNav('home')}>
            <div className="logo-icon-wrapper">
              <Dumbbell className="brand-icon" size={26} />
            </div>
            <div className="logo-text">
              <span className="brand-title">TITAN<span className="highlight-text">FIT</span></span>
              <span className="brand-sub">FORGE YOUR STRENGTH</span>
            </div>
          </div>
          <p className="footer-about">
            India's most trusted fitness equipment & authentic supplement destination. Empowering lifters, bodybuilders, and athletes since 2018.
          </p>
          <div className="trust-cert-pill">
            <ShieldCheck size={16} className="text-accent" />
            <span>100% Authentic & FSSAI Certified Products</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links">
            <li><button onClick={() => handleNav('home')}>Home Overview</button></li>
            <li><button onClick={() => handleNav('products')}>All Products Catalog</button></li>
            <li><button onClick={() => handleNav('products')}>Whey & Creatine</button></li>
            <li><button onClick={() => handleNav('products')}>Olympic Dumbbells & Benches</button></li>
            <li><button onClick={() => handleNav('products')}>Lifting Belts & Straps</button></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-col">
          <h4 className="footer-heading">Athlete Support</h4>
          <ul className="footer-contact-list">
            <li>
              <Phone size={16} className="text-primary" />
              <span>+91 98765 43210 (9 AM - 9 PM)</span>
            </li>
            <li>
              <Mail size={16} className="text-primary" />
              <span>support@titanfitness.in</span>
            </li>
            <li>
              <MapPin size={16} className="text-primary" />
              <span>Titan HQ, Fitness Avenue, New Delhi, India</span>
            </li>
          </ul>
        </div>

        {/* Payment Accepted Badges */}
        <div className="footer-col">
          <h4 className="footer-heading">100% Secure Payment</h4>
          <p className="footer-pay-sub">We accept all major payment modes across India:</p>
          <div className="payment-icons-strip">
            <span className="pay-badge">UPI</span>
            <span className="pay-badge">GPay</span>
            <span className="pay-badge">PhonePe</span>
            <span className="pay-badge">Paytm</span>
            <span className="pay-badge">Visa</span>
            <span className="pay-badge">Mastercard</span>
            <span className="pay-badge">RuPay</span>
            <span className="pay-badge">Cash on Delivery</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} Titan Fitness Store. All rights reserved.</p>
          <p className="credit-text">Built with <Heart size={14} className="heart-icon" /> for Indian Fitness Enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

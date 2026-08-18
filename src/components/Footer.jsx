import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUp, Send, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
 

      <div className="footer-container">
        <div className="footer-cta-card">
          <div className="footer-cta-text">
            <h3>Ready to Scale Your Digital Presence?</h3>
            <p>Let's turn your vision into a high-performing digital platform.</p>
          </div>
          <a href="#contact-section" className="footer-cta-btn">
            <span>GET STARTED</span>
            <Send size={15} />
          </a>
        </div>

        <div className="footer-top-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="brand-title">CLICK OR MEDIA</span>
              <span className="brand-dot" />
            </div>
            <p className="footer-about-text">
              India's premier Digital Marketing and IT Solutions agency. We engineering high-impact web applications and data-driven marketing campaigns.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X / Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

     
          <div className="footer-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-link-list">
              <li><a href="#services-section" className="footer-link">Full-Stack Web Apps</a></li>
              <li><a href="#services-section" className="footer-link">SEO Optimization</a></li>
              <li><a href="#services-section" className="footer-link">Google & Meta Ads</a></li>
              <li><a href="#services-section" className="footer-link">UI/UX Interface Design</a></li>
              <li><a href="#services-section" className="footer-link">Brand Identity & Strategy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-link-list">
              <li><a href="#about-section" className="footer-link">About Us</a></li>
              <li><a href="#process-section" className="footer-link">Our Process</a></li>
              <li><a href="#work-section" className="footer-link">Featured Work</a></li>
              <li><a href="#contact-section" className="footer-link">Get In Touch</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">OFFICE & DIRECT</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <MapPin size={15} className="text-orange flex-shrink-0" />
                <span>Bathinda, Punjab, India</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} className="text-orange flex-shrink-0" />
                <div className="phone-stack">
                  <span>+91 6284754552</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} className="text-orange flex-shrink-0" />
                <a href="mailto:hi@clickormedia.com" className="email-link">hr@clickormedia.com</a>
              </div>
              <div className="footer-contact-item">
                <Clock size={15} className="text-orange flex-shrink-0" />
                <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Click Or Media. All Rights Reserved.
          </div>

          <div className="footer-legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#" className="legal-link">Terms of Service</a>
            <span className="dot">•</span>
            <a href="#" className="legal-link">Cookies Setting</a>
          </div>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
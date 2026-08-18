import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ prefilledMessage = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceType: 'Full-Stack Web App',
    message: prefilledMessage || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'Full-Stack Web App',
    'UI/UX Design',
    'API & Backend',
    'Maintenance'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ff5500', '#ff7700', '#ffffff', '#141418']
        });
      } catch (err) {

      }
    }, 800);
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">

        <div className="contact-left">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact-title">
            Let’s Build Something <span className="text-orange">Extraordinary</span>
          </h2>

          <p className="contact-desc">
            Have an upcoming project, architectural inquiry, or development roadmap to discuss? Drop a message and let's craft a tailored solution.
          </p>
          <div className="contact-info-grid">
            <a href="mailto:hi@clickormedia.com" className="contact-info-card">
              <div className="contact-icon-box">
                <Mail size={18} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Email Direct</span>
                <span className="contact-value">hr@clickormedia.com</span>
              </div>
              <ArrowUpRight size={16} className="card-arrow" />
            </a>

            <a href="tel:+916284794552" className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={18} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Call Us</span>
                <span className="contact-value">+91 6284794552</span>
              </div>
              <ArrowUpRight size={16} className="card-arrow" />
            </a>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Clock size={18} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Availability</span>
                <span className="contact-value">Mon–Sat, 9 AM – 6 PM</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box">
                <MapPin size={18} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Location</span>
                <span className="contact-value">Bathinda, Punjab, India</span>
              </div>
            </div>
          </div>

        </div>


        <div className="contact-right">
          <div className="contact-form-card">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="success-state"
                >
                  <div className="success-icon-box">
                    <CheckCircle2 size={52} className="text-orange" />
                  </div>
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-body">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been routed to our technical team. Expect a response within 24 hours.
                  </p>
                  <div className="success-actions">
                    <a
                      href={`https://wa.me/916284794552?text=Hi,%20my%20name%20is%20${encodeURIComponent(formData.fullName)}.%20I%20just%20sent%20a%20message%20regarding%20${encodeURIComponent(formData.serviceType)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle size={18} />
                      <span>Fast-Track via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', email: '', company: '', serviceType: 'Full-Stack Web App', message: '' });
                      }}
                      className="btn-secondary-reset"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="contact-form"
                >
    
                  <div className="form-group">
                    <label className="form-label">I'M LOOKING FOR:</label>
                    <div className="service-chips">
                      {services.map((item) => (
                        <button
                          type="button"
                          key={item}
                          className={`chip-btn ${formData.serviceType === item ? 'chip-active' : ''}`}
                          onClick={() => setFormData({ ...formData, serviceType: item })}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="input-fullname" className="form-label">
                        FULL NAME <span className="text-orange">*</span>
                      </label>
                      <input
                        id="input-fullname"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="input-email" className="form-label">
                        EMAIL ADDRESS <span className="text-orange">*</span>
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

  
                  <div className="form-group">
                    <label htmlFor="input-company" className="form-label">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      id="input-company"
                      type="text"
                      placeholder="e.g. Acme Studios"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-message" className="form-label">
                      PROJECT OVERVIEW <span className="text-orange">*</span>
                    </label>
                    <textarea
                      id="input-message"
                      required
                      rows="4"
                      placeholder="Outline your timeline, main goals, or technical requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={loading}
                    className="btn-gold-submit"
                  >
                    {loading ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <div className="form-note">
                    <Sparkles size={13} className="text-orange" />
                    <span>Strict privacy policy. Direct responses within 24 hours.</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

          <div className="map-wrapper">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.7461756534!2d74.88768705!3d30.21099355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39173297180272c7%3A0xa02020e85d38f3c!2sBathinda%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map-iframe"
            />
            <div className="map-badge">
              <span className="pulse-indicator" />
              <span>HQ Bathinda</span>
            </div>
          </div>
    </section>
  );
}
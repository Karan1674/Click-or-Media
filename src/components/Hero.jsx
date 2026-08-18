import React, { useState } from 'react';
import { ArrowRight, Zap, MessageCircle, TrendingUp, ShieldCheck, ChevronRight, Sparkles, Box, Shield, Layers } from 'lucide-react';
import Universal3DViewer from './3d/Universal3DViewer';

export default function Hero({ 
  current3DPreset = 'cyber-core', 
  isWireframe = false, 
  autoRotate = true, 
  customColor = null,
  onExploreServices,
  onCollaborate
}) {
  const [active3DPreset, setActive3DPreset] = useState(current3DPreset);

  const presetOptions = [
    { id: 'cyber-core', label: 'Quantum Core', icon: Sparkles },
    { id: 'growth-crystal', label: 'Growth Crystal', icon: Box },
    { id: 'hologram-rings', label: 'Orbits', icon: Layers },
    { id: 'quantum-node', label: 'Obsidian Node', icon: Shield },
  ];

  return (
    <section id="hero" className="hero-section">

      <div className="hero-grid-overlay"></div>

      <div className="hero-max-container">
  
        <div className="hero-content-col">
          <div className="hero-eyebrow-container">
            <div className="hero-badge">
              <Zap size={14} className="badge-zap-icon" />
              <span>NEXT-GEN DIGITAL AGENCY</span>
            </div>
          </div>

          <h1 className="hero-title">
            Where Creativity Meets <br />
            <span className="hero-title-highlight">Business Growth</span>
          </h1>

          <div className="hero-funnel-tag">
            <span className="funnel-chip">Clicks</span>
            <span className="funnel-arrow">→</span>
            <span className="funnel-chip highlighted">Clients</span>
            <span className="funnel-arrow">→</span>
            <span className="funnel-chip highlighted-solid">Revenue</span>
          </div>

          <p className="hero-description">
            We design digital experiences that guide your audience from curiosity to conversion — blending creative storytelling with data-driven strategy so your brand grows faster online.
          </p>

          <div className="hero-actions">
            <button
              id="btn-hero-services"
              onClick={onExploreServices}
              className="btn-primary-orange"
            >
              <span>EXPLORE SERVICES</span>
               <div className="cta-icon-circle">
              <ArrowRight size={14} />
            </div>
            </button>

            <button
              id="btn-hero-collaborate"
              onClick={onCollaborate}
              className="btn-glass-subtle"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={18} className="arrow-hover" />
            </button>
          </div>

          <div className="hero-social-proof">
            <div className="proof-avatars">
              <div className="avatar avatar-1"></div>
              <div className="avatar avatar-2"></div>
              <div className="avatar avatar-3"></div>
              <div className="avatar avatar-plus">+50</div>
            </div>
            <div className="proof-text">
              <span className="proof-rating">★★★★★ 4.9/5</span>
              <span className="proof-sub">Trusted by startups and growth brands</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-col">
          <div className="hero-3d-card-wrapper">
            
            <div className="preset-switcher-bar">
              <div className="preset-buttons">
                {presetOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setActive3DPreset(option.id)}
                      className={`preset-btn ${active3DPreset === option.id ? 'active' : ''}`}
                    >
                      <Icon size={13} />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hero-3d-canvas-box">
              <Universal3DViewer
                fallbackType={active3DPreset}
                wireframe={isWireframe}
                autoRotate={autoRotate}
                customColor={customColor}
                height="100%"
                scale={1.2}
                showControlsHint={true}
              />

              <div className="floating-metric-pill metric-top-left">
                <div className="metric-icon-box">
                  <TrendingUp size={18} className="text-orange" />
                </div>
                <div className="metric-text-group">
                  <span className="metric-val">+380%</span>
                  <span className="metric-sub">Average ROI Surge</span>
                </div>
              </div>

              <div className="floating-metric-pill metric-bottom-right">
                <div className="metric-icon-box white-glow">
                  <ShieldCheck size={18} className="text-white" />
                </div>
                <div className="metric-text-group">
                  <span className="metric-val">99.4%</span>
                  <span className="metric-sub">Retention Rate</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <a
        href="https://wa.me/916284794552?text=Hi%20Click%20Or%20Media,%20I%20would%20like%20to%20discuss%20a%20project!"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <div className="whatsapp-pulse"></div>
        <MessageCircle size={26} />
      </a>
    </section>
  );
}
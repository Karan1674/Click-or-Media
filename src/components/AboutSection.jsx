import React from 'react';
import { Sparkles, Eye, Award, Lightbulb, ArrowRight, Zap } from 'lucide-react';;

export default function AboutSection({ onKnowMore }) {
  const values = [
    {
      icon: Sparkles,
      title: 'Strategic Design',
      description: 'User-centric interfaces engineered to maximize engagement and conversion rates.',
      accent: '#ff5500'
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'Clear development roadmaps, real-time tracking, and open communication channels.',
      accent: '#38bdf8'
    },
    {
      icon: Award,
      title: 'Scalable Architecture',
      description: 'Robust backend systems and optimized codebases built for high performance.',
      accent: '#ffb800'
    },
    {
      icon: Lightbulb,
      title: 'Modern Tech Stack',
      description: 'Leveraging cutting-edge web technologies, cloud integration, and interactive media.',
      accent: '#10b981'
    }
  ];

  return (
    <section id="about-section" className="about-section">
      <div className="about-container">

        <div className="about-left">
          <div className="hero-eyebrow-container">
             <div className="hero-badge">
              <Zap size={14} className="badge-zap-icon" />
            <span>ABOUT US</span>
            </div>
          </div>

          <h2 className="about-title">
            Building Scalable Web Applications & <br />
            <span className="text-orange">Digital Solutions</span>
          </h2>

          <p className="about-body">
            Click Or Media is a full-service web development and digital production agency. 
            We design, build, and optimize custom web platforms, cloud infrastructure, and interactive 
            digital solutions tailored to scale growing businesses.
          </p>
          <div className="about-cta-row">
            <button
              id="btn-about-know-more"
              onClick={onKnowMore}
              className="btn-primary-orange"
            >
              <span>EXPLORE OUR SERVICES</span>
              <div className="cta-icon-circle">
              <ArrowRight size={14} />
            </div>
            </button>
          </div>
        </div>

        <div className="about-right">
          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  className="value-card"
                  style={{ '--card-accent': v.accent }}
                >
                  <div className="value-card-border" />
                  <div 
                    className="value-icon-box" 
                    style={{ color: v.accent, borderColor: `${v.accent}33` }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
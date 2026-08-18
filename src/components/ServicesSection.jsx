import React, { useState } from 'react';
import { 
  Share2, 
  TrendingUp, 
  Palette, 
  Layout, 
  Code2, 
  Video, 
  ArrowUpRight, 
  Check, 
  X, 
  Sparkles,
  Layers,
  Box,
  Cpu,
  Monitor,
  Target,
  BarChart2,
  Film
} from 'lucide-react';

export default function ServicesSection({ onSelectService, onExploreAll }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'webdev',
      num: '01',
      title: 'Full-Stack Web Development',
      subtitle: 'Scalable Architecture & High-Performance Web Apps',
      description: 'Custom React, Next.js, and Node.js applications built from the ground up, optimized for lightning-fast speeds, seamless SEO, and production-grade reliability.',
      icon: Code2,
      tags: ['React / Next.js', 'Node.js', 'REST & GraphQL', 'Core Web Vitals', 'MongoDB / SQL'],
      accent: '#ff5500',
      canvasGraphic: 'code-nodes',
      deliverables: [
        'Custom web applications built with modern React ecosystems & SSR',
        'Backend RESTful API engineering & scalable database architecture',
        'Performance optimization hitting 95+ Google PageSpeed scores',
        'Seamless CMS & third-party API integrations',
        'End-to-end automated testing & CI/CD deployment pipelines'
      ],
      process: ['Requirements & Spec', 'System Architecture', 'Frontend & Backend Build', 'Deployment & Audit']
    },
    {
      id: 'uiux',
      num: '02',
      title: 'UI/UX & Product Design',
      subtitle: 'User-Centric Interfaces & Interactive Prototypes',
      description: 'Intuitive user experiences and pixel-perfect design systems structured to engage users and maximize conversion rates across all screen sizes.',
      icon: Layout,
      tags: ['Wireframing', 'Figma Systems', 'User Research', 'Interactive Prototypes', 'Design Tokens'],
      accent: '#38bdf8',
      canvasGraphic: 'ui-wireframe',
      deliverables: [
        'High-fidelity Figma wireframes and interactive user journeys',
        'Design system creation ensuring consistent brand identity',
        'Conversion-rate focused UX audits to eliminate drop-offs',
        'Mobile-first responsive layouts tailored for web & mobile apps',
        'Usability testing and interactive prototype validation'
      ],
      process: ['User Discovery', 'Wireframing', 'Design System Construction', 'High-Fi Prototyping']
    },
    {
      id: 'branding',
      num: '03',
      title: 'Brand Identity & Systems',
      subtitle: 'Memorable Visual Positioning & Strategy',
      description: 'Comprehensive visual design systems that give modern tech platforms, startups, and products a distinct, high-impact market presence.',
      icon: Palette,
      tags: ['Logo Systems', 'Brand Guidelines', 'Typography', 'Asset Kits', 'Vector Graphics'],
      accent: '#ffb800',
      canvasGraphic: 'brand-grid',
      deliverables: [
        'Distinctive logo suites, custom color palettes, and typography rules',
        'Brand guideline documentation for digital, print, and video media',
        'Social media asset templates and investor presentation decks',
        'Market positioning and cohesive visual strategy',
        'Export-ready vector asset libraries and iconography sets'
      ],
      process: ['Brand Strategy', 'Visual Identity Design', 'Guideline Documentation', 'Asset Handoff']
    },
    {
      id: 'social',
      num: '04',
      title: 'Digital Marketing & Strategy',
      subtitle: 'Organic Growth Funnels & Tech Branding',
      description: 'Data-informed content strategy and multi-channel marketing campaigns built to establish domain authority and attract high-value leads.',
      icon: Share2,
      tags: ['Content Strategy', 'Growth Marketing', 'Technical SEO', 'Analytics', 'Funnel Design'],
      accent: '#10b981',
      canvasGraphic: 'radar-grid',
      deliverables: [
        'Targeted digital marketing campaigns across key acquisition channels',
        'Technical SEO strategies driving organic search traffic growth',
        'Analytics tracking and performance funnel optimization',
        'Brand voice amplification and technical content creation',
        'Comprehensive monthly analytics and conversion reports'
      ],
      process: ['Audience Mapping', 'Funnel Design', 'Content Distribution', 'Performance Optimization']
    },
    {
      id: 'ads',
      num: '05',
      title: 'Performance Advertising',
      subtitle: 'ROI-Driven Paid Media & Acquisition',
      description: 'Paid media campaigns across Google, Meta, and LinkedIn structured and optimized continuously to lower customer acquisition costs.',
      icon: TrendingUp,
      tags: ['Meta & Google Ads', 'A/B Creative Testing', 'Retargeting', 'ROAS Tracking', 'Conversion APIs'],
      accent: '#a855f7',
      canvasGraphic: 'chart-growth',
      deliverables: [
        'Multi-channel targeted ad campaigns across Meta, Google, & LinkedIn',
        'Continuous creative A/B testing matrix for optimal conversion',
        'Multi-stage retargeting pipelines to recapture lost traffic',
        'Transparent real-time attribution and ROAS performance reporting',
        'Landing page conversion rate optimization (CRO)'
      ],
      process: ['Campaign Setup', 'Creative Testing', 'Audience Retargeting', 'ROAS Scaling']
    },
    {
      id: 'video',
      num: '06',
      title: 'Motion & Visual Production',
      subtitle: 'High-Impact Promotional Media & Demos',
      description: 'Cinematic promotional videos, animated product walk-throughs, and dynamic motion graphics designed to captivate audiences.',
      icon: Video,
      tags: ['Product Demos', 'Motion Graphics', '3D Visuals', 'Export Suites', 'Video Editing'],
      accent: '#ec4899',
      canvasGraphic: 'camera-reticle',
      deliverables: [
        'Product walkthroughs and commercial-grade promo videos',
        '3D motion graphics and custom visual effects (VFX)',
        'Multi-format rendering optimized for web, social, and mobile',
        'High-quality audio mixing, sound design, and color grading',
        'Interactive promotional assets for web landing pages'
      ],
      process: ['Storyboarding', 'Scene Build', 'Animation & Motion', 'Final Render & Edit']
    }
  ];

  const renderCanvasGraphic = (type, color) => {
    switch (type) {
      case 'code-nodes':
        return (
          <svg className="card-custom-svg" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="20" width="80" height="80" rx="12" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="40" cy="40" r="6" fill={color} />
            <circle cx="80" cy="40" r="6" fill={color} opacity="0.6" />
            <circle cx="60" cy="80" r="8" stroke={color} strokeWidth="2" fill="#0d0f17" />
            <path d="M40 40 L60 80 L80 40" stroke={color} strokeWidth="1.5" opacity="0.6" />
          </svg>
        );
      case 'ui-wireframe':
        return (
          <svg className="card-custom-svg" viewBox="0 0 120 120" fill="none">
            <rect x="15" y="25" width="90" height="70" rx="8" stroke={color} strokeWidth="1.5" opacity="0.5" />
            <rect x="25" y="35" width="30" height="20" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
            <line x1="62" y1="38" x2="95" y2="38" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="62" y1="48" x2="85" y2="48" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <rect x="25" y="62" width="70" height="22" rx="4" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        );
      case 'brand-grid':
        return (
          <svg className="card-custom-svg" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="40" stroke={color} strokeWidth="1.5" opacity="0.3" />
            <polygon points="60,20 95,80 25,80" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="60" cy="60" r="8" fill={color} />
          </svg>
        );
      case 'radar-grid':
        return (
          <svg className="card-custom-svg" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="45" stroke={color} strokeWidth="1" opacity="0.2" />
            <circle cx="60" cy="60" r="28" stroke={color} strokeWidth="1" opacity="0.4" />
            <line x1="60" y1="10" x2="60" y2="110" stroke={color} strokeWidth="1" opacity="0.3" />
            <line x1="10" y1="60" x2="110" y2="60" stroke={color} strokeWidth="1" opacity="0.3" />
            <circle cx="78" cy="42" r="5" fill={color} />
          </svg>
        );
      case 'chart-growth':
        return (
          <svg className="card-custom-svg" viewBox="0 0 120 120" fill="none">
            <path d="M20 90 L45 65 L70 75 L100 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="30" r="5" fill={color} />
            <rect x="25" y="75" width="8" height="20" fill={color} opacity="0.2" rx="2" />
            <rect x="50" y="55" width="8" height="40" fill={color} opacity="0.3" rx="2" />
            <rect x="75" y="40" width="8" height="55" fill={color} opacity="0.5" rx="2" />
          </svg>
        );
      case 'camera-reticle':
        return (
          <svg className="card-custom-svg" viewBox="0 0 120 120" fill="none">
            <rect x="25" y="25" width="70" height="70" rx="14" stroke={color} strokeWidth="1.5" opacity="0.4" />
            <circle cx="60" cy="60" r="18" stroke={color} strokeWidth="2" />
            <circle cx="60" cy="60" r="6" fill={color} />
            <line x1="60" y1="15" x2="60" y2="25" stroke={color} strokeWidth="2" />
            <line x1="60" y1="95" x2="60" y2="105" stroke={color} strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services-section" className="services-section">
      <div className="services-container">
        
        <div className="services-header">
          <div>
            <div className="hero-eyebrow-container">
             <div className="hero-badge">
              <Layers size={14} className="badge-icon" />
              <span>CAPABILITIES</span>
            </div>
            </div>

            <h2 className="services-title">Services & Solutions</h2>
          </div>
          <p className="services-subtitle">
            Tailored engineering, design, and growth solutions designed for scalable modern digital platforms.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="service-card"
                style={{ '--card-accent': srv.accent }}
                onClick={() => setSelectedService(srv)}
              >

                <div className="card-graphic-container">
                  {renderCanvasGraphic(srv.canvasGraphic, srv.accent)}
                </div>


                <div className="service-top-row">
                  <span className="service-number">{srv.num}</span>
                  {/* <div 
                    className="service-icon-box"
                    style={{ color: srv.accent, borderColor: `${srv.accent}40` }}
                  >
                    <Icon size={20} />
                  </div> */}
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-desc">{srv.description}</p>
                </div>

                <div className="service-tags">
                  {srv.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag}</span>
                  ))}
                  {srv.tags.length > 3 && (
                    <span className="service-tag tag-more">+{srv.tags.length - 3}</span>
                  )}
                </div>


                <div className="service-card-footer">
                  <span className="learn-more-text">EXPLORE DETAILS</span>
                  <div className="arrow-btn-circle">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-cta-row">
          <button
            onClick={onExploreAll}
            className="btn-primary-orange"
          >
            <span>DISCUSS A PROJECT</span>
            <Sparkles size={16} />
          </button>
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
            
      
            <div className="modal-header">
              <div className="modal-badge-group">
                <span className="modal-num">{selectedService.num}</span>
                <span 
                  className="modal-accent-pill" 
                  style={{ 
                    background: `${selectedService.accent}18`, 
                    color: selectedService.accent, 
                    borderColor: `${selectedService.accent}40` 
                  }}
                >
                  {selectedService.tags[0]}
                </span>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="modal-close-btn"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>


            <div className="modal-scroll-content">
              <div className="modal-top-banner">
                <h3 className="modal-title">{selectedService.title}</h3>
                <p className="modal-subtitle">{selectedService.subtitle}</p>
                <p className="modal-description">{selectedService.description}</p>
              </div>

              <div className="modal-grid-layout">
       
                <div className="modal-column">
                  <h4 className="modal-section-heading">
                    <Check size={16} style={{ color: selectedService.accent }} />
                    Core Deliverables
                  </h4>
                  <ul className="deliverables-list">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="deliverable-item">
                        <span className="bullet-point" style={{ background: selectedService.accent }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-column">
                  <h4 className="modal-section-heading">
                    <Box size={16} style={{ color: selectedService.accent }} />
                    Execution Roadmap
                  </h4>
                  <div className="process-timeline">
                    {selectedService.process.map((step, idx) => (
                      <div key={idx} className="timeline-step">
                        <span className="step-num">0{idx + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="modal-section-heading mt-24">
                    Technology & Tools
                  </h4>
                  <div className="modal-tags-wrapper">
                    {selectedService.tags.map((tag, idx) => (
                      <span key={idx} className="modal-tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="modal-footer">
              <button
                onClick={() => {
                  const currentSrv = selectedService;
                  setSelectedService(null);
                  if (onSelectService) onSelectService(currentSrv);
                }}
                className="btn-primary-orange serviceBtn w-full"
                style={{ background: selectedService.accent }}
              >
                <span>INITIATE {selectedService.title.toUpperCase()}</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
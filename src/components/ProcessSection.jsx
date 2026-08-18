import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Compass, 
  Code2, 
  Sliders, 
  FileText, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';


export default function ProcessSection({onExploreAll}) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      desc: 'We analyze your current digital presence, evaluate competitors, and outline target audience personas to map out clear technical requirements.',
      icon: Search,
      deliverables: ['Competitor Benchmarking', 'Audience Persona Mapping', 'Full Funnel Audit']
    },
    {
      num: '02',
      title: 'Architecture & Strategy',
      desc: 'Our team constructs a full-stack blueprint, selecting optimal frameworks, database structures, and performance benchmarks for your project.',
      icon: Compass,
      deliverables: ['Tech Stack Selection', 'Database Schema Planning', 'UX Flow Directives']
    },
    {
      num: '03',
      title: 'Development & Build',
      desc: 'We write clean, modular code with modern frameworks, establishing responsive layouts, API endpoints, and real-time state management.',
      icon: Code2,
      deliverables: ['Frontend Component Library', 'REST/GraphQL API Setup', 'Database & Auth Integration']
    },
    {
      num: '04',
      title: 'Optimization & Testing',
      desc: 'Rigorous cross-browser testing, code-splitting, SEO audits, and performance tuning to ensure high speeds and low latency.',
      icon: Sliders,
      deliverables: ['Lighthouse Performance Optimization', 'Cross-Device Testing', 'SEO & Accessibility Audit']
    },
    {
      num: '05',
      title: 'Deployment & Scaling',
      desc: 'Seamless deployment to cloud infrastructure with automated CI/CD pipelines, live monitoring, and ongoing feature updates.',
      icon: FileText,
      deliverables: ['CI/CD Pipeline Setup', 'Cloud Hosting Deployment', 'Post-Launch Analytics']
    }
  ];

  return (
    <section id="process-section" className="process-section">
      <div className="process-container">
        
        <div className="process-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>OUR DEVELOPMENT PROCESS</span>
          </div>
          <h2 className="process-title">Engineering Digital Precision</h2>
          <p className="process-subtitle">
            A structured 5-step methodology built for speed, scalability, and seamless project execution.
          </p>
        </div>

        <div className="process-tabs">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                className={`process-tab-btn ${isActive ? 'tab-active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="tab-icon-wrapper">
                  <Icon size={18} />
                </div>
                <span className="tab-num">{step.num}</span>
                <span className="tab-label">{step.title.split(' ')[0]}</span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeTabGlow" 
                    className="tab-active-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="process-timeline">
          <div className="timeline-line">
            <motion.div
              className="timeline-progress-fill"
              animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="steps-list">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`step-item ${isActive ? 'step-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >

                  <div className="step-number-node">
                    <span className="step-num">{step.num}</span>
                    {isActive && <div className="node-pulse" />}
                  </div>

                  <div className="step-card">
                    <div className="step-header">
                      <div className="step-title-group">
                        <div className="step-icon-box">
                          <Icon size={20} />
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                      </div>
                      <span className="step-tag">Phase {step.num}</span>
                    </div>

                    <p className="step-description">{step.desc}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          className="step-deliverables"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <span className="deliverables-heading">
                            Key Deliverables & Milestones
                          </span>
                          <div className="deliverable-pills">
                            {step.deliverables.map((item, dIdx) => (
                              <span key={dIdx} className="deliv-pill">
                                <CheckCircle2 size={14} className="deliv-icon" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="process-footer">
          <p>Ready to bring your project to life?</p>
          <a  onClick={onExploreAll} className="process-cta-link">
            Start a Conversation <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
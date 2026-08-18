import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';


export default function Marquee() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const rotateTop = useTransform(scrollYProgress, [0.1, 0.6], [0, -15]);
  const rotateBottom = useTransform(scrollYProgress, [0.1, 0.6], [0, 15]);

  const itemsTop = [
    'FULL-STACK DEVELOPMENT',
    'UI/UX & PRODUCT DESIGN',
    'BRAND IDENTITY',
    'DIGITAL MARKETING',
    'PERFORMANCE ADVERTISING',
    'MOTION & VIDEO PRODUCTION'
  ];

  const itemsBottom = [
    'SCALABLE ARCHITECTURE',
    'SEO & CONVERSION FUNNELS',
    'REACT & NEXT.JS APPS',
    'PROMOTIONAL MEDIA',
    'GROWTH STRATEGY',
    'CUSTOM DESIGN SYSTEMS'
  ];

  const marqueeTop = [...itemsTop, ...itemsTop, ...itemsTop];
  const marqueeBottom = [...itemsBottom, ...itemsBottom, ...itemsBottom];

  return (
    <section ref={containerRef} id="marquee-cross-section" className="marquee-cross-wrapper">

      <motion.div 
        className="marquee-strip strip-top" 
        style={{ rotate: rotateTop }}
      >
        <div className="marquee-track track-left">
          {marqueeTop.map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <Sparkles size={16} className="marquee-star-icon" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="marquee-strip strip-bottom" 
        style={{ rotate: rotateBottom }}
      >
        <div className="marquee-track track-right">
          {marqueeBottom.map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <Sparkles size={16} className="marquee-star-icon" />
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
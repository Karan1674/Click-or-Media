import React, { useEffect, useState } from 'react';

export default function PageLoader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('PREPARING YOUR EXPERIENCE');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const phases = [
      'PREPARING YOUR EXPERIENCE',
      'LOADING CREATIVE SYSTEMS',
      'INITIALIZING DIGITAL EXPERIENCE',
      'OPTIMIZING YOUR EXPERIENCE',
      'ALMOST READY',
      'WELCOME TO CLICK OR MEDIA'
    ];

    let current = 0;

    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 9) + 4;
      current = Math.min(current + step, 100);
      setProgress(current);

      const pIdx = Math.min(
        Math.floor((current / 100) * phases.length),
        phases.length - 1
      );
      setPhaseText(phases[pIdx]);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 650);
        }, 650);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`mono-loader-overlay ${isExiting ? 'mono-loader-exit' : ''}`}>
      <div className="loader-grid-bg"></div>
      <div className="loader-ambient-orange-glow"></div>

      <div className="loader-orbit loader-orbit-one"></div>
      <div className="loader-orbit loader-orbit-two"></div>
      <div className="loader-orbit loader-orbit-three"></div>

      <div className="mono-loader-container">
        <div className="loader-top-bar">
          <div className="loader-brand-chip">
            <span className="brand-dot"></span>
            <span className="brand-name">CLICK OR MEDIA</span>
          </div>
          <span className="loader-sys-tag font-mono">
            DIGITAL MARKETING • CREATIVE • GROWTH
          </span>
        </div>
        <div className="loader-center-block">
          <div className="loader-intro">
            <span className="loader-intro-line"></span>
            <span>YOUR DIGITAL JOURNEY STARTS HERE</span>
            <span className="loader-intro-line"></span>
          </div>

          <div className="loader-giant-number font-mono">
            {progress < 10 ? `0${progress}` : progress < 100 ? `${progress}` : '100'}
            <span className="percent-mark">%</span>
          </div>

          <div className="loader-tagline-row">
            <span className="status-indicator">✦</span>
            <span className="status-label font-mono">{phaseText}</span>
          </div>

          <div className="mono-progress-wrapper">
            <div className="mono-progress-track">
              <div className="mono-progress-fill" style={{ width: `${progress}%` }}>
                <div className="mono-progress-flare"></div>
              </div>
            </div>
            <div className="mono-progress-ticks">
              <span>00</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="loader-bottom-bar font-mono">
          <div className="loader-footer-left">
            <span className="loader-footer-label">DIGITAL MARKETING AGENCY</span>
            <span className="text-white font-semibold">WHERE CREATIVITY MEETS BUSINESS GROWTH</span>
          </div>
          <div className="loader-footer-right">
            <span className="text-orange">CLICKS</span>
            <span className="footer-arrow">→</span>
            <span className="text-white">CLIENTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
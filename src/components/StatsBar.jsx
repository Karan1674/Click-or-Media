import React from 'react';
import { Target, Clock, BarChart2, Award, Users, TrendingUp } from 'lucide-react';

export default function StatsBar() {
const stats = [
  {
    value: '100%',
    label: 'DEDICATION',
    sub: 'Committed to your brand success',
    icon: Target,
    accent: '#ffb800'
  },
  {
    value: '24/7',
    label: 'SUPPORT AVAILABLE',
    sub: 'Dedicated client success team',
    icon: Clock,
    accent: '#38bdf8'
  },
  {
    value: '100%',
    label: 'GOAL FOCUSED',
    sub: 'Data-driven performance tracking',
    icon: BarChart2,
    accent: '#a855f7'
  },
  {
    value: '#1',
    label: 'CLIENT PRIORITY',
    sub: 'Direct founder-led strategy',
    icon: Award,
    accent: '#f59e0b'
  },
  {
    value: '10+',
    label: 'IN-HOUSE EXPERTS',
    sub: 'Designers, devs & marketers',
    icon: Users,
    accent: '#38bdf8'
  },
  {
    value: '380%',
    label: 'AVERAGE ROI SURGE',
    sub: 'Maximized return on ad spend',
    icon: TrendingUp,
    accent: '#10b981'
  }
];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `perspective(600px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="stat-card"
                style={{ '--card-accent': item.accent }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >

                <div className="stat-accent-bar" style={{ background: item.accent }} />

                <div className="stat-header">
                  <span className="stat-number">{item.value}</span>
                  <div className="stat-icon-wrapper" style={{ color: item.accent }}>
                    <Icon size={18} />
                  </div>
                </div>

                <div className="stat-content">
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-sub">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
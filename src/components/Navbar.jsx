import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const serviceCategories = [
    {
      id: "01",
      title: "Digital Marketing",
      items: [
        "SEO Optimization",
        "Google Ads / Meta Ads",
        "Social Media Marketing",
      ],
    },
    {
      id: "02",
      title: "Web & App Development",
      items: ["Website Development", "App Development"],
    },
    {
      id: "03",
      title: "Branding & Design",
      items: ["Branding", "Logo Design", "UI/UX Design"],
    },
    {
      id: "04",
      title: "Photo & Video",
      items: ["Video Production", "Photography", "Video Editing"],
    },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container">
        <div className="nav-left-group">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="brand-logo-unit"
          >
            <div className="logo-badge">
              <img
                src="https://clickormedia.com/assets/logo-BhY4nNck.jpg"
                alt="Click Or Media"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="logo-fallback-text">CM</span>
            </div>
            <div className="logo-text-stack">
              <span className="logo-title">
                CLICK <span className="highlight-orange">OR</span> MEDIA
              </span>
              <span className="logo-sub">AGENCY</span>
            </div>
          </a>

          <div className="nav-divider desktop-only" />
          <div className="nav-links desktop-only">
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("blog-section");
              }}
              className="nav-link"
            >
              Blog
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about-section");
              }}
              className="nav-link"
            >
              About Us
            </a>

            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                onClick={() => scrollToSection("services-section")}
                className={`nav-link dropdown-btn ${servicesDropdown ? "active" : ""}`}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`arrow-icon ${servicesDropdown ? "rotate" : ""}`}
                />
              </button>

              {servicesDropdown && (
                <div className="mega-menu-panel">
                  <div className="mega-menu-header">
                    <span className="mega-badge">
                      <Sparkles size={12} /> EXPERT SERVICES
                    </span>
                    <span className="mega-subtitle">
                      End-to-End Digital Growth Solutions
                    </span>
                  </div>
                  <div className="mega-menu-grid">
                    {serviceCategories.map((cat) => (
                      <div key={cat.id} className="mega-card">
                        <div className="mega-card-head">
                          <span className="category-num">{cat.id}</span>
                          <span className="category-title">{cat.title}</span>
                        </div>
                        <div className="mega-card-links">
                          {cat.items.map((item, idx) => (
                            <a
                              key={idx}
                              href="#services-section"
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("services-section");
                              }}
                              className="mega-link-item"
                            >
                              <span className="link-bullet"></span>
                              <span>{item}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="nav-divider desktop-only" />
        </div>
        <div className="nav-right-group desktop-only">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>AVAILABLE FOR PROJECTS</span>
          </div>

          <button
            onClick={
              onOpenContact || (() => scrollToSection("contact-section"))
            }
            className="cta-button-glow"
          >
            <span>Contact Us</span>
            <div className="cta-icon-circle">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger mobile-only"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="mobile-item"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about-section");
            }}
            className="mobile-item"
          >
            About Us
          </a>

          <div className="mobile-services-block">
            <span className="mobile-block-title">OUR SERVICES</span>
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="mobile-service-group">
                <span className="mobile-cat-name">{cat.title}</span>
                <div className="mobile-cat-links">
                  {cat.items.map((item, idx) => (
                    <a
                      key={idx}
                      href="#services-section"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("services-section");
                      }}
                      className="mobile-sub-item"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
              else scrollToSection("contact-section");
            }}
            className="mobile-cta-btn"
          >
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

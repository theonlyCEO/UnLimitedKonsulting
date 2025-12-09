import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">UnLimited</span>
          <span className="logo-highlight">Konsulting</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
              <span className="nav-link-underline"></span>
            </Link>
          ))}
        </nav>

        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: ${scrolled ? 'rgba(0, 31, 63, 0.95)' : 'rgba(0, 31, 63, 0.9)'};
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 175, 55, ${scrolled ? '0.2' : '0.1'});
          transition: all 0.3s ease;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          height: 80px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .logo-highlight {
          color: #d4af37;
        }

        .nav {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-link {
          color: #ffffff;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #d4af37;
        }

        .nav-link.active {
          color: #d4af37;
        }

        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #d4af37;
          transition: width 0.3s ease;
        }

        .nav-link:hover .nav-link-underline,
        .nav-link.active .nav-link-underline {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background: #ffffff;
          transition: 0.3s;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(0, 31, 63, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 20px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            gap: 0;
          }

          .nav.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            padding: 15px 0;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-link:last-child {
            border-bottom: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
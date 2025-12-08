import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiFacebook />, href: 'https://www.facebook.com/unlimitedkonsult' },
    { icon: <FiInstagram />, href: 'https://www.instagram.com/unlimitedkonsulting' },
    { icon: <FiTwitter />, href: 'https://twitter.com/unlimitedkonsult' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/company/unlimitedkonsult' },
    { icon: <FiMail />, href: 'mailto:info@unlimitedkonsult.com' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Row: Logo & Social */}
        <div className="footer-top">
          <div className="footer-logo">
            <span>UnLimited</span> Konsulting
          </div>
          
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          {quickLinks.map((link) => (
            <Link key={link.path} to={link.path} className="footer-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} UnLimited Konsulting. All rights reserved.
          </div>
          <div className="location">
            Pretoria, South Africa
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #000000;
          color: #ffffff;
          padding: 25px 0 15px;
          border-top: 2px solid #d4af37;
          font-size: 0.9rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Top Row */
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-logo {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-logo span {
          color: #d4af37;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          color: #cccccc;
          font-size: 1.1rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .social-icon:hover {
          color: #d4af37;
          background: rgba(212, 175, 55, 0.1);
          transform: translateY(-2px);
        }

        /* Quick Links */
        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-link {
          color: #aaaaaa;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #d4af37;
        }

        /* Bottom Section */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #888888;
          font-size: 0.8rem;
        }

        .copyright {
          opacity: 0.8;
        }

        .location {
          color: #d4af37;
          opacity: 0.7;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer {
            padding: 20px 0 10px;
          }

          .footer-top {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .footer-links {
            gap: 15px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            gap: 12px;
            font-size: 0.8rem;
          }

          .social-icon {
            width: 28px;
            height: 28px;
            font-size: 1rem;
          }

          .footer {
            padding: 15px 0 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Preload the background image
    const img = new Image();
    img.src = '/images/consult.png';
    img.onload = () => {
      setTimeout(() => setBgLoaded(true), 100);
    };
    img.onerror = () => {
      console.error('Failed to load background image');
      // Use fallback if image fails
      setTimeout(() => setBgLoaded(true), 500);
    };
  }, []);

  const testimonials = [
    {
      quote: "UnLimited Konsulting helped us redefine our brand and triple our engagement.",
      author: "Thabo Mokoena",
      role: "CEO, RiseTech Solutions"
    },
    {
      quote: "Their strategic insight and emotional UX transformed our platform.",
      author: "Lerato Ndlovu",
      role: "Founder, YouthLink Africa"
    },
    {
      quote: "Professional, visionary, and deeply invested in our success.",
      author: "Sipho Dlamini",
      role: "Director, GreenCore Energy"
    },
    {
      quote: "We launched faster and smarter thanks to their agile development.",
      author: "Zanele Khumalo",
      role: "COO, EduBridge SA"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        {/* Background Image Container */}
        <div 
          className={`hero-background ${bgLoaded ? 'loaded' : ''}`}
          style={bgLoaded ? {
            backgroundImage: `url('/images/consult.png')`
          } : {}}
        >
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              <span className="gradient-text">Powering</span> Possibilities
            </h1>
            <p className="hero-subtitle">
              Empowering enterprises with transformative digital tools and visionary strategies that ignite growth, refine identity, and establish lasting success.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary btn-large">
                Explore Our Services <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Get Support Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Africa Banner */}
      <section className="africa-banner">
        <div className="container">
          <div className="africa-content">
            <h3>Now partnering across Africa</h3>
            <p>Kenya, Botswana, Namibia, South Africa, Tanzania, and beyond.</p>
            <p className="africa-note">We welcome visionary clients from every corner of the continent.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Impact in Numbers</h2>
            <p className="section-subtitle">
              We measure success by the lives we touch and the businesses we transform.
            </p>
          </div>
          <div className="stats-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <div className="stat-number">
                <CountUp end={198} duration={3} />
                <span>+</span>
              </div>
              <h3>Projects Completed</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="stat-card"
            >
              <div className="stat-number">
                <CountUp end={95} duration={3} />
                <span>+</span>
              </div>
              <h3>Clients Served</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="stat-card"
            >
              <div className="stat-number">
                <CountUp end={90} duration={3} />
                <span>+</span>
              </div>
              <h3>Businesses Developed</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Partners Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's build something extraordinary together.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding-top: 0;
          background: rgba(0, 31, 63, 1);
        }

        /* Hero Section with Background Image */
        .hero-section {
          padding: 180px 0 100px;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: rgba(0, 31, 63, 1);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          will-change: opacity;
        }

        .hero-background.loaded {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 31, 63, 0.95) 0%,
            rgba(0, 31, 63, 0.85) 50%,
            rgba(0, 31, 63, 0.95) 100%
          );
          backdrop-filter: blur(2px);
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 25px;
          line-height: 1.1;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
        }

        .gradient-text {
          background: linear-gradient(135deg, #d4af37, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto 50px;
          line-height: 1.7;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        }

        .hero-buttons {
          display: flex;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .btn-large {
          padding: 18px 40px;
          font-size: 1.2rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #d4af37, #c5a029);
          color: #001f3f;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #d4af37;
          border: 2px solid #d4af37;
        }

        .btn-secondary:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: translateY(-3px);
        }

        /* Africa Banner */
        .africa-banner {
          background: linear-gradient(135deg, #d4af37, #c5a029);
          padding: 40px 0;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .africa-content {
          text-align: center;
          color: #001f3f;
        }

        .africa-content h3 {
          font-size: 2rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .africa-content p {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .africa-note {
          font-size: 0.9rem;
          opacity: 0.9;
          margin-top: 10px;
        }

        /* Stats Section */
        .stats-section {
          padding: 100px 0;
          background: rgba(0, 31, 63, 0.95);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 50px 30px;
          text-align: center;
          border: 1px solid rgba(212, 175, 55, 0.3);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .stat-card:hover {
          border-color: #d4af37;
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 800;
          color: #d4af37;
          margin-bottom: 15px;
        }

        .stat-card h3 {
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
        }

        /* Testimonials */
        .testimonials-section {
          padding: 100px 0;
          background: rgba(0, 0, 0, 0.8);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 35px;
          border-left: 5px solid #d4af37;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.1);
        }

        .testimonial-quote {
          color: #ffffff;
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 25px;
          font-style: italic;
        }

        .testimonial-author {
          color: #d4af37;
        }

        .testimonial-author strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }

        .testimonial-author span {
          font-size: 1rem;
          opacity: 0.9;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          text-align: center;
          background: linear-gradient(135deg, #001f3f, #003366);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 3.5rem;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .cta-content p {
          font-size: 1.3rem;
          color: #cccccc;
          margin-bottom: 40px;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .cta-content h2 {
            font-size: 2.8rem;
          }
          
          .stat-number {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 150px 0 80px;
            min-height: 80vh;
          }
          
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            padding: 0 20px;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 0 20px;
          }
          
          .cta-content h2 {
            font-size: 2.2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .stat-card {
            padding: 40px 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-section {
            padding: 120px 0 60px;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .cta-content h2 {
            font-size: 1.8rem;
          }
          
          .btn-large {
            padding: 15px 30px;
            font-size: 1rem;
          }
          
          .stat-number {
            font-size: 3rem;
          }
        }

        /* Loading State */
        @media (prefers-reduced-motion: reduce) {
          .hero-background {
            transition: none;
          }
          
          .gradient-text {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Home;
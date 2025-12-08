import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTrendingUp, 
  FiDollarSign, 
  FiCode,
  FiUsers,
  FiChevronDown,
  FiChevronUp,
  FiCheck
} from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FiTrendingUp />,
      title: "Business Consulting & Development",
      summary: "From strategy to execution, we help businesses build, scale, and lead with confidence.",
      details: [
        "Business plans, company profiles, marketing strategies",
        "Legal frameworks, governance docs, registration & amendments",
        "Leadership training, innovation labs, operational empowerment"
      ]
    },
    {
      id: 2,
      icon: <FiDollarSign />,
      title: "Funding Solutions for Growth",
      summary: "Access fast, reliable funding through asset-backed finance, invoice discounting, and tender support.",
      details: [
        "Bridging finance (R500K–R50M)",
        "Government invoice & tender funding",
        "Property advances & factoring"
      ]
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Corporate Identity & Brand Evolution",
      summary: "We craft brands that resonate—authentic, memorable, and future-ready through strategic design.",
      details: [
        "Brand strategy, audits, and messaging frameworks",
        "Logo design, brand guidelines, digital assets",
        "Social media branding and corporate collateral"
      ]
    },
    {
      id: 4,
      icon: <FiCode />,
      title: "Web & App Development",
      summary: "We build digital ecosystems that scale—intuitive, secure, and built for impact across web and mobile.",
      details: [
        "Responsive websites, eCommerce, SEO optimization",
        "Android/web apps, UI/UX design, API integration",
        "Backend architecture and performance tuning"
      ]
    },
    {
      id: 5,
      icon: <FiUsers />,
      title: "Youth Entrepreneurship",
      summary: "We empower young visionaries with tools, mentorship, and funding to build sustainable futures.",
      details: [
        "Startup kits, pitch decks, and business registration",
        "Mentorship programs and incubator access",
        "Youth funding pathways and digital literacy training"
      ]
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="services-page"
    >
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1>Our Services</h1>
            <p>Transformative solutions through emotionally intelligent consulting, digital innovation, and brand elevation.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-summary">{service.summary}</p>
                
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="service-details"
                    >
                      <ul>
                        {service.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <FiCheck /> {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  className="read-more-btn"
                  onClick={() => toggleService(service.id)}
                >
                  {expandedService === service.id ? (
                    <>
                      Show Less <FiChevronUp />
                    </>
                  ) : (
                    <>
                      Read More <FiChevronDown />
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>A structured approach to delivering exceptional results</p>
          </div>
          
          <div className="process-steps">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your vision, goals, and challenges' },
              { number: '02', title: 'Strategy', description: 'Developing a customized roadmap for success' },
              { number: '03', title: 'Execution', description: 'Implementing solutions with precision and care' },
              { number: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="process-step"
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our services can help you achieve your goals.</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          padding-top: 80px;
        }

        .services-hero {
          padding: 100px 0;
          background: linear-gradient(135deg, rgba(0, 31, 63, 0.9), rgba(0, 31, 63, 0.7));
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: #d4af37;
          max-width: 700px;
          margin: 0 auto;
        }

        .section {
          padding: 80px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px 30px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          border-color: #d4af37;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
        }

        .service-icon {
          font-size: 2.5rem;
          color: #d4af37;
          margin-bottom: 20px;
        }

        .service-card h3 {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-summary {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-details {
          margin: 20px 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-details ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-details li {
          color: #cccccc;
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
        }

        .service-details li svg {
          color: #d4af37;
          flex-shrink: 0;
        }

        .read-more-btn {
          background: transparent;
          border: 2px solid #d4af37;
          color: #d4af37;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .read-more-btn:hover {
          background: #d4af37;
          color: #001f3f;
        }

        .process-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto;
        }

        .process-steps {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px;
          border-left: 4px solid #d4af37;
        }

        .step-number {
          font-size: 2rem;
          font-weight: 800;
          color: #d4af37;
          min-width: 60px;
        }

        .step-content h3 {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .step-content p {
          color: #cccccc;
          line-height: 1.6;
        }

        .cta-section {
          text-align: center;
          padding: 100px 0;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .process-step {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Services;
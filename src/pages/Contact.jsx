import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMessageSquare, 
  FiDollarSign, 
  FiUsers,
  FiHeadphones,
  FiBriefcase,
  FiSend
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const departments = [
    {
      icon: <FiMail />,
      title: "General Inquiries",
      email: "info@unlimitedkonsult.com",
      description: "For general questions and information"
    },
    {
      icon: <FiMessageSquare />,
      title: "Marketing Department",
      email: "marketing@unlimitedkonsult.com",
      description: "Partnerships and marketing opportunities"
    },
    {
      icon: <FiDollarSign />,
      title: "Sales Department",
      email: "sales@unlimitedkonsult.com",
      description: "Service inquiries and pricing"
    },
    {
      icon: <FiHeadphones />,
      title: "Support Department",
      email: "support@unlimitedkonsult.com",
      description: "Technical support and assistance"
    },
    {
      icon: <FiUsers />,
      title: "Human Resources",
      email: "hr@unlimitedkonsult.com",
      description: "Careers and team opportunities"
    },
    {
      icon: <FiBriefcase />,
      title: "Partnerships",
      email: "stevem@unlimitedkonsult.com",
      description: "Business collaborations"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1>Get in Touch</h1>
            <p>Connect with the right team for your specific needs or send us a message directly.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-form-section"
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">
                  <FiSend /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Department Directory */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="directory-section"
            >
              <h2>Department Directory</h2>
              <p className="directory-subtitle">Reach the right team instantly</p>
              
              <div className="departments-grid">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="department-card"
                    onClick={() => window.location.href = `mailto:${dept.email}`}
                  >
                    <div className="dept-icon">
                      {dept.icon}
                    </div>
                    <div className="dept-info">
                      <h3>{dept.title}</h3>
                      <p className="dept-description">{dept.description}</p>
                      <p className="dept-email">{dept.email}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section whatsapp-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="whatsapp-content"
          >
            <div className="whatsapp-info">
              <h2>Prefer Instant Chat?</h2>
              <p>Our advisors are ready to assist you in real-time via WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/message/CTBUZ4CDKE7TN1"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <FiMessageSquare /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section social-section">
        <div className="container">
          <div className="section-header">
            <h2>Connect With Us</h2>
            <p>Follow us for updates, insights, and industry news</p>
          </div>
          
          <div className="social-links">
            {[
              { platform: "Facebook", url: "https://www.facebook.com/unlimitedkonsult" },
              { platform: "Instagram", url: "https://www.instagram.com/unlimitedkonsulting" },
              { platform: "YouTube", url: "https://www.youtube.com/@UnLimitedKonsulting" },
              { platform: "Google Business", url: "https://g.page/r/CaTRVylvSEUKEBE/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {social.platform}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          padding-top: 80px;
        }

        .contact-hero {
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
          max-width: 600px;
          margin: 0 auto;
        }

        .section {
          padding: 80px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .contact-form-section h2,
        .directory-section h2 {
          font-size: 2rem;
          color: #ffffff;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          color: #d4af37;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #ffffff;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .directory-subtitle {
          color: #cccccc;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .departments-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .department-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .department-card:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: #d4af37;
          transform: translateX(5px);
        }

        .dept-icon {
          font-size: 1.8rem;
          color: #d4af37;
          flex-shrink: 0;
        }

        .dept-info h3 {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .dept-description {
          color: #cccccc;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .dept-email {
          color: #d4af37;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .whatsapp-section {
          background: linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.05));
          border-top: 1px solid rgba(37, 211, 102, 0.2);
          border-bottom: 1px solid rgba(37, 211, 102, 0.2);
        }

        .whatsapp-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .whatsapp-content {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }
        }

        .whatsapp-info h2 {
          font-size: 2rem;
          color: #ffffff;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .whatsapp-info p {
          color: #cccccc;
          font-size: 1.1rem;
        }

        .whatsapp-button {
          background: #25D366;
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .whatsapp-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
          background: #1DA851;
        }

        .social-section {
          text-align: center;
        }

        .section-header {
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

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          max-width: 800px;
          margin: 0 auto;
        }

        .social-link {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: #d4af37;
          color: #001f3f;
          transform: translateY(-3px);
          border-color: #d4af37;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .contact-form-section h2,
          .directory-section h2,
          .whatsapp-info h2 {
            font-size: 1.8rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .contact-form {
            padding: 30px 20px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;
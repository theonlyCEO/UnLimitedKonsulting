import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUsers, FiTarget, FiAward, FiGlobe } from 'react-icons/fi';

const About = () => {
  const teamMembers = [
    {
      name: "Steve Dlamini",
      role: "Business Consultant, Strategist, Brand Architect",
      description: "Steve is the driving force behind UnLimited Konsulting. With a background in business development, digital engineering, and brand strategy, he brings a rare blend of technical mastery and creative insight."
    },
    {
      name: "Magoro Londolani",
      role: "UX Designer, Emotional Experience Strategist",
      description: "Magoro brings a rare sensitivity to digital design, ensuring every interface speaks to the user's emotional state. His work bridges aesthetics and empathy, crafting experiences that feel intuitive, safe, and deeply human."
    }
  ];

  const values = [
    { icon: <FiUsers />, title: "Integrity", description: "We believe in honest, transparent communication and ethical practices in everything we do." },
    { icon: <FiTarget />, title: "Inclusivity", description: "Creating solutions that are accessible and beneficial to everyone, regardless of background or ability." },
    { icon: <FiAward />, title: "Creativity", description: "Pushing boundaries and challenging conventions to deliver innovative, forward-thinking solutions." },
    { icon: <FiGlobe />, title: "Purpose-Driven Growth", description: "Focusing on sustainable, meaningful impact that creates lasting value for our clients and communities." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="about-hero-content"
          >
            <h1>About UnLimited Konsulting</h1>
            <p>Transforming businesses through strategic innovation and digital excellence.</p>
          </motion.div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Beliefs</h2>
            <p>Guiding principles that shape every decision, every design, and every partnership.</p>
          </div>
          
          <div className="beliefs-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="belief-card"
            >
              <h3>Mission</h3>
              <p>To empower ambitious businesses—especially SMEs—with transformative digital solutions that drive growth, elevate identity, and unlock long-term success.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="belief-card"
            >
              <h3>Vision</h3>
              <p>To be a global catalyst for digital innovation—helping organizations reimagine their potential through strategic consulting, intelligent technology, and creative excellence.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="belief-card"
            >
              <h3>Values</h3>
              <p>We believe in integrity, inclusivity, creativity, and purpose-driven growth. Our work is guided by empathy, executed with precision, and inspired by the belief that great design can change the way the world connects.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section philosophy-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="philosophy-content"
          >
            <h2>Our Philosophy</h2>
            <p>Technology is more than a tool—it's a catalyst for transformation. We blend creativity, strategy, and precision to deliver future-proof solutions. Our philosophy is rooted in the conviction that every business, regardless of size, deserves access to strategic innovation and digital excellence.</p>
            <p>We don't chase trends—we set them. By staying ahead of the curve and embracing emerging technologies, we empower businesses to lead with confidence, adapt with agility, and grow with purpose.</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The visionary minds behind our transformative solutions.</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="team-card"
              >
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
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
            <h2>Let's Build Something Extraordinary</h2>
            <p>Whether you're launching a new venture or reinventing your brand, UnLimited Konsulting is your partner in progress.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 80px;
        }

        .about-hero {
          padding: 100px 0;
          background: linear-gradient(135deg, rgba(0, 31, 63, 0.9), rgba(0, 31, 63, 0.7));
          text-align: center;
        }

        .about-hero-content h1 {
          font-size: 3.5rem;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .about-hero-content p {
          font-size: 1.2rem;
          color: #d4af37;
          max-width: 600px;
          margin: 0 auto;
        }

        .section {
          padding: 80px 0;
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

        .beliefs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .beliefs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .beliefs-grid {
            grid-template-columns: 1fr;
          }
        }

        .belief-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px 30px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
        }

        .belief-card:hover {
          border-color: #d4af37;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
        }

        .belief-card h3 {
          color: #d4af37;
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .belief-card p {
          color: #cccccc;
          line-height: 1.6;
        }

        .philosophy-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .philosophy-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .philosophy-content h2 {
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .philosophy-content p {
          color: #cccccc;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        .value-card {
          text-align: center;
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          background: rgba(212, 175, 55, 0.1);
        }

        .value-icon {
          font-size: 2.5rem;
          color: #d4af37;
          margin-bottom: 20px;
        }

        .value-card h3 {
          color: #ffffff;
          font-size: 1.3rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .value-card p {
          color: #cccccc;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .team-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }

        .team-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px;
          border-left: 4px solid #d4af37;
        }

        .team-info h3 {
          color: #ffffff;
          font-size: 1.8rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .team-role {
          color: #d4af37;
          font-size: 1.1rem;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .team-description {
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
          .about-hero-content h1 {
            font-size: 2.5rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default About;
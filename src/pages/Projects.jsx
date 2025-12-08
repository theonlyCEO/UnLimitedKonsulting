import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const completedProjects = [
    { name: "RiseTech Solutions", category: "Brand Strategy" },
    { name: "YouthLink Africa", category: "Platform Development" },
    { name: "GreenCore Energy", category: "Consulting" },
    { name: "EduBridge SA", category: "Web Development" },
    { name: "SmartLogix", category: "App Development" },
    { name: "CareConnect", category: "UX Design" }
  ];

  const currentProjects = [
    { name: "RoadSide Assist", position: { top: '10%', left: '50%' } },
    { name: "Feela", position: { top: '25%', left: '80%' } },
    { name: "BuildPartner", position: { top: '75%', left: '80%' } },
    { name: "TravelSA", position: { top: '90%', left: '50%' } },
    { name: "CareerLaunch", position: { top: '75%', left: '20%' } },
    { name: "Smart-Schools", position: { top: '25%', left: '20%' } },
    { name: "Rapid247", position: { top: '50%', left: '10%' } },
    { name: "Save-the-Baby", position: { top: '50%', left: '90%' } }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-page"
    >
      {/* Hero */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1>Our Projects</h1>
            <p>From brand revolutions to app ecosystems, every project we touch is built with precision, empathy, and purpose.</p>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Completed Projects</h2>
            <p>Successful collaborations that have transformed businesses</p>
          </div>

          <div className="projects-grid">
            {completedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="project-card"
              >
                <div className="project-icon">
                  <FiExternalLink />
                </div>
                <h3>{project.name}</h3>
                <span className="project-category">{project.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects Map */}
      <section className="section projects-map-section">
        <div className="container">
          <div className="section-header">
            <h2>Current Projects</h2>
            <p>Innovative solutions in development across Africa</p>
          </div>

          <div className="projects-map">
            <div className="map-center">
              <FiMapPin />
              <span>UnLimited Konsulting</span>
            </div>
            
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                className="map-node"
                style={project.position}
              >
                {project.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section showcase-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="showcase-content"
          >
            <h2>Featured Project: Save-the-Baby</h2>
            <div className="showcase-details">
              <div className="detail">
                <h4>Challenge</h4>
                <p>Developing a platform to support maternal and child healthcare in underserved communities.</p>
              </div>
              <div className="detail">
                <h4>Solution</h4>
                <p>A comprehensive mobile application with health tracking, emergency alerts, and educational resources.</p>
              </div>
              <div className="detail">
                <h4>Impact</h4>
                <p>Improved healthcare access for thousands of families across multiple African countries.</p>
              </div>
            </div>
          </motion.div>
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
            <h2>Have a Project in Mind?</h2>
            <p>Let's collaborate to bring your vision to life with innovative digital solutions.</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .projects-page {
          padding-top: 80px;
        }

        .projects-hero {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #d4af37, #ffd700);
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
        }

        .project-card:hover::before {
          transform: translateY(0);
        }

        .project-icon {
          font-size: 2.5rem;
          color: #d4af37;
          margin-bottom: 20px;
        }

        .project-card h3 {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .project-category {
          color: #d4af37;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 5px 15px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 20px;
          display: inline-block;
        }

        .projects-map-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .projects-map {
          position: relative;
          height: 600px;
          background: rgba(0, 31, 63, 0.2);
          border-radius: 20px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          overflow: hidden;
          margin: 0 auto;
          max-width: 1000px;
        }

        .map-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #d4af37;
          color: #001f3f;
          padding: 20px 30px;
          border-radius: 50px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }

        .map-center svg {
          font-size: 1.5rem;
        }

        .map-node {
          position: absolute;
          background: rgba(0, 0, 0, 0.8);
          color: #ffffff;
          padding: 15px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #d4af37;
          z-index: 1;
          text-align: center;
          min-width: 120px;
        }

        .map-node:hover {
          background: #d4af37;
          color: #001f3f;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .showcase-section {
          padding: 100px 0;
        }

        .showcase-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .showcase-content h2 {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .showcase-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: left;
        }

        @media (max-width: 992px) {
          .showcase-details {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }
        }

        .detail h4 {
          color: #d4af37;
          font-size: 1.3rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .detail p {
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
          
          .projects-map {
            height: 400px;
          }
          
          .map-node {
            padding: 10px 15px;
            font-size: 0.9rem;
            min-width: 100px;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .projects-map {
            height: 300px;
          }
          
          .map-center {
            padding: 15px 20px;
            font-size: 0.9rem;
          }
          
          .map-node {
            padding: 8px 12px;
            font-size: 0.8rem;
            min-width: 80px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;
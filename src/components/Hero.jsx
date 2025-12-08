import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <h1><span>Powering</span> Possibilities!</h1>
      <img 
        src="/images/consult.jpg" 
        alt="Futuristic digital landscape" 
        className="hero-image"
      />
      <div className="hero-content">
        <p>Empowering enterprises with transformative digital tools and visionary strategies that ignite growth, refine identity, and establish lasting success.</p>
      </div>
      <div className="action-buttons">
        <a href="services.html" className="action-button">Explore Our Services</a>
        <a href="contact.html" className="action-button">Get Support Now</a>
      </div>
    </section>
  );
};

export default Hero;
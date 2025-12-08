import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    businesses: 0
  });

  useEffect(() => {
    const targets = {
      projects: 198,
      clients: 95,
      businesses: 90
    };

    const duration = 2000; // 2 seconds
    const steps = 100; // Number of steps
    const interval = duration / steps;

    const timers = {};
    
    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      timers[key] = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timers[key]);
        }
        
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, interval);
    });

    return () => {
      Object.values(timers).forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <section className="stats-section">
      <h2>Impact in Numbers</h2>
      <p>We measure success by the lives we touch and the businesses we transform.</p>
      <div className="stats-grid">
        <div className="stat-box">
          <span>{counts.projects}</span>
          Projects Completed
        </div>
        <div className="stat-box">
          <span>{counts.clients}</span>
          Clients Served
        </div>
        <div className="stat-box">
          <span>{counts.businesses}</span>
          Businesses Developed
        </div>
      </div>
    </section>
  );
};

export default Stats;
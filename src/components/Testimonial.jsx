import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "UnLimited Konsulting helped us redefine our brand and triple our engagement.",
      author: "Thabo Mokoena, CEO, RiseTech Solutions"
    },
    {
      quote: "Their strategic insight and emotional UX transformed our platform.",
      author: "Lerato Ndlovu, Founder, YouthLink Africa"
    },
    {
      quote: "Professional, visionary, and deeply invested in our success.",
      author: "Sipho Dlamini, Director, GreenCore Energy"
    },
    {
      quote: "We launched faster and smarter thanks to their agile development.",
      author: "Zanele Khumalo, COO, EduBridge SA"
    },
    {
      quote: "UnLimited Konsulting helped us scale our operations with confidence and clarity.",
      author: "Themba Nkosi, Managing Director, SmartLogix"
    },
    {
      quote: "Their emotionally intelligent design made our users feel truly seen.",
      author: "Ayanda Mthembu, UX Lead, CareConnect"
    },
    {
      quote: "From concept to launch, their team was strategic, responsive, and visionary.",
      author: "Kabelo Mokoena, Co-Founder, FinEdge"
    },
    {
      quote: "UnLimited Konsulting is more than a service provider—they're a growth partner.",
      author: "Naledi Mokoena, Head of Strategy, UrbanRise"
    },
    {
      quote: "We've never felt more supported in our digital transformation journey.",
      author: "Bongani Sithole, CTO, HealthBridge Africa"
    },
    {
      quote: "They brought our vision to life with elegance and precision.",
      author: "Refilwe Molefe, Creative Director, NovaBrands"
    },
    {
      quote: "UnLimited Konsulting helped us build trust with our audience through design.",
      author: "Lindiwe Zulu, Communications Manager, CivicTech SA"
    },
    {
      quote: "Their team understands the emotional side of user experience like no other.",
      author: "Mpho Khumalo, Founder, EmpathyWorks"
    }
  ];

  return (
    <>
      <section className="testimonial-heading">
        <h2>What Our Partners Say</h2>
      </section>
      <section className="testimonial-scroll">
        <div className="testimonial-row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              "{testimonial.quote}"<br />
              <strong>— {testimonial.author}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Faq from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <HowItWorks />
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <Testimonials />
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <FinalCTA />
    </>
  );
};

export default HomePage;
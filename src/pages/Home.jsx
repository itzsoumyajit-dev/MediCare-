import React from 'react';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import Stats from '../components/Stats';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <main>
      <ScrollReveal direction="none" duration={0.8} style={{ position: 'relative', zIndex: 30 }}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1} style={{ position: 'relative', zIndex: 1 }}>
        <Specialties />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2} style={{ position: 'relative', zIndex: 1 }}>
        <Stats />
      </ScrollReveal>
    </main>
  );
};

export default Home;

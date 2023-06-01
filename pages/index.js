import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Alert from '../components/alert';
import '../styles/styles.css';

function Home() {
  return (
    <div className='full-screen'>
      <Header />
      <Alert/>
      <HeroSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className={`hero section`} id="hero">
      <h2 className={`slide-right ${isAnimated ? 'slide-in' : ''}`}>
        Unlocking Web Solutions for Small Businesses and Beyond.
      </h2>
      <div>
        <img
          alt={`hero img`}
          className={`hero__img slide-left ${isAnimated ? 'slide-in' : ''}`}
          src="../img/people/richard-guilliams.png"
        />
        <div className={`hero__img slide-up ${isAnimated ? 'slide-in' : ''}`}>
          <p>
            Hello, I'm Richard, a dedicated software developer offering freelance contract services.
            With Proficiency in JavaScript, React, Express, and Node.js, I specialize in building
            powerful websites for small businesses and contributing to larger projects.
          </p>
          <a className="button_2" href="/contact">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        <Image
          width={100}
          height={100}
          alt={`hero img`}
          className={`hero__img slide-left ${isAnimated ? 'slide-in' : ''}`}
          src="/img/people/richard-guilliams.png"
        />
        <div className={`hero__img slide-up ${isAnimated ? 'slide-in' : ''}`}>
          <p>
            Hello, I&apos;m Richard, a dedicated software developer offering freelance contract services.
            With Proficiency in JavaScript, React, Express, and Node.js, I specialize in building
            powerful websites for small businesses and contributing to larger projects.
          </p>
          <Link className="button_2" href="/contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
 
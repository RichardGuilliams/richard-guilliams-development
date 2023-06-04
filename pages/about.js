import React, { useState, useEffect} from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.css';

function About(){
    return(
        <div>
            <Header/>
            <AboutSection/>
            <Footer/>
        </div>
    )
}


function AboutSection({ isActive }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return(
    <div className={`section section__extra-margin slide-up ${isAnimated ? 'slide-in' : ''}`} id="about">
      <div>
        <h2>About Me</h2>
        <p>Hello, I&apos;m Richard, a web developer with a deep passion for gaming, music, and movies. I have honed my programming skills through various platforms such as Udemy, YouTube, and resources like W3Schools and Stack Overflow. My dream is to earn my living working from home, using the skills I have gained to advance my career while enjoying the freedom of working remotely.</p>
        <p>My passion for gaming led me to becoming interested in programming because deep down I&apos;ve always wanted to make games for the world to play. Already owning a copy of RPG Maker, I took up online Javascript classes and through those my love for web development grew as well.</p>
      </div>
    </div>
  )
}

export default About;
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles.css';

function Skills(){
  const [isAnimated, setIsAnimated] = useState(false);
  const animatedClass = isAnimated ? 'slide-in' : ''

  useEffect(() => {
    setIsAnimated(true);
  }, []);

    return(
        <div>
            <Header/>
            <SkillsSection animatedClass={animatedClass}/>
            <Footer/>
        </div>
    )
}

function SkillsSection({animatedClass}){
  return(
    <div className="section section__extra-margin skills">
      <h2 className={`slide-down ${animatedClass}`}>My Skills</h2>
      <ul className={`skill-container`}>
        <li className={`card card-skill slide-right ${animatedClass}`}>
          <div>
            <Image alt='Nodejs' width={100} height={60} src={`/img/nodejs.png`}/>
            <h3 className={`skill-title`}>NodeJS</h3>
          </div>
          <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
        </li>
        <li className={`card card-skill slide-left ${animatedClass}`}>
          <div>
            <Image alt='HTML, CSS and JS' width={100} height={60} src={`/img/html-css-js.png`}/>
            <h3 className={`skill-title`}>HTML, CSS and JS</h3>
          </div>
          <p>With HTML, CSS and Javascript I can build out responsive and functional web pages.</p>
        </li>
        <li className={`card card-skill slide-right ${animatedClass}`}>
          <div>
            <Image  alt='MongoDB' width={100} height={60} src={`/img/mongodb.png`}/>
            <h3 className={`skill-title`}>MongoDB</h3>
          </div>
          <p>MongoDB let&apos;s me dive into database creation to build powerful business solutions.</p>
        </li>
        <li className={`card card-skill slide-left ${animatedClass}`}>
          <div>
            <Image  alt='React' width={100} height={60} src={`/img/react.png`}/>
            <h3 className={`skill-title`}>React</h3>
          </div>
          <p>React lets me easily write reusable front-end components that make my life way easier</p>
        </li>
        <li className={`card card-skill slide-right ${animatedClass}`}>
          <div>
            <Image alt='Postman' width={100} height={60} src={`/img/postman.png`}/>
            <h3 className={`skill-title`}>Postman</h3>
          </div>
          <p>Postman lets me build, test and write documentation for all my API needs with ease.</p>
        </li>
        <li className={`card card-skill slide-right ${animatedClass}`}>
          <div>
            <Image alt='Express' width={100} height={60} src={`/img/express.png`}/>
            <h3 className={`skill-title`}>Express</h3>
          </div>
          <p>Express lets me build powerful web applications with secure routing, user authentication and handling of sensitive data.</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills
  
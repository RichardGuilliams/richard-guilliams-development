import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/header'
import Footer from '../components/footer'
import SVG from '../components/SVG'
import '../styles/styles.css';


function Projects() {
    const [isAnimated, setIsAnimated] = useState(false);
    const animatedClass = isAnimated ? 'slide-in' : ''
  
    useEffect(() => {
      setIsAnimated(true);
    }, []);

    return(
        <div className="full-screen">
        <Header/>
        <Skills animatedClass={animatedClass}/>
        <ProjectsSection animatedClass={animatedClass}/>
        <Footer/>
      </div>
    )
  }


function ProjectsSection({ animatedClass }) {  
    return(
        <div className={`section slide-right ${animatedClass}`} id="portfolio">
            <h2>Projects</h2>
            <p>Below is a small list of projects I built through my Udemy courses. I have a few more projects in development that will be added over the next few months.</p>
            <ul>
                <li className="portfolio__card">
                    <div>
                        <div>
                          <h3>Forkify</h3>
                          <Image width={100} height={100} alt={`forkify img`} src="/img/portfolio-projects/forkify.png"/>
                          <p>This was the first big project I completed in Jonas Schmedtmann&apos;s Javascript course. It makes calls to a recipe API to Get and Post recipe data.</p>
                          <p>The part I found most interesting about this project was learning how to update specific parts of the dom without the need for a page reload.</p>  
                          <a className="button_2" href="https://forkify-richardguilliams.netlify.app/">View App</a>
                        </div>  
                    </div>
                    <a className='portfolio__card-link' href="https://github.com/RichardGuilliams/Forkify">View Source Code</a>  
                </li>
                <li className="portfolio__card">
                    <div>
                        <div>
                          <h3>Natours</h3>
                          <Image width={100} height={100} alt={`natours img`} src="/img/portfolio-projects/natours.png"/>
                          <p>This project was built using Express and MongoDB. It allows payment processing through stripe which was tricky to implement do to depreciation of certain properties in the stripe webhook connection.</p>
                          <a className="button_2" href="https://mighty-oasis-83517.herokuapp.com/">View App</a>
                        </div>
                    </div>
                    <a className='portfolio__card-link' href="https://github.com/RichardGuilliams/natours">View Source Code</a>  
                </li>
            </ul>
        </div>

    )
}

function Skills({animatedClass}){
    return(
      <div className="section section__extra-margin skills">
        <h2 className={`slide-down ${animatedClass}`}>My Skills</h2>
        <ul className={`skill-container`}>
          <li className={`card card-skill slide-right ${animatedClass}`}>
            <div>
              <Image width={100} height={60} src={`/img/nodejs.png`}/>
              <h3 className={`skill-title`}>NodeJS</h3>
            </div>
              <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
          </li>
          <li className={`card card-skill slide-left ${animatedClass}`}>
            <div>
              <Image width={100} height={60} src={`/img/html-css-js.png`}/>
              <h3 className={`skill-title`}>HTML, CSS and JS</h3>
            </div>
              <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
          </li>
          <li className={`card card-skill slide-right ${animatedClass}`}>
            <div>
              <Image width={100} height={60} src={`/img/mongodb.png`}/>
              <h3 className={`skill-title`}>MongoDB</h3>
            </div>
              <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
          </li>
          <li className={`card card-skill slide-left ${animatedClass}`}>
            <div>
              <Image width={100} height={60} src={`/img/react.png`}/>
              <h3 className={`skill-title`}>React</h3>
            </div>
              <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
          </li>
          <li className={`card card-skill slide-right ${animatedClass}`}>
            <div>
              <Image width={100} height={60} src={`/img/postman.png`}/>
              <h3 className={`skill-title`}>Postman</h3>
            </div>
              <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
          </li>
          <li className={`card card-skill slide-right ${animatedClass}`}>
            <div>
              <Image width={100} height={60} src={`/img/express.png`}/>
              <h3 className={`skill-title`}>Express</h3>
            </div>
              <p>NodeJS allows me to step out of the browser and run Javascript on the backend.</p>
          </li>
        </ul>
      </div>
    )
  }
  
  

  export default Projects;
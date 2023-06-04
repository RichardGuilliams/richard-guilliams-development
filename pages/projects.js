import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/header'
import Footer from '../components/footer'
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
                        <Image width={1200} height={1200} alt={`forkify img`} src="/img/portfolio-projects/forkify.png"/>
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
                        <Image width={1200} height={1200} alt={`natours img`} src="/img/portfolio-projects/natours.png"/>
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

  export default Projects;
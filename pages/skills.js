import React, { useState, useEffect } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.css';

function Skills(){
    return(
        <div>
            <Header/>
            <SkillsSection/>
            <Footer/>
        </div>
    )
}

function SkillsSection({ isActive }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

    return(
      <div className={`section section__extra-margin slide-down ${isAnimated ? 'slide-in' : ''}`} id="skills">
        <h2>My Skills</h2>
        <ul>
          <li>
            <h3>Javascript</h3>
            <p>With my expertise in JavaScript, I can create dynamic and interactive web applications. I leverage the power of this versatile language to enhance user experiences, handle client-side validations, and implement complex functionality on the frontend.</p>
          </li>
          <li>
            <h3>HTML</h3>
            <p>Proficient in HTML, I possess the ability to structure web content effectively. I use semantic markup to ensure accessibility, readability, and search engine optimization. Crafting clean and well-organized HTML code is my priority to deliver exceptional user experiences.</p>
          </li>
          <li>
            <h3>CSS</h3>
            <p>Mastery of CSS allows me to bring life to web applications by designing visually appealing interfaces. I utilize CSS to create responsive layouts, style elements, and ensure consistent branding. By leveraging the latest CSS techniques, I can provide engaging and seamless user interfaces across different devices.</p>
          </li>
          <li>
            <h3>Express</h3>
            <p>With my expertise in Express, a powerful Node.js framework, I can build robust and scalable backend systems. I utilize Express to handle routing, manage requests and responses, and develop efficient APIs. This enables me to create seamless communication between the frontend and backend, delivering high-performing web applications.</p>      
          </li>
          <li>
            <h3>React</h3>
            <p>As a skilled React developer, I specialize in creating powerful and dynamic user interfaces. Leveraging the flexibility and reusability of React components, I can build interactive and responsive web applications that provide seamless user experiences. With React&apos;s virtual DOM and efficient rendering, I ensure optimal performance and scalability. Whether it&apos;s building complex frontend functionalities or integrating with backend systems, my expertise in React enables me to create visually stunning and highly functional applications that engage users and drive results.</p>
          </li>
          <li>    
            <h3>MongoDB</h3>
            <p>Proficient in MongoDB, a popular NoSQL database, I can efficiently handle data storage and management for web applications. I leverage MongoDB&apos;s flexibility to design database structures that adapt to evolving needs. By utilizing its querying capabilities, I can ensure efficient data retrieval and storage, enhancing overall application performance.</p>
          </li>
        </ul>
      </div>
    )
}

export default Skills
  
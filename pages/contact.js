import React, { useState, useEffect } from 'react';
import ContactForm from '../components/contactForm';
import Header from '../components/header'
import Footer from '../components/footer'
import Alert from '../components/alert';
import '../styles/styles.css';


function Contact(){
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  
  const displayAlert = (status) => {
    setAlertStatus(status);
    setShowAlert(true);
    setTimeout(function(){
      setShowAlert(false);
    }, 3000);
  }

  return(
    <div>
      {showAlert && <Alert status={alertStatus} />}
      <Header/>
      <ContactSection displayAlert={displayAlert}/>
      <Footer/>
    </div>
  )
}

function ContactSection({displayAlert}){
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  
  return( 
    <div className={`section section__extra-margin slide-down ${isAnimated ? 'slide-in' : ''}`} id="contact">
        <h2>Ready to Boost Your Online Presence?</h2>
        <p>Get in touch with me and take your digital success to new heights. Whether you&apos;re a small business seeking a captivating website or a larger project requiring the expertise of a skilled JavaScript developer, I&apos;ve got you covered. Let&apos;s collaborate and transform your ideas into reality. Click the button below to get started!</p>
        <ContactForm displayAlert={displayAlert}/>
    </div>
  )
} 
  
export default Contact;
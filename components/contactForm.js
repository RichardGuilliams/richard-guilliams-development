import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactForm = ({displayAlert}) => {

    const form = useRef();

    const sendEmail = function(e) {
      e.preventDefault();
  
      emailjs.sendForm(`service_r19ow5a`, `template_i4htqjf`, form.current, `taGd6VV8u3qghQ1WT`)
        .then((result) => {
            displayAlert('success');
            console.log (result.text);
        }, (error) => {
            displayAlert('error');
            console.log(error.text);
        });
    };
  
    return(
        <form ref={form} onSubmit={sendEmail} id="contact__form">
            <div className="form__group">
                <label for="firstName">First Name:</label>
                <input required id="firstName" name="firstName" type="text" placeholder="Enter your first name..."></input>
            </div>
            <div className='form__group'>
                <label for="lastName">Last Name:</label>
                <input required id="lastName" name="lastName" type="text" placeholder="Enter your last name..."></input>
            </div>
            <div className="form__group">
                <label for="email">Email:</label>
                <input required type="email" id="email" name="email" placeholder="Enter your first name..."></input>
            </div>
            <div className='form__group'>
                <label for="businessName">Business Name:</label>
                <input required id="businessName" name="businessName" type="text" placeholder="Enter your business name..."></input>
            </div>
            <div className='form__group'>
                <label for="websiteUrl">Business Name:</label>
                <input id="websiteUrl" name="websiteUrl" type="text" placeholder="Enter your websites url if you have one..."></input>
            </div>
            <div className='form__group'>
                <label for="service">Service:</label>
                <ServiceEnum/>  
            </div>
            <div className='form__group'>
                <label className="message__label" id="message-label" for="message">Message:</label>
                <textarea required placeholder='Enter a brief message describing the details of the project or service you wish to inquire about...' id="message" name="message" rows="4" cols="50"/>  
            </div>
            <button type={`submit`}>Submit</button>       
        </form>
    )
}


function ServiceEnum() {
    return(
      <select name="service" id="service">
        <option value="Website Development">Website Development</option>
        <option value="Front-End Development">Front-End Development</option>
        <option value="Back-End Development">Back-End Development</option>
        <option value="Maintenance and Support">Maintenance and Support</option>
      </select>
    )
  }


export default ContactForm;
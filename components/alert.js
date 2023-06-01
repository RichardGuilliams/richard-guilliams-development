import React from 'react';
import '../styles/styles.css';

function Alert({status}){
    let title, message, className;
    if(status === 'success'){
        title = 'Success!';
        message = 'Your email was successfully sent!';
        className = 'alert alert-success';
    } else if(status === 'error'){
        title = 'Error!';
        message = 'Something went wrong finding your email. Please try again!';
        className = 'alert alert-error';
    }
    return(
        <div className={className}>
            <h2 className={`alert-heading`}>{title}</h2>
            <p className={`alert-message`}>{message}</p>
        </div>
    )
}

export default Alert;
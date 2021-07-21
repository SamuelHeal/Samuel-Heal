import React, { useState } from 'react'
import './contact.css'

function Contact() {
    
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    const validateEmail = (event) => {
        const email = event.target.value;
        if (email !== '') {
            if (emailRegex.test(email)) {
                setIsValid(true);
                setMessage('Your email looks good!');
              } else {
                setIsValid(false);
                setMessage('Please enter a valid email!');
              }
        } else {
            setIsValid(false);
            setMessage('')
        }
        
      };

    const handleSubmit = () => {
        alert('Form is currently out of service, please contact me via phone, email or social media :)')
        document.getElementById("form").reset();
        setIsValid(false);
        setMessage('')

    }
    
    
    
    return (
        <div className='contactContainer'>
            <div id='contact'></div>
            <div className='contactHeading'>
                Contact Me
            </div>
            <div className='contactPara'>
                <p>Contact me via Phone or Email..</p>
                <div className='contactOptions'>
                    <p>Phone: 0408-446-220</p>
                    <p>Email: <a href="mailto:samuelheal@hotmail.com">samuelheal@hotmail.com</a></p>
                </div>
                <p className='bigScreen'>Reach me via social media using the icons displayed on the bottom left of the page...</p>
                <p className='smallScreen'>Reach me via social media using the icons displayed on the bottom of the page...</p>
                <p>Or send me a message using the form below:</p>
            </div>
            <div className='formContainer'>
                <div className={`message ${isValid ? 'success messagePos' : 'error messagePos'}`}>
                    {message}
                </div>
                <form id="form" className="topBefore" onSubmit={handleSubmit}>
                    <input id="name" type="text" placeholder="NAME" required></input>
                    <input id="email" type="email" placeholder="E-MAIL" onChange={validateEmail} required></input>
                    <textarea id="message" type="text" placeholder="MESSAGE - (form is currently out of service, please contact me via phone, email or social media)" required></textarea>
                    <input id="submit" type="submit" value="Send"></input>
                </form>
                
            </div>
            
        </div>
    )
}

export default Contact

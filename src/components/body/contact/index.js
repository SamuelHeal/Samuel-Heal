import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className='contactContainer'>
            <div className='contactHeading'>
                Contact Me
            </div>
            <div className='contactPara'>
                <p>Contact me via Phone or Email</p>
                <div className='contactOptions'>
                    <p>Phone: 0408-446-220</p>
                    <p>Email: <a href="mailto:samuelheal@hotmail.com">samuelheal@hotmail.com</a></p>
                </div>
                <p>Or send me a message using the form below</p>
            </div>
            <div className='formContainer'>
                <form id="form" className="topBefore">
                    <input id="name" type="text" placeholder="NAME"></input>
                    <input id="email" type="text" placeholder="E-MAIL"></input>
                    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                    <input id="submit" type="submit" value="Send"></input>
                </form>
            </div>
            
        </div>
    )
}

export default Contact

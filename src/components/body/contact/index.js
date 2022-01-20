import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    };

    emailjs
      .send(
        'service_57hb761',
        'template_bpvfgas',
        templateParams,
        'user_iGchWIF5DR4AeNFgxVcMb'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setMessage(
            'Form has been sent successfully, I will get back to you as soon as possible!'
          );
        },
        function (error) {
          console.log('FAILED...', error);
          setMessage(
            'Your form was unable to be sent, please contact me using one of the other methods above :)'
          );
        }
      );

    setFormState({
      name: '',
      email: '',
      message: '',
    });
    setIsValid(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChangeEmail = (event) => {
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
      setMessage('');
    }
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='contactContainer'>
      <div id='contact'></div>
      <div className='contactHeading'>Contact Me</div>
      <div className='contactPara'>
        <p>Contact me via Phone or Email..</p>
        <div className='contactOptions'>
          <p>Phone: 0408-446-220</p>
          <p>
            Email:{' '}
            <a href='mailto:samuelheal@hotmail.com'>samuelheal@hotmail.com</a>
          </p>
        </div>
        <p className='bigScreen'>
          Reach me via social media using the icons displayed on the bottom left
          of the page...
        </p>
        <p className='smallScreen'>
          Reach me via social media using the icons displayed on the bottom of
          the page...
        </p>
        <p>Or send me a message using the form below:</p>
      </div>
      <div className='formContainer'>
        <div
          className={`message ${
            isValid ? 'success messagePos' : 'error messagePos'
          }`}
        >
          {message}
        </div>
        <form id='form' className='topBefore' onSubmit={handleSubmit}>
          <input
            id='name'
            type='text'
            placeholder='NAME'
            name='name'
            value={formState.name}
            onChange={handleChange}
            required
          ></input>
          <input
            id='email'
            type='email'
            placeholder='E-MAIL'
            name='email'
            value={formState.email}
            onChange={handleChangeEmail}
            required
          ></input>
          <textarea
            id='message'
            type='text'
            placeholder='MESSAGE'
            name='message'
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <input id='submit' type='submit' value='Send'></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;

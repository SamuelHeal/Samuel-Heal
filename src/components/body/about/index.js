import React from 'react';
import './about.css';
import samPic from './sam-pic.jpeg';
import resume from '../../../files/Developer Resume.pdf';

function About() {
  return (
    <div className='aboutContainer'>
      <div id='about'></div>
      <div className='aboutHeading'>About</div>
      <div className='aboutContentContainer'>
        <div className='aboutPara'>
          My name is Samuel Heal, a Full-Stack web developer who has recently
          earned a certificate in this field for the completion of the Coding
          Bootcamp hosted by Trilogy Education and the University of Sydney.
          Here, I have learnt the necessary skills required to become a
          competent Full-Stack Web Developer. I am a coding fanatic who is
          constantly seeking new ways to grow and thrive within this industry. I
          place my focus on building projects that I believe can make people’s
          lives even slightly easier. My latest project, aDevelopersFriend, is
          designed for web developers in need of a place to easily store their
          code. Built using the MERN framework, It is capable of creating
          projects that can store the folders, front-end files and back-end
          files that allow users to replicate entire project file structures if
          they need. Check it out in my projects section below!
          <div className='btnContainer'>
            <a
              className='waterBox'
              href={resume}
              target='_blank'
              rel='noreferrer'
            >
              <span className='waterText'>Resume</span>
              <div className='water'></div>
            </a>
          </div>
        </div>
        <div className='picContainer'>
          <img className='aboutPic' src={samPic} alt='Sam'></img>
        </div>

        <div id='skills'></div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div className='skillsContainer'>
      <div className='skillsHeading'>Skills</div>
      <div className='allSkills'>
        <div className='skillTypeContainer'>
          <div className='skillTypeHeading'>
            <p>Languages</p>
          </div>
          <div className='skillNames'>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>mySQL</p>
            <p>graphQL</p>
            <p>Python</p>
          </div>
        </div>
        <div className='skillTypeContainer'>
          <div className='skillTypeHeading'>
            <p>Technologies</p>
          </div>
          <div className='skillNames'>
            <p>Bootstrap</p>
            <p>JQuery</p>
            <p>Node.js</p>
            <p>Sequalize</p>
            <p>Express.js</p>
            <p>Handlebars.js</p>
            <p>mongoDB</p>
            <p>React.js</p>
            <p>Anime.js</p>
            <p>noSQL</p>
          </div>
        </div>

        <div className='skillTypeContainer'>
          <div className='skillTypeHeading'>
            <p>Development Frameworks</p>
          </div>
          <div className='skillNames'>
            <p>Model-View-Controller Paradigm</p>
            <p>MERN-Stack</p>
          </div>
        </div>
      </div>
      <div id='projects'></div>
    </div>
  );
}

export default Skills;

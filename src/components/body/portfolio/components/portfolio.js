import React from 'react';
import gymClub from '../images/gymClub.png';
import workoutTracker from '../images/workoutTracker.png';
import aDevelopersFriend from '../images/aDevelopersFriend.png';
import techBlog from '../images/techBlog.png';
import employeeTracker from '../images/employeeTracker.png';
import budgetTracker from '../images/budgetTracker.png';

function Project(props) {
  const renderImg = () => {
    if (props.props.image === 'aDevelopersFriend') {
      return (
        <img className='img' src={aDevelopersFriend} alt='aDevelopersFriend' />
      );
    }
    if (props.props.image === 'gymClub') {
      return <img className='img' src={gymClub} alt='Gym Club' />;
    }
    if (props.props.image === 'workoutTracker') {
      return <img className='img' src={workoutTracker} alt='Workout Tracker' />;
    }
    if (props.props.image === 'techBlog') {
      return <img className='img' src={techBlog} alt='Tech Blog' />;
    }
    if (props.props.image === 'employeeTracker') {
      return (
        <img className='img' src={employeeTracker} alt='Employee Tracker' />
      );
    }
    if (props.props.image === 'budgetTracker') {
      return <img className='img' src={budgetTracker} alt='Budget Tracker' />;
    }
  };

  const renderWebsites = () => {
    if (props.props.website !== '') {
      return (
        <div className='linkContainer'>
          <a
            href={props.props.github}
            target='_blank'
            rel='noreferrer'
            className='projGit'
          >
            Github
          </a>
          <a
            href={props.props.website}
            target='_blank'
            rel='noreferrer'
            className='projGit'
          >
            Website
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a
            href={props.props.github}
            target='_blank'
            rel='noreferrer'
            className='projGit'
          >
            Github
          </a>
        </div>
      );
    }
  };
  return (
    <div className='projContainer'>
      <div className='projInfoContainer'>
        <h2>{props.props.name}</h2>
        <p className='projCat'>{props.props.type}</p>
        <p className='projSpec'>
          <span>Languages:</span>
          <br />
          <br />
          {props.props.languages}
          <br />
        </p>
        {renderWebsites()}
      </div>
      {renderImg()}
    </div>
  );
}

export default Project;

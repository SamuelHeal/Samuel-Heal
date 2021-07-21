import React from 'react'
import './portfolio.css'
import Project from './components/portfolio'

const gymClubProps = {
    name: 'Gym Club',
    type: 'Full-Stack',
    languages: 'HTML - CSS - Javascript - mySQL - Handlebars.js',
    website: 'https://gym-club-group-project.herokuapp.com/',
    github: 'https://github.com/SamuelHeal/gym-club',
    image: 'gymClub'
}

const budgetTrackerProps = {
    name: 'Budget Tracker',
    type: 'Full-Stack',
    languages: 'HTML - CSS - Javascript - MongoDB',
    website: 'https://budgettracker-130721.herokuapp.com/',
    github: 'https://github.com/SamuelHeal/Budget-Tracker',
    image: 'budgetTracker'
}

const workoutTrackerProps = {
    name: 'Fitness Tracker',
    type: 'Full-Stack',
    languages: 'HTML - CSS - Javascript - MongoDB',
    website: 'https://workout-tracker-20210706.herokuapp.com/',
    github: 'https://github.com/SamuelHeal/workout-tracker',
    image: 'workoutTracker'
}

const techBlogProps = {
    name: 'Tech Blog',
    type: 'Full-Stack',
    languages: 'HTML - CSS - Javascript - mySQL',
    website: 'https://lit-mesa-19708.herokuapp.com/',
    github: 'https://github.com/SamuelHeal/Tech-Blog',
    image: 'techBlog'
}

const employeeTrackerProps = {
    name: 'Employee Manager',
    type: 'Back-End',
    languages: 'Javascript',
    website: '',
    github: 'https://github.com/SamuelHeal/Employee-Tracker',
    image: 'employeeTracker'
}

const reaCharityProps = {
    name: 'ReaCharity',
    type: 'Front-End',
    languages: 'HTML - CSS - Javascript',
    website: 'https://samuelheal.github.io/ReaCharity/',
    github: 'https://github.com/SamuelHeal/ReaCharity',
    image: 'reaCharity'
}

function Portfolio() {
    return (
        <div className='portfolioContainer'>
            <div id='projects'></div>
            <div className="projectsHeading">
                Projects
            </div>

            <div className='container'>
                <Project props={gymClubProps}/>
                <Project props={budgetTrackerProps}/>
                <Project props={workoutTrackerProps}/>
                <Project props={techBlogProps}/>
                <Project props={employeeTrackerProps}/>
                <Project props={reaCharityProps}/>
            </div>
            <div id='contact'></div>

            
        </div>
    )
}

export default Portfolio

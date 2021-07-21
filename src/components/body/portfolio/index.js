import React from 'react'
import './portfolio.css'
import gymClub from './images/gymClub.png'
import workoutTracker from './images/workoutTracker.png'
import reaCharity from './images/reacharity.png'
import techBlog from './images/techBlog.png'
import employeeTracker from './images/employeeTracker.png'
import budgetTracker from './images/budgetTracker.png'

function Portfolio() {
    return (
        <div className='portfolioContainer'>
            
            <div className="projectsHeading">
                Projects
            </div>

            <div className='container'>
                <div className="projContainer">
                    <div className="projInfoContainer">
                        <h2>Gym Club</h2>
                        <p className="projCat">Full-Stack</p>
                        <p className="projSpec"><span>Languages:</span><br /><br />HTML - CSS - Javascript - mySQL<br /></p>
                        <div className='linkContainer'>
                            <a href='https://github.com/SamuelHeal/gym-club' target='_blank' rel="noreferrer" className="projGit">Github</a>
                            <a href='https://gym-club-group-project.herokuapp.com/' target='_blank' rel="noreferrer" className="projGit">Website</a>
                        </div>
                    </div>
                    <img className='img' src={gymClub} alt='Gym Club'/>
                </div>
                <div className="projContainer">
                    <div className="projInfoContainer">
                        <h2>Budget Tracker</h2>
                        <p className="projCat">Full-Stack</p>
                        <p className="projSpec"><span>Languages:</span><br /><br />HTML - CSS - Javascript - MongoDB<br /></p>
                        <div className='linkContainer'>
                            <a href='https://github.com/SamuelHeal/Budget-Tracker' target='_blank' rel="noreferrer" className="projGit">Github</a>
                            <a href='https://budgettracker-130721.herokuapp.com/' target='_blank' rel="noreferrer" className="projGit">Website</a>
                        </div>
                    </div>
                    <img className='img' src={budgetTracker} alt='Budget Tracker'/>
                </div>
                <div className="projContainer">
                    <div className="projInfoContainer">
                        <h2>Fitness Tracker</h2>
                        <p className="projCat">Full-Stack</p>
                        <p className="projSpec"><span>Languages:</span><br /><br />HTML - CSS - Javascript - MongoDB<br /></p>
                        <div className='linkContainer'>
                            <a href='https://github.com/SamuelHeal/workout-tracker' target='_blank' rel="noreferrer" className="projGit">Github</a>
                            <a href='https://workout-tracker-20210706.herokuapp.com/' target='_blank' rel="noreferrer" className="projGit">Website</a>
                        </div>
                    </div>
                    <img className='img' src={workoutTracker} alt='Workout Tracker'/>
                </div>
                <div className="projContainer">
                    <div className="projInfoContainer">
                        <h2>Tech Blog</h2>
                        <p className="projCat">Full-Stack</p>
                        <p className="projSpec"><span>Languages:</span><br /><br />HTML - CSS - Javascript - mySQl<br /></p>
                        <div className='linkContainer'>
                            <a href='https://github.com/SamuelHeal/Tech-Blog' target='_blank' rel="noreferrer" className="projGit">Github</a>
                            <a href='https://lit-mesa-19708.herokuapp.com/' target='_blank' rel="noreferrer" className="projGit">Website</a>
                        </div>
                    </div>
                    <img className='img' src={techBlog} alt='Tech Blog'/>
                </div>
                <div className="projContainer">
                    <div className="projInfoContainer">
                        <h2>Employee Tracker</h2>
                        <p className="projCat">Back-End</p>
                        <p className="projSpec"><span>Languages:</span><br /><br />Javascript<br /></p>
                        <div className='linkContainer'>
                            <a href='https://github.com/SamuelHeal/Employee-Tracker' target='_blank' rel="noreferrer" className="projGit">Github</a>
                        </div>
                    </div>
                    <img className='img' src={employeeTracker} alt='Employee Tracker'/>
                </div>
                <div className="projContainer">
                    <div className="projInfoContainer">
                        <h2>ReaCharity</h2>
                        <p className="projCat">Front-End</p>
                        <p className="projSpec"><span>Languages:</span><br /><br />HTML - CSS - Javascript<br /></p>
                        <div className='linkContainer'>
                            <a href='https://github.com/SamuelHeal/ReaCharity' target='_blank' rel="noreferrer" className="projGit">Github</a>
                            <a href='https://samuelheal.github.io/ReaCharity/' target='_blank' rel="noreferrer" className="projGit">Website</a>
                        </div>
                    </div>
                    <img className='img' src={reaCharity} alt='ReaCharity'/>
                </div>
            </div>
            <div id='contact'></div>

            
        </div>
    )
}

export default Portfolio

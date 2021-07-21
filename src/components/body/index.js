import React from 'react'
import './body.css'
import Landing from './landing/index'
import About from './about/index'
import Portfolio from './portfolio/index'
import Contact from './contact/index'
import Skills from './skills/index'

function Body() {
    return (
        <div className='bodyContainer'>
            <div>
                <Landing />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <Contact />
            </div>
            
        </div>
    )
}

export default Body

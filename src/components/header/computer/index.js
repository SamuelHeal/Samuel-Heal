import React from 'react'
import './computer.css'
import resume from '../../../files/Developer Resume.pdf'


function ComputerHeader() {
    return (
        <div className='computer'>
            <div className='navOptions'>
                <a href='#about'>
                    <i className="fi-rr-id-badge navIcon"></i> About Me
                </a>
            </div>
            <div className='navOptions'>
                <a href='#skills'>
                    <i className="fi-rr-crown navIcon"></i> Skills
                </a>
            </div>
            <div className='navOptions'>
                <a href='#projects'>
                    <i className="fi-rr-briefcase navIcon"></i> Projects
                </a>
            </div>
            <div className='navOptions'>
                <a href='#contact'>
                    <i className="fi-rr-headset navIcon"></i> Contact
                </a>
            </div>
            <div className='navOptions'>
                <a href={resume} target='_blank' rel="noreferrer">
                    <i className="fi-rr-document navIcon"></i> Resume
                </a>
            </div>
        </div>
    )
}

export default ComputerHeader

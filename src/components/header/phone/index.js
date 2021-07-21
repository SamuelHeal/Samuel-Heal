import React from 'react'
import './phone.css'
import resume from '../../../files/Developer Resume.pdf'


function PhoneHeader({menuOpen, setMenuOpen}) {
    return (
        <div className='phone'>
            <div className='closeIcon' onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fi-rr-cross-circle"></i>       
            </div>
            <div className='menuOptions'>
                <div className='mobileOption'>
                    <a href='#about'>
                        <i className="fi-rr-id-badge navIcon"></i> About
                    </a>
                </div>
                <div className='mobileOption'>
                    <a href='#skills'>
                        <i className="fi-rr-crown navIcon"></i> Skills
                    </a>
                </div>
                <div className='mobileOption'>
                    <a href='#projects'>
                        <i className="fi-rr-briefcase navIcon"></i> Projects
                    </a>
                </div>
                <div className='mobileOption'>
                    <a href='#contact'>
                        <i className="fi-rr-headset navIcon"></i> Contact
                    </a>
                </div>
                <div className='mobileOption'>
                    <a href={resume} target='_blank' rel="noreferrer">
                        <i className="fi-rr-document navIcon"></i> Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PhoneHeader

import React from 'react'
import landingImage from './landing.png'
import './landing.css'

function Landing() {
    return (
        <div className='landingContainer'>
            <img className='landingImage' src={landingImage} alt='landingImage'></img>
        </div>
    )
}

export default Landing

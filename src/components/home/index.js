import React from 'react'
import './home.css'
import Header from '../header/index'
import Body from '../body/index'
import Footer from '../footer/index'
import { SocialIcon } from 'react-social-icons';
import AnimatedCursor from 'react-animated-cursor';

function Home() {
    return (
        <div className='homeContainer'>
            <div className="cursor">
                <AnimatedCursor
                innerSize={16}
                outerSize={12}
                color='195, 7, 63'
                outerAlpha={0.8}
                innerScale={1}
                outerScale={5}
                />
            </div>
            <div className='sticky1'>
                <div className='cover'></div>
                <Header />
            </div>
            <div className="sticky-container">
                <p>|</p>
                <div className="sticky">
                    <a href='https://github.com/SamuelHeal' target='_blank' rel="noreferrer" className='socialIcon'><SocialIcon network="github" bgColor="#6F2232" /></a>
                    <a href='https://www.facebook.com/profile.php?id=100008027059320' target='_blank' rel="noreferrer" className='socialIcon seperator'><SocialIcon network="facebook" bgColor="#6F2232" /></a>
                    <a href='https://www.linkedin.com/in/samuel-heal-374b92204/' target='_blank' rel="noreferrer" className='socialIcon'><SocialIcon network="linkedin" bgColor="#6F2232" /></a>
                </div>
                <p>|</p>

            </div>
            <div className='move'>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand-removebg-preview.png'
 import arrow from '../Assets/arrow.png'
import hero_img from '../Assets/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h3>
                    NEW ARRIVALS ONLY
                </h3>
                <div className="hero-hand-icon">
                    <p>New </p>
                    <img src={hand_icon} alt=""  />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            
            <div className="hero-latest-button">
                <div>
                    Latest Collection
                </div>
                <img src={arrow} alt="" />
            </div></div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero

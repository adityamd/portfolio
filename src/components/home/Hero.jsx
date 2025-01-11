import React from 'react'
import { home } from '../data/dummyData'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className="hero">
    {home.map((item, i) => (
        <div className="heroContent">
            <h3 data-aos='fade-right'>{item.text}</h3>
            <h1>
                <Typewriter options={{ strings: [item.name, item.post, item.design], autoStart: true, loop: true }} />
            </h1>
            <p data-aos='fade-left'>{item.desc}</p>
            <button className="primaryBtn" data-aos='fade-up'>Download CV</button>
        </div>    
        ))
    }
    </section>
  )
}

export default Hero
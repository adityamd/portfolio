import React, { useContext } from 'react'
import Typewriter from 'typewriter-effect'
import { FieldContext } from '../../context/FieldContext'

const Hero = () => {

  const { allFields } = useContext(FieldContext)
  const home = allFields.home

  return (
    <section className="hero">
    <div className="heroContent">
        <h3 data-aos='fade-right'>{home.text}</h3>
        <h1>
            <Typewriter options={{ strings: [home.name, home.post, home.design], autoStart: true, loop: true }} />
        </h1>
        <p className='desc' data-aos='fade-left'>{home.desc}</p>
    </div>    
    </section>
  )
}

export default Hero
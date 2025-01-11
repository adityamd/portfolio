import React from 'react'
import { about } from '../data/dummyData'
import Heading from '../common/Heading'

const About = () => {
  return (
    <section className="about">
        <div className="container flex">
              {
                about.map((item, i) => (
                    <>
                        <div className="left">
                            <img src={item.cover} alt="About me" data-aos='fade-down-right' />
                        </div>
                        <div className="right" data-aos='fade-down-right'>
                            <Heading title="About me" />
                            <h1>{item.desc}</h1>
                            <p>{item.desc1}</p>
                            <button >Download CV</button>
                            <button className="primaryBtn">Download CV</button>
                        </div>
                    </>
                ))
              }
        </div>
    </section>
  )
}

export default About
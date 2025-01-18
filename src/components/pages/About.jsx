import React, { useContext, useState, useEffect } from 'react'
import Heading from '../common/Heading'
import { FieldContext } from '../../context/FieldContext'
import axios from 'axios'

const About = () => {

  const { allFields, url } = useContext(FieldContext);
  const [imageUrl, setImageUrl] = useState('')
  const [cv, setCV] = useState('')
  const about = allFields.about

  const getFetchUrl = async() => {
    const res = await axios.get(url+'s3/url/get/' + encodeURIComponent('about.jpg'));
    setImageUrl(res.data)
  }
  

  const downloadCV = async() => {
    const res = await axios.get(url+'s3/url/get/' + encodeURIComponent('Aditya-Resume.pdf'));
    setCV(res.data);
  }

  useEffect(() => {
    getFetchUrl()
    downloadCV()
  }, [])

  return (
    <section className="about">
        <div className="container flex">
              <div className="left">
                  <img src={imageUrl} alt="About me" data-aos='fade-down-right' className='cover' />
              </div>
              <div className="right" data-aos='fade-down-right'>
                  <Heading title="About me" />
                  <h1>{about.desc}</h1>
                  <p>{about.desc1}</p>
                  <a href={cv} target='_blank'>
                    <button className='center'>Download CV</button>
                  </a>
              </div>
        </div>
    </section>
  )
}

export default About
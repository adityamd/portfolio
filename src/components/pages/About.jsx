import React, { useContext, useState, useEffect } from 'react'
import Heading from '../common/Heading'
import { FieldContext } from '../../context/FieldContext'
import axios from 'axios'

const About = () => {

  const { allFields, url } = useContext(FieldContext);
  const [imageUrl, setImageUrl] = useState('')
  const about = allFields.about

  const getFetchUrl = async() => {
    const res = await axios.get(url+'s3/url/get/' + encodeURIComponent('about.jpg'));
    setImageUrl(res.data)
  }

  useEffect(() => {
    getFetchUrl()
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
                  <button >Download CV</button>
                  <button className="primaryBtn">Download CV</button>
              </div>
        </div>
    </section>
  )
}

export default About
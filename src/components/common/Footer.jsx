import React from 'react'
import { social } from '../data/dummyData'

const Footer = () => {
  return (
    <footer>
        {
            social.map((item, i) => (
                <a href={item.link} key={i}>
                    <i className="cursor"  data-aos='zoom-in-left'>{item.icon}</i>
                </a>
            ))
        }
        <p data-aos='zoom-in-right'>All rights reserved 2025</p>
    </footer>
  )
}

export default Footer
import React, { useContext } from 'react'
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { FieldContext } from '../../context/FieldContext'

const Footer = () => {

  const { allFields } = useContext(FieldContext)
  const social = allFields.social

  return (
    <footer>
        <a href={social.facebook}>
            <i className="cursor"  data-aos='zoom-in-left'><Facebook /></i>
        </a>
        <a href={social.twitter}>
            <i className="cursor"  data-aos='zoom-in-left'><Twitter /></i>
        </a>
        <a href={social.instagram}>
            <i className="cursor"  data-aos='zoom-in-left'><Instagram /></i>
        </a>
        <a href={social.youtube}>
            <i className="cursor"  data-aos='zoom-in-left'><YouTube /></i>
        </a>
        <p data-aos='zoom-in-right'>All rights reserved 2025</p>
    </footer>
  )
}

export default Footer
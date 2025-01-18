import React, { useContext, useState, useEffect } from 'react'
import { FormatQuote } from '@mui/icons-material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FieldContext } from '../../context/FieldContext';
import axios from 'axios';

const Testimonials = () => {

    const { allFields, url } = useContext(FieldContext)
    const testimonials = allFields.testimonials
    const [images, setImages] = useState([])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const getCover = async (idx) => {
        const res = await axios.get(url+'s3/url/get/' + encodeURIComponent(`testimonials/team-${idx}.jpg`));
        return res.data
    }

    const populateCovers = async () => {
        let image = await testimonials.map(async (item, idx) => (
            await getCover(idx)
        ))
        image = await Promise.all(image)
        console.log(image)
        setImages(image)
    }

    useEffect(() => {
        populateCovers()
    }, [])

    return (
        <section className="testimonials hero">
            <div className="container">
                <Slider {...settings}>
                {
                    testimonials.map((item, i) => (
                        <div className="box" data-aos='zoom-out-up'>
                            <i>
                                <FormatQuote />
                            </i>
                            <p data-aos='zoom-out-down'>{item.text}</p>
                            <div className="img">
                                <img src={images[i]} alt="" data-aos='zoom-out-right' />
                            </div>
                            <h3 data-aos='zoom-out-left'>{item.name}</h3>
                            <label data-aos='zoom-out'>{item.post}</label>
                        </div>

                    ))
                }
                </Slider>
            </div>
        </section>
  )
}

export default Testimonials
import React, { useContext, useEffect, useState } from 'react'
import Heading from '../common/Heading'
import { FieldContext } from '../../context/FieldContext'
import axios from 'axios'

const Blog = () => {

    const { allFields, url } = useContext(FieldContext)
    const [covers, setCovers] = useState([])
    const blog = allFields.blogs

    const getCover = async (idx) => {
        const res = await axios.get(url+'/s3/url/get/' + encodeURIComponent(`blog/b${idx}.jpg`));
        return res.data
    }

    const populateCovers = async () => {
        let cover = await blog.map(async (item, idx) => (
            await getCover(idx)
        ))
        cover = await Promise.all(cover)
        console.log(cover)
        setCovers(cover)
    }

    useEffect(() => {
        populateCovers()
    }, [])

    return (
        <section className="blog">
            <div className="container">
                <Heading title="Blog" />
                <div className="container grid3">
                {
                    blog.map((item, idx) => (
                        <div className="box" data-aos='flip-left'>
                            <div className="img"  data-aos='flip-up'>
                                <img src={covers[idx]} alt=""  data-aos='flip-down' className='cover' />
                            </div>
                            <div className="text cursor">
                                <h3  data-aos='flip-right'>{item.title}</h3>
                                <label  data-aos='flip-left'>
                                    By {item.author} {item.date}
                                </label>
                                <p  data-aos='fade-up-right'>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }

                </div>
            </div>
        </section>
    )
}

export default Blog
import React, { useContext, useState, useEffect } from 'react'
import { Visibility } from '@mui/icons-material'
import Heading from '../common/Heading'
import { FieldContext } from '../../context/FieldContext'
import axios from 'axios'

const Portfolio = () => {

    const { allFields, url } = useContext(FieldContext)
    const portfolio = allFields.portfolio;
    const allCategories = ['All', ...new Set(portfolio.map(item => item.category))]
    const [list, setList] = React.useState(portfolio)
    const [categories, setCategories] = React.useState(allCategories)
    const [covers, setCovers] = useState([])

    const filterItems = (cat) => {
        if(cat === 'All') {
            setList(portfolio)
            return
        }
        const newList = portfolio.filter(item => item.category === cat)
        setList(newList)
    }

    const getCover = async (idx) => {
      const res = await axios.get(url+'s3/url/get/' + encodeURIComponent(`port/port${idx}.jpg`));
      return res.data
  }

  const populateCovers = async () => {
      let cover = await portfolio.map(async (item, idx) => (
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
        <article className='portfolio'>
            <div className="container">
                <Heading title="Portfolio" />
                <div className="catButton">
                    {
                        categories.map((cat, i) => (
                            <button key={i} className="primaryBtn" onClick={(e) => filterItems(cat)}  data-aos='zoom-out-down'>{cat}</button>
                        ))
                    }
                </div>
            </div>
            <div className="container grid3">
                {
                    list.map((item, i) => (
                        <div className="box"  data-aos='fade-up'>
                            <div className="img">
                                <img src={covers[i]} alt="" />
                            </div>
                            <div className="overlay">
                                <h3>{item.title}</h3>
                                <span>{item.name}</span>
                                <Visibility />
                            </div>
                        </div>
                    ))
                }
            </div>
        </article>
    )
}

export default Portfolio
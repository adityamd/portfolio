import React from 'react'
import { portfolio } from '../data/dummyData'
import { Visibility } from '@mui/icons-material'
import Heading from '../common/Heading'

const allCategories = ['All', ...new Set(portfolio.map(item => item.category))]
const Portfolio = () => {

    const [list, setList] = React.useState(portfolio)
    const [categories, setCategories] = React.useState(allCategories)
    console.log(setCategories)

    const filterItems = (cat) => {
        if(cat === 'All') {
            setList(portfolio)
            return
        }
        const newList = portfolio.filter(item => item.category === cat)
        setList(newList)
    }

    return (
        <article>
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
                                <img src={item.cover} alt="" />
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
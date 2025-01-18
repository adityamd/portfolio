import React, { useContext } from 'react'
import {CloudOutlined, FavoriteBorder, Public, PersonOutlined } from "@mui/icons-material"
import Countup from 'react-countup'
import { FieldContext } from '../../context/FieldContext'

const icons = [
    <CloudOutlined />,
    <FavoriteBorder />,
    <Public />,
    <PersonOutlined />
]

const Counter = () => {

    const { allFields } = useContext(FieldContext);
    const project = allFields.projects

    return (
        <div className="counter">
            <div className="hero">
                <div className="container grid3 grid4">
                    {
                        project.map((item, i) => (
                            <div className="box"  data-aos='zoom-in'>
                                <i>{icons[i]}</i>
                                <h1 className='heading'>
                                    <Countup enableScrollSpeed={true} end={item.num} duration={2} />
                                </h1>
                                <h3>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Counter
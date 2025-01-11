import React from 'react'
import { project } from '../data/dummyData'
import Countup from 'react-countup'

const Counter = () => {
  return (
    <div className="hero counter">
        <div className="container grid3 grid4">
            {
                project.map((item, i) => (
                    <div className="box"  data-aos='zoom-in'>
                        <i>{item.icon}</i>
                        <h1 className='heading'>
                            <Countup enableScrollSpeed={true} end={item.num} duration={2} />
                        </h1>
                        <h3>{item.title}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Counter
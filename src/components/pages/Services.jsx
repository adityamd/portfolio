import React, { useContext } from 'react'
import Heading from '../common/Heading'
import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart} from "@mui/icons-material"
import { FieldContext } from '../../context/FieldContext'

const icons = [
    <Settings />,
    <CropRotate />,
    <ViewInAr />,
    <PieChart />,
    <Code />,
    <BarChart />
]

const Services = () => {

    const { allFields } = useContext(FieldContext)
    const services = allFields.services

    return (
        <section className="services">
            <div className="container">
                <Heading title="Services" />
                <div className="content grid3">
                {
                    services.map((item, i) => (
                        <div className="box" data-aos='flip-left'>
                            <i>{icons[i]}</i>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default Services
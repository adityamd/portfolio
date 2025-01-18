import React, { useContext } from 'react'
import logo from '../data/logo.png'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { FieldContext } from '../../context/FieldContext'

const Header = () => {

    const [responsive, setResponsive] = React.useState(false)
    const { allFields } = useContext(FieldContext)
    const navlink = allFields.navLinks

    return (
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} alt="Logo" data-aos='zoom-in-right' />
                </div>
                <div className={responsive ? "hideMenu" : "nav"}>
                    {navlink.map((link, i) => (
                        <Link to={link.url} key={i}>{link.text}</Link>
                    ))}
                </div>
                <button onClick={() => setResponsive(!responsive)} className="toggle">
                    <Menu className='icon' />
                </button>
            </div>
        </header>
    )
}

export default Header
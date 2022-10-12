import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './styled-components/styleIndex'

const Navbar = () => {
  return (
    <NavBar>
        <div className="navigation">
            <div className="nav-container">
                <div className="brand">
                    Borrow
                </div>
                    <nav>
                    <ul className="nav-list">
                        <li><Link to="/signup"> Signup </Link> </li>
                        <li><Link to="/login"> Login </Link></li>
                        <li><Link to="/foods"> Food List</Link>
                            <ul className="nav-dropdown">
                            <li><a href="#!">Web Design</a></li>
                <li><a href="#!">Web Development</a></li>
                <li><a href="#!">Graphic Design</a></li>
            </ul>
            </li>
            <li><a href="#!">Pricing</a></li>
            <li><a href="#!">Contact</a></li>
        </ul>
        </nav>
                </div>
        </div>
    </NavBar>
  )
}

export default Navbar

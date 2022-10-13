import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from './styled-components/styleIndex'

const Navbar = () => {

    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json'}
        })
        .then(() => {
            navigate('/login')
            // logout();
            console.log("logged out")
        })
    }

  return (
    <NavBar>
        <div className="navigation">
            <div className="nav-container">
                <div className="brand">
                    Borrow
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/signup"> Login/Signup </Link> </li>
                        <li><Link to="/foods">Rentals</Link>
                            <ul className="nav-dropdown">
                                <li><a href="#!">How it Works</a></li>
                                <li><a href="#!">Plans</a></li>
                            </ul>
                        </li>
                        <li><Link to="/foods">Books</Link>
                            <ul className="nav-dropdown">
                                <li><a href="#!">Categories</a></li>
                                <li><a href="#!">Authors</a></li>
                            </ul>
                        </li>
                        <li><Link to="/foods">My Account</Link></li>
                        <li><Link to="/foods" onClick={logoutUser}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </NavBar>
  )
}

export default Navbar

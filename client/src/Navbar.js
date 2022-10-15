import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from './styled-components/styleIndex'
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from './userSlice'

const Navbar = ({logoutUser}) => {

    const user = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
        console.log("hello from dispatch")
      }, [dispatch]);

      console.log ("app component user:", user, loggedIn)


    const navigate = useNavigate()

    const handleDropDown = () => {

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
                        <li><Link onClick={handleDropDown}>Rentals</Link>
                            <ul className="nav-dropdown-none">
                                <li><a href="#!">How it Works</a></li>
                                <li><a href="#!">Plans</a></li>
                            </ul>
                        </li>
                        <li><Link onClick={handleDropDown}>Books</Link>
                            <ul className="nav-dropdown-none">
                                <li><a href="/books">All Books</a></li>
                                <li><a href="/categories">Categories</a></li>
                                <li><a href="/authors">Authors</a></li>
                            </ul>
                        </li>
                        <li><Link to="/foods">My Account</Link></li>
                        {loggedIn ? <li><Link to="/foods" onClick={logoutUser}>Logout</Link></li> : <><li><Link to="/login">Login</Link></li><li><Link to="/signup">Signup</Link> </li></>}
                        
                        
                    </ul>
                </nav>
            </div>
        </div>
    </NavBar>
  )
}

export default Navbar

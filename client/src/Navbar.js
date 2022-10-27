import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from './styled-components/styleIndex'
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from './userSlice'
import backpack from './styled-components/backpack.png'

const Navbar = ({logoutUser}) => {

    const user = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch();

    const [displayRentals, setDisplayRentals] = useState(false)
    const [displayBooks, setDisplayBooks] = useState(false)

    useEffect(() => {
        dispatch(fetchUser());
        console.log("hello from dispatch")
      }, [dispatch]);

      console.log ("app component user:", user, loggedIn)

     

    const navigate = useNavigate()

    const handleDropDownRentals = () => {
        setDisplayRentals(!displayRentals)
    }

    const handleDropDownBooks = () => {
        setDisplayBooks(!displayBooks)
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
                        <li><Link onClick={()=> setDisplayRentals(!displayRentals)}>Rentals▾</Link>
                        {displayRentals ? <ul className="nav-dropdown-display">
                                <li><a href="/about" >How it Works</a></li>
                                <li><a href="/plans">Plans</a></li>
                            </ul> : null}
                            
                        </li>
                        <li><Link onClick={() => setDisplayBooks(!displayBooks)}>Books▾</Link>
                            {displayBooks ? <ul className="nav-dropdown-display">
                                <li><a href="/titles">All Books</a></li>
                                <li><a href="/categories">Categories</a></li>
                                <li><a href="/authors">Authors</a></li>
                            </ul> : null }
                        </li>
                        <li><Link to="/me">My Account</Link></li>
                        {loggedIn ? <li><Link to="/logout" onClick={logoutUser}>Logout</Link></li> : <><li><Link to="/login">Login</Link></li><li><Link to="/signup">Signup</Link> </li></>}
                        <li><Link to="/backpack"><img className='backpack' src={backpack}/></Link></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    </NavBar>
  )
}

export default Navbar

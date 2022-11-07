import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar } from './styled-components/styleIndex'
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from './userSlice'
import backpack from './styled-components/backpack.png'
import { Banner } from './styled-components/styleIndex';

const Navbar = ({logoutUser, backpackItems}) => {

    const navigate = useNavigate()

    const user = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch();

    const [displayRentals, setDisplayRentals] = useState(false)
    const [displayBooks, setDisplayBooks] = useState(false)

    useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);

  return (
    <>
    <NavBar>
        <div className="navigation">
            <div className="nav-container">
                <div className="brand">
                    Borrow
                </div>
                <nav>
                    <ul className="nav-list">
                        <ul>
                            <li><Link to="/titles">Books</Link></li>
                            <li><Link to="/rentals">My Account</Link></li>
                            {loggedIn ? <li><Link to="/logout" onClick={logoutUser}>Logout</Link></li> : <ul className='backpack'><li ><Link to="/login">Login</Link></li><li><Link to="/signup">Signup</Link> </li></ul>}
                            {loggedIn ? <li className='backpack'><Link to="/backpack"><img src={backpack}/>{backpackItems}</Link></li>:<li></li>}
                        <br />
                        </ul>
                        </ul>
                        
                    
                   
                </nav>
            </div>
            
        </div>
    </NavBar>
    <br/>
    <br/>
    <Banner>
        {loggedIn ? <span className='span'>{3 - backpackItems} spots left in your backpack!</span> : null}  
    </Banner>
    </>
  )
}

export default Navbar

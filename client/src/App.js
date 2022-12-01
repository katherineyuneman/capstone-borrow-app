import { useState, useEffect } from "react";
import './App.css';
import Home from './Home';
import {Route, Routes, useNavigate} from "react-router-dom"
import { GeneralStyle } from './styled-components/styleIndex';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import TitlesContainer from "./containers/TitlesContainer";
import BackpackNext from "./components/rentals/BackpackNext";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, login, logout } from './userSlice'
import { fetchBackpack } from './backpackSlice';
import RentalsList from "./components/rentals/RentalsList";
import RentalsBooksList from "./components/rentals/RentalsBooksList";

function App() {

    const user = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const [errorsList, setErrorsList ] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const backpackItems = useSelector((state) => {console.log('backpackstate:', state.backpack.value) 
    return state.backpack.value.length});


    const current = new Date();
    const nextMonth = (current.getMonth()+2).toString()
    const currentYear = current.getFullYear().toString()
    const rentalMonth = (nextMonth + currentYear).toString()

    useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchBackpack(rentalMonth))

      }, [dispatch]);

      const handleSubmit = (loginCredentials) => {
          fetch('/login', {
              method: 'POST',
              headers: { 'Content-type': 'application/json'},
              body: JSON.stringify(loginCredentials)
          })
          .then(resp => resp.json())
          .then((user) => {
              if (user.errors){
                  setErrorsList(user.errors)
              } else {
                  dispatch(login(user))
                  navigate('/')
              }
          })
       }

       const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json'}
        })
        .then(() => {
            // setLoggedInNavbar(false)
            navigate('/')
            dispatch(logout(user))
            console.log("logged out")
        })
    }



  return (
    <GeneralStyle>
        <Navbar backpackItems={backpackItems} logoutUser={logoutUser} firstName={user.first_name} lastName={user.last_name} email={user.email}/>
        <Routes>
          <Route path="/login">
          <Login loggedIn={loggedIn} handleSubmit={handleSubmit} errorsList={errorsList}/>
              </Route> 
          <Route path="/signup">
          <Signup />
              </Route>
          <Route path="/">
          <Home user={user} loggedIn={loggedIn}/>
              </Route>
          <Route path="/rentals">
              <RentalsList loggedIn={loggedIn} />
        </Route>
          <Route path="/titles">
          
            <TitlesContainer />
          </Route>
          <Route path="/backpack">
          <BackpackNext loggedIn={loggedIn} backpackItems={backpackItems}/>
              </Route>
          <Route path="rentals/:id">
          <RentalsBooksList loggedIn={loggedIn}/>
              </Route>
          
        </Routes>
    </GeneralStyle>
   
  );
}

export default App;

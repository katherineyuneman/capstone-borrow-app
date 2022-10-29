import { useState, useEffect } from "react";
import './App.css';
import Home from './Home';
import {Route, Routes, useNavigate} from "react-router-dom"
import { GeneralStyle } from './styled-components/styleIndex';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import TitlesContainer from "./containers/TitlesContainer";
import Backpack from "./components/rentals/Backpack";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, login, logout } from './userSlice'
import { fetchBackpack } from './backpackSlice';

function App() {

    const user = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const [errorsList, setErrorsList ] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const backpackItems = useSelector((state) => state.backpack.value.length);

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
          <Route path="/login" element={<Login loggedIn={loggedIn} handleSubmit={handleSubmit} errorsList={errorsList}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home user={user} loggedIn={loggedIn}/>} />

          <Route path="/titles" element={<TitlesContainer />} />
          <Route path="/backpack" element={<Backpack />} />
          
        </Routes>
    </GeneralStyle>
   
  );
}

export default App;

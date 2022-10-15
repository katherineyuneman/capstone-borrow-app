import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from './userSlice'
import { useDispatch } from 'react-redux'

function Login({handleSubmit, errorsList}) {
    
    const [loginCredentials, setLoginCredentials] = useState ({
        email:"",
        password:"",
        })
    // const [errorsList, setErrorsList ] = useState([])
    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     fetch('/login', {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json'},
    //         body: JSON.stringify(loginCredentials)
    //     })
    //     .then(resp => resp.json())
    //     .then((data)=> (dispatch(login(data))))
    //     .then((user) => {
    //         if (user.errors){
    //             setErrorsList(user.errors)
    //         } else {
    //             loggedIn = true
    //             navigate('/')
    //         }
    //     })
    //  }

     const handleInputs = e => {
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value
        })
     }

  return (
    // <HomeContainer>
    <div>
        <p>Please login with your email address and password:</p>
      <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(loginCredentials)}}>
            <label>Email Address:
              <input type="text" name="email" value={loginCredentials.email} onChange={handleInputs}/>
            </label>
            <br/>
            <label>Password:
              <input type="password" name="password" value={loginCredentials.password} onChange={handleInputs}/>
            </label>
            <br/>
              <button className="button">Login</button>
        </form>
        <ul>
            {errorsList}
        </ul>
    </div>
    // </HomeContainer>
  )
}

export default Login

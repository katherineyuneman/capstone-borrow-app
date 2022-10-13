import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
// import { HomeContainer } from './styled-components/styleIndex'


function Login() {
    
    const [loginCredentials, setLoginCredentials] = useState ({
        email:"",
        password:"",
    })
    const [errorsList, setErrorsList ] = useState([])
    // const {login} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
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
                // login(user)
                navigate('/')
                console.log("logged in as:", user)
            }
        })

     }

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
      <form onSubmit={handleSubmit}>
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

import React, {useState} from 'react'

function AuthorForm ({authorSubmit}) {
    const [ newAuthorInputs, setNewAuthorInputs ] = useState([{
        first_name:"",
        last_name:""
    }])

    const handleAuthorInputs = (e) => {
        setNewAuthorInputs({
            ...newAuthorInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleAuthorSubmit = (event) => {
        alert('clicked');
        
        console.log("e from handleAuthorSubmit", event)
       
        event.preventDefault();
        authorSubmit(event, newAuthorInputs)
    }

  return (
    <div>
      <form onSubmit handleAuthorSubmit={event => handleAuthorSubmit(event)}>
        <label>First Name: 
            <input type="text" name="first_name" value={newAuthorInputs.first_name} onChange={handleAuthorInputs}/>
        </label>
        <label>Last Name: 
            <input type="text" name="last_name" value={newAuthorInputs.last_name} onChange={handleAuthorInputs}/>
        </label>
        <br />
        <button >Submit Author</button>
      </form>
    </div>
  )
}

export default AuthorForm
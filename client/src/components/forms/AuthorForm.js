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

    const handleAuthorSubmit = (e) => {
        alert('clicked');
        
        console.log("e from handleAuthorSubmit", e)
       
        e.preventDefault();
        // authorSubmit(e, newAuthorInputs)
    }

  return (
    <div>
      <form onSubmit={(e) =>{
            e.preventDefault();
            handleAuthorInputs(newAuthorInputs)
        }}>
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
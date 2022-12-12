import React, {useState} from 'react'

const AuthorForm = ({handleAuthorSubmit}) => {
    const [ authorInputs, setAuthorInputs ] = useState([{
        first_name:"",
        last_name:""
    }])

    const handleAuthorInputs = (e) => {
        setAuthorInputs({
            ...authorInputs,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
      <form onSubmit={(e) => handleAuthorSubmit(e, authorInputs)}>
        <label>First Name: 
            <input type="text" name="first_name" value={authorInputs.first_name} onChange={handleAuthorInputs}/>
        </label>
        <label>Last Name: 
            <input type="text" name="last_name" value={authorInputs.last_name} onChange={handleAuthorInputs}/>
        </label>
        <br />
        <button>Submit Author</button>
      </form>
    </div>
  )
}

export default AuthorForm

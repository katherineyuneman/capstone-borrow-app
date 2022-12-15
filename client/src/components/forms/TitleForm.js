import React, {useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import AuthorForm from './AuthorForm'

const TitleForm = () => {
    const [ titleInputs, setTitleInputs ] = useState({
        title:"",
        rating:"",
        genre:"",
        publication_date:"",
        image_url:"",
        author_id:""
    })

    const [ authorInputs, setAuthorInputs ] = useState({
        first_name: "",
        last_name: "",
    })

    const [ authors, setAuthors ] = useState([])
    const [ authorErrors, setAuthorErrors ] = useState([])
    const [ titleErrors, setTitleErrors ] = useState([])
    const [ displayNewAuthorForm, setDisplayNewAuthorForm ] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch ('/authors')
        .then(response => response.json())
        .then((authors) => setAuthors(authors))
        // return () => {
        //     setAuthors([])
        // }
      }
      ,[])

      const authorDropDownOptions = authors.map((author) => {
          return <option key={author.id} value={author.id}>{author.first_name} {author.last_name}</option>
      })

    const handleTitleInputs = (e)=>{
        console.log(e.target.value, e.target.name)
        setTitleInputs({
            ...titleInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleNewAuthorInput = (e) => {
       if (e.target.value === 'addNew'){
        setDisplayNewAuthorForm(true)
       } else {
        setTitleInputs({
            ...titleInputs,
            [e.target.name]: e.target.value
        })
       }
    }


    const authorSubmit = (e, authorInputs) => {
         e.preventDefault();
        console.log("author inputs back in Title Form component:", authorInputs)

        fetch('/authors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(authorInputs)
            })
            .then(resp => resp.json())
            .then((data) => {
                if (data.errors){
                    console.log("here")
                    const errorLis = data.errors.map((error, index) => <li key={index}>{index + 1}. {error}</li>)
                    setAuthorErrors(errorLis)
                    
                } else {
                    console.log("hi hi hi else statement")
                    setAuthorErrors([])
                    setDisplayNewAuthorForm(false)
                    setAuthors([...authors, data])
                }
            })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/titles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(titleInputs)
            })
            .then(resp => resp.json())
            .then((data) => {
                if (data.errors){
                    const errorLis = data.errors.map((error, index) => <li key={index}>{index + 1}. {error}</li>)
                    setTitleErrors(errorLis)
                    
                } else {
                    console.log("hi hi hi else statement")
                    setTitleErrors([])
                    setAuthorInputs({})
                    setTitleInputs({})
                    navigate("/titles")
                }
            })
    }

  return (
    <div>
      <h3>Add a new title and author below:</h3>
      <form onSubmit = {handleSubmit}>
        <label>Title: 
              <input type="text" name="title" value={titleInputs.title} maxLength={30} onChange={handleTitleInputs}/>
        </label>
        <br/>
        <lable>Main Author: 
        <select name="author_id" value={titleInputs.author_id} required onChange={(e) => handleNewAuthorInput(e)}>
            <option name="default" value="default">Select Author</option>
            <option name="addNew" value="addNew">ADD NEW AUTHOR</option>
            {authorDropDownOptions}
        </select>
        </lable>
        {displayNewAuthorForm ? <AuthorForm authorSubmit={authorSubmit}/> : null}
        <br />
        <label>Genre: 
              <input type="text" name="genre" value={titleInputs.genre} onChange={handleTitleInputs}/>
        </label>
        <br />
        <label>Rating: 
              <input type="decimal" name="rating" value={titleInputs.rating} onChange={handleTitleInputs}/>
        </label>
        <br />
        <label>Publication Date: 
              <input type="string" name="publication_date" value={titleInputs.publication_date} onChange={handleTitleInputs}/>
        </label>
        <label>Image URL"
              <input type="string" name="image_url" value={titleInputs.image_url} onChange={handleTitleInputs}/>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TitleForm

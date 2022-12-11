import React, {useState, useEffect} from 'react'
import AuthorForm from './AuthorForm'

const TitleForm = () => {
    const [ titleInputs, setTitleInputs ] = useState([{
        title:"",
        rating:"",
        genre:"",
        publication_date:"",
        image_url:"",
        author_id:""
    }])

    const [ authorInputs, setAuthorInputs ] = useState([{
        first_name: "",
        last_name: "",
        
    }])
    const [ authors, setAuthors ] = useState([])
    const [ displayNewAuthorForm, setDisplayNewAuthorForm ] = useState(false)

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
       } else setDisplayNewAuthorForm(false)
    }
    

  return (
    <div>
      <h3>Add a new title and author below:</h3>
      <form>
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
        {displayNewAuthorForm ? <AuthorForm /> : null}
        
      </form>
    </div>
  )
}

export default TitleForm

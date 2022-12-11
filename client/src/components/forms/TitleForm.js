import React, {useState, useEffect} from 'react'

const TitleForm = () => {
    const [ titleInputs, setTitleInputs ] = useState([{
        title:"",
        rating:"",
        genre:"",
        publication_date:"",
        image_url:""
    }])
    const [ authors, setAuthors ] = useState([])

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

    

  return (
    <div>
      <h3>Add a new title and author below:</h3>
      <form>
        <label>Title:
              <input type="text" name="title" value={titleInputs.title} maxLength={30} onChange={handleTitleInputs}/>
        </label>
        
      </form>
    </div>
  )
}

export default TitleForm

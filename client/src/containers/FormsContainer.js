import React, {useState} from 'react'
import BookForm from '../components/forms/BookForm'
import TitleForm from '../components/forms/TitleForm'

const FormsContainer = ({loggedIn}) => {

  const [ titleFormOpen, setTitleFormOpen ] = useState(false)
  const [ bookFormOpen, setBookFormOpen ] = useState(false)
  const [ submittedTitleData, setSubmittedTitleData ] = useState([])
  const [ newBookOpen, setNewBookOpen ] = useState(false)

  console.log("submitted title data:", submittedTitleData)

  const handleAddTitle = () => {
    setTitleFormOpen(!titleFormOpen)
  }

  const handleAddBook = () => {
    setBookFormOpen(!bookFormOpen)
  }

  const passSubmittedTitle = (titleData) => {
    setSubmittedTitleData(titleData)
    setNewBookOpen(true)
    setTitleFormOpen(false)
    setBookFormOpen(true)
  }


  return (
    <div>
      <button onClick={handleAddTitle}>Add New Title</button>
      <button onClick={handleAddBook}>Add New Book</button>
      { titleFormOpen ? <TitleForm passSubmittedTitle={passSubmittedTitle}/> : null }
      { bookFormOpen && newBookOpen === false ? <BookForm submittedTitleData={submittedTitleData}/> : null }
      { newBookOpen ? <div><h1>Add a new book for this Title: {submittedTitleData.title} </h1> <BookForm submittedTitleDa={submittedTitleData}/></div> : null }
    </div>
  )
}

export default FormsContainer

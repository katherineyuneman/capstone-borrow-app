import React, {useState} from 'react'
import BookForm from '../components/forms/BookForm'
import TitleForm from '../components/forms/TitleForm'

const FormsContainer = ({loggedIn}) => {

  const [ titleFormOpen, setTitleFormOpen ] = useState(false)
  const [ bookFormOpen, setBookFormOpen ] = useState(false)

  const handleAddTitle = () => {
    setTitleFormOpen(!titleFormOpen)
  }

  const handleAddBook = () => {
    setBookFormOpen(!bookFormOpen)
  }


  return (
    <div>
      <button onClick={handleAddTitle}>Add New Title</button>
      <button onClick={handleAddBook}>Add New Book</button>
      { titleFormOpen ? <TitleForm /> : null }
      { bookFormOpen ? <BookForm /> : null }
    </div>
  )
}

export default FormsContainer

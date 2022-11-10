import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react/cjs/react.development'
import { CardContainer, RentalContainerStyle } from '../../styled-components/styleIndex'

const RentalsBooksList = () => {

    const {id} = useParams()
    const [ bookRentalArray, setBookRentalArray ] = useState([])
    // const [ displayEdit, setDisplayEdit ] = useState(false)
    // const { user, loggedIn } = useContext(UserContext)
    const [ error, setError ] = useState([])
    const [ date, setDate ] = useState('')

    const monthWritten = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

    useEffect(() => {
        fetchShow()
    },[])
    
    const fetchShow = () => {
        console.log('id', id)
        fetch (`/rentals/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.error){
                setError(data.error)
            } else {
                setBookRentalArray(data)
                console.log("data inside fetch", data)
                const firstMonth = data.findLast((rental) => rental.receive_date)
                const updatedDate = new Date(firstMonth.receive_date)
                const formattedMonth = monthWritten[updatedDate.getMonth()+1]
                const year = updatedDate.getFullYear()
                const combinedDate = formattedMonth.toString() + year.toString()
                setDate(formattedMonth + ' ' + year)
                }
            }
        )
    }



    
    const bookRentals = bookRentalArray.map(book => {
        console.log("book:", book)
        return (
            <div>
            <CardContainer>
            <div className='container'>
            <div className='card'>

                <ul className='title'>
                <img src={book.image_url} />
                <h4>{book.title}</h4>
                <li>Rating: {book.rating}</li>
                <li>Return By: {book.return_date}</li>
                <br/>
                </ul>
            </div>
            </div>
            </CardContainer>
            </div>
        )
    })
    
  return (
    
    <div>
        <RentalContainerStyle>
            <CardContainer>
        <h1>{date}</h1>
        <div className='backpackContainer'>
        <Link to='/rentals'><button className='button'>Back to Past Rentals</button></Link>
        {bookRentals}
        </div>
        </CardContainer>
        </RentalContainerStyle>
    </div>
  )
}

export default RentalsBooksList
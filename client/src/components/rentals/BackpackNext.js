import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import { CardContainer } from '../../styled-components/styleIndex';
import { useSelector, useDispatch } from "react-redux";
import { fetchBackpack, updateConfirmed, removeConfirmed } from '../../backpackSlice';

const BackpackNext = ({loggedIn, backpackItems}) => {

    const current = new Date();
    const nextMonth = (current.getMonth()+2).toString()
    const currentYear = current.getFullYear().toString()
    const rentalMonth = (nextMonth + currentYear).toString()

    const [ bookRentalArray, setBookRentalArray ] = useState([])
    const [ errorsLis, setErrorsLis ] = useState([])
    const [ confirmed, setConfirmed ] = useState(false)
    const [ noButtonText, setNoButtonText] = useState(true)

    const backpack = useSelector((state) => {console.log("backpack:",state.backpack)
        return state.backpack; });
    const atLimit = useSelector((state) => state.backpack.atLimit)
    const confirmedRedux = useSelector((state) => state.backpack.confirmed)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBackpack(rentalMonth));
      }, [dispatch]);

    useEffect(() => {
       fetch(`/rentals/${rentalMonth}`)
        .then(resp => resp.json())
        .then((data) => {
            if (data.errors){
              console.log(data.errors)
                const errorLis = data.errors.map((error, index) => <li key={index}>{index + 1}. {error}</li>)
                setErrorsLis(errorLis)
            } else {
              console.log("post-post fetch:", data)
              setBookRentalArray(data)
              setConfirmed(data.confirmed)
              if (data.length ===0 ){
                setNoButtonText('No items in your backpack.')
              }
                else if (data.length < 3){
                  setNoButtonText('Please add another book to your backpack before confirming.')
              } else if (data.length > 0)
               {setNoButtonText('Backpack confirmed!')
               }
            }
        })
      }, []);

      const handleRemoveCart = (book) => {
        fetch(`/book_rentals/${book.book_rental_id}`, {
            method: "DELETE",
          }).then((r) => {
            if (r.ok) {
                setBookRentalArray((backpack) => backpack.filter((backPackBook) => backPackBook.book_id !== book.book_id));
                dispatch(fetchBackpack(rentalMonth))
                dispatch(removeConfirmed())
                setConfirmed(false)
                setNoButtonText('Please add another book to your backpack before confirming.')
              ;
            }
          });
      }

      const handleConfirmBackpack = () => {
        fetch(`/rentals/${rentalMonth}`, {
          method: 'PATCH',
          headers: { 'Content-type': 'application/json'},
          body: JSON.stringify({confirmed: true})
      })
      .then(resp => resp.json())
      .then((user) => {
          if (user.errors){
              setErrorsLis(user.errors)
          } else {
            setConfirmed(true)
            updateConfirmed(true)
              // navigate('/')
          }
      })
      }

    
console.log("book rental array!", bookRentalArray)

const bookRentals = () => bookRentalArray.map(book => {
    console.log("book:", book)
    return (
        <div>
        <CardContainer>
        <div className='container'>
        <div className='card'>
        <ul className='title'>
            <img src={book.image_url} />
            <h4>{book.title}</h4>
            </ul>
            <ul className='author'>
            <li>Rating: {book.rating}</li>
            <li>Return By: {book.return_date}</li>
            <br/>
            </ul>
            <button onClick={() => handleRemoveCart(book)}>Remove from Cart</button>
        </div>
        </div>
        </CardContainer>
        </div>
    )
})

const handleRemoveAll = () =>{
  fetch(`/rentals/${rentalMonth}`, {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      setBookRentalArray([])
      setNoButtonText('No items in your backpack.')
      dispatch(fetchBackpack(rentalMonth))
      ;
    }
  });
}

if (loggedIn) {
  return (
      <CardContainer>
        <div className='backpackContainer'>
        <h1>My Backpack</h1>
        {bookRentalArray.length > 0 ? <button onClick={handleRemoveAll}>Remove all from backpack</button> : null}
        <br/>
        {confirmed || confirmedRedux || bookRentalArray.length < 3 ? <h4>{noButtonText}</h4> : <button onClick={handleConfirmBackpack}>Confirm Backpack</button>}
        </div>
        <br/>
        {bookRentalArray.length > 0 ? bookRentals() :null}
        <br />
        
        <div className='backpackContainer'>
  
        
        </div>
        </CardContainer>
  )}
  else return (
    <CardContainer>
        <h1>Please login to view your backpack</h1>
    </CardContainer>
  )
}

export default BackpackNext

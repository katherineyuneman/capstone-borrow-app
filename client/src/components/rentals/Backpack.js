import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import { CardContainer } from '../../styled-components/styleIndex';
import { useSelector, useDispatch } from "react-redux";
import { fetchBackpack } from '../../backpackSlice';

const Backpack = () => {

    const current = new Date();
    const nextMonth = (current.getMonth()+2).toString()
    const currentYear = current.getFullYear().toString()
    const rentalMonth = (nextMonth + currentYear).toString()

    const [bookRentalArray, setBookRentalArray] = useState([])
    const [errorsLis, setErrorsLis] = useState([])

    const backpack = useSelector((state) => {console.log(state.backpack)
        return state.backpack; });
    const atLimit = useSelector((state) => state.backpack.atLimit)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBackpack(rentalMonth));
        console.log("hello from dispatch")
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
              bookRentals(data)
                // setFoodIngredientOptions([...foodIngredientOptions, data])
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
              ;
            }
          });
      }

    
console.log("book rental array!", bookRentalArray)


const bookRentals = () => bookRentalArray.map(book => {
    console.log("book:", book)
    return (
        <div>
        <CardContainer>
        <div className='container'>
        <div className='card'>
        <ul>
            <img src={book.image_url} />
            <h4>{book.title}</h4>
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

  return (
    <div>
        <h1>My Backpack</h1>
        {bookRentals}
    </div>
  )
}

export default Backpack

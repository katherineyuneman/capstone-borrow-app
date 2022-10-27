import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import { CardContainer } from '../../styled-components/styleIndex';

const Backpack = () => {

    const current = new Date();
    const nextMonth = (current.getMonth()+2).toString()
    const currentYear = current.getFullYear().toString()
    const rentalMonth = (nextMonth + currentYear).toString()

    const [bookRentalArray, setBookRentalArray] = useState([])



    useEffect(() => {
       fetch(`/rentals/${rentalMonth}`)
        .then(resp => resp.json())
        .then((data) => {
            if (data.errors){
              console.log(data.errors)
                // const errorLis = data.errors.map((error, index) => <li key={index}>{index + 1}. {error}</li>)
                // setCreateFoodErrorsList(errorLis)
            } else {
              console.log("post-post fetch:", data)
              setBookRentalArray(data)
            //   rentalCreation(rentalMonth, data)
                // setCreateFoodErrorsList([])
                // setDisplayFoodForm(false)
                // setFoodIngredientOptions([...foodIngredientOptions, data])
            }
        })
      }, []);

    
console.log("book rental array!", bookRentalArray)

const bookRentals = bookRentalArray.map(book => {
    return (
        <CardContainer>
           <div className='container'>
        <div className='card'>
        <li>{book.title}</li>
        <li>{book.rating}</li>
        <li>{book.month}</li>
        <li>{book.receive_date}</li>
        </div>
        </div>
        </CardContainer>
    )
})

  return (
    <div>
        {bookRentals}
    </div>
  )
}

export default Backpack

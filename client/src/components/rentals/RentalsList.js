import { useEffect, useState } from 'react/cjs/react.development'
import { CardContainer, RentalContainerStyle } from '../../styled-components/styleIndex'
import RentalsBooksList from './RentalsBooksList'
import { Link } from 'react-router-dom'
import backpack from '../../styled-components/backpack.png'


const RentalsList = () => {
    const [ rentals, setRentals ] = useState([])

    const monthWritten = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

    useEffect(() => {
        fetch("/rentals")
          .then((r) => r.json())
          .then((data) => {
            if (data.errors){
              console.log(data.errors)
                // setErrors(data.errors)
            } else {
              setRentals(data)
            }
        })
      }, []);

      

    const eachMonthRental = rentals.map(rental => {
        const updatedDate = new Date(rental.receive_date)
        const formattedMonth = monthWritten[updatedDate.getMonth()+1]
        const year = updatedDate.getFullYear()
            return (
                <div className='rental'>
                    <h1>{formattedMonth} {year}</h1>
                    Received Date: {rental.receive_date}
                    <br />
                    Return Date: {rental.return_date}
                    <br />
                    <br />
                    <Link to={`/rentals/${rental.month}`}><img className='backpack' src={backpack}/></Link>
                </div>
            )
        })

  return (
    <RentalContainerStyle>  
        <h1>Order History</h1>
        {eachMonthRental}
    </RentalContainerStyle>
  )
}

export default RentalsList

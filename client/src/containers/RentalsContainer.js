import { useState, useEffect } from 'react/cjs/react.development'
import { RentalContainerStyle } from '../styled-components/styleIndex';

const RentalsContainer = () => {

    const [ rentals, setRentals ] = useState([])


    useEffect(() => {
        fetch("/rentals")
          .then((r) => r.json())
          .then((data) => {
            if (data.errors){
              console.log(data.errors)
                // setErrors(data.errors)
            } else {
              setRentals(data)
              console.log("data within fetch rentals:",data)
            }
        })
      }, []);


  return (
    <RentalContainerStyle>
    <div className='rental'>
        Hello
    </div>
    </RentalContainerStyle>
  )
}

export default RentalsContainer

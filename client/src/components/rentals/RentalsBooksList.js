import React from 'react'

const RentalsBooksList = ({rental}) => {
    
  return (
    <div>
        {rental.title}
        <img src={rental.image_url}/>
    </div>
  )
}

export default RentalsBooksList

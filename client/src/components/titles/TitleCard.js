import React from 'react'
import { useState } from 'react/cjs/react.development'
import { CardContainer } from '../../styled-components/styleIndex'

const TitleCard = ({title}) => {

const [ countAvailable, setCountAvailable ] = useState(title.count_available)

const handleClick = () => {
  if (countAvailable > 0) {
    const newCount = countAvailable - 1
    setCountAvailable(newCount)
  } else setCountAvailable(0)

  
}

console.log(title.title, countAvailable)
    return(
      <CardContainer>
        <div className='container'>
        <div className='card'>
            
              <ul>
              {title.title}
              <br />
              {title.author.first_name} {title.author.last_name}
              <br />
              {title.rating}
              </ul>
              {countAvailable > 0 || title.count_available > 0   ? <button onClick={handleClick}>Add to Cart</button> : <button className='wishlist'>Add to Wishlist</button>}
              
            </div>
        </div>
      </CardContainer>
    )

  
}

export default TitleCard

import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { CardContainer } from '../../styled-components/styleIndex'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../userSlice';

const TitleCard = ({title}) => {

const [ countAvailable, setCountAvailable ] = useState(title.count_available)

const user = useSelector((state) => state.user);
    // const loggedIn = useSelector((state) => state.user.loggedIn)
    // const [errorsList, setErrorsList ] = useState([])
const dispatch = useDispatch();
  // const navigate = useNavigate()

const current = new Date();
    
const nextMonth = (current.getMonth()+2).toString()
const currentYear = current.getFullYear().toString()
const rentalMonth = nextMonth + currentYear

useEffect(() => {
  dispatch(fetchUser());
  console.log("hello from dispatch")
}, [dispatch]);


const handleClick = () => {
  if (countAvailable > 0) {
    const newCount = countAvailable - 1
    setCountAvailable(newCount)
    rentalCreation(rentalMonth)
  } else setCountAvailable(0)
}

const rentalCreation = (monthInfo, titleInfo) => {

  const rental = {
    month: rentalMonth,
    receive_date: (`${currentYear}-${nextMonth}-01`),
    return_date: (`${currentYear}-${nextMonth}-28`),
    user_id: user.value.id
  }

    fetch('/rentals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(rental)
      })

      .then(resp => resp.json())
      .then((data) => {
          if (data.errors){
              const errorLis = data.errors.map((error, index) => <li key={index}>{index + 1}. {error}</li>)
              // setCreateFoodErrorsList(errorLis)
              
          } else {
            console.log("post-post fetch:", data)
              // setCreateFoodErrorsList([])
              // setDisplayFoodForm(false)
              // setFoodIngredientOptions([...foodIngredientOptions, data])
          }
      })


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

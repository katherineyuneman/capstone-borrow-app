import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { CardContainer } from '../../styled-components/styleIndex'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../userSlice';
import { fetchBackpack } from '../../backpackSlice';

const TitleCard = ({title}) => {

const [ countAvailable, setCountAvailable ] = useState(title.count_available)

const user = useSelector((state) => state.user);
const backpackItems = useSelector((state) => state.backpack.value.length);
const atLimit = useSelector((state) => state.backpack.atLimit)

    // const loggedIn = useSelector((state) => state.user.loggedIn)
    // const [errorsList, setErrorsList ] = useState([])
const dispatch = useDispatch();
  // const navigate = useNavigate()

const current = new Date();
    
const nextMonth = (current.getMonth()+2).toString()
const currentYear = current.getFullYear().toString()
const rentalMonth = nextMonth + currentYear

const [ bookId, setBookId ] = useState()

useEffect(() => {
  dispatch(fetchUser());
  dispatch(fetchBackpack(rentalMonth));
  console.log("hello from dispatch")
}, [dispatch]);


const handleClick = () => {
  if (countAvailable > 0) {
    const newCount = countAvailable - 1
    setCountAvailable(newCount)

    fetch('/titles_books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({_json: title.id})
      })
      .then(resp => resp.json())
      .then((data) => {
          if (data.errors){
            console.log(data.errors)
              // const errorLis = data.errors.map((error, index) => <li key={index}>{index + 1}. {error}</li>)
              // setCreateFoodErrorsList(errorLis)
          } else {
            
            console.log("post-post fetch:", data)
            setBookId(data)
            rentalCreation(rentalMonth, data)
            
              // setCreateFoodErrorsList([])
              // setDisplayFoodForm(false)
              // setFoodIngredientOptions([...foodIngredientOptions, data])
          }
      })

  } else setCountAvailable(0)
}

const rentalCreation = (monthInfo, titleInfo) => {
  const rental = {
    month: monthInfo,
    receive_date: (`${currentYear}-${nextMonth}-01`),
    return_date: (`${currentYear}-${nextMonth}-28`),
    user_id: user.value.id,
    book_rentals_attributes: {book_id: titleInfo}
  }
  console.log("rental:", rental)

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
            dispatch(fetchBackpack(rentalMonth))
              // setCreateFoodErrorsList([])
              // setDisplayFoodForm(false)
              // setFoodIngredientOptions([...foodIngredientOptions, data])
          }
      })

}


console.log("title object", title)
    return(
      <>
      <CardContainer>
        <div className='container'>
        <div className='card'>
              <ul>
              <img src={title.image_url} alt={title.title}/>
              <br />
              <h4>{title.title}</h4>
              <br />
              {title.author.first_name} {title.author.last_name}
              <br />
              {title.rating}
              </ul>
              {atLimit === false && (countAvailable > 0 || title.count_available > 0) ? <button onClick={handleClick}>Add to Cart</button> : <p className='wishlist'>Unavailable</p>}
            </div>
        </div>
      </CardContainer>
      </>
    )

  
}

export default TitleCard

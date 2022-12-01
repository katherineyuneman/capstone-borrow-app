import React from 'react'
import { useState, useEffect } from 'react'
import { CardContainer } from '../../styled-components/styleIndex'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../userSlice';
import { fetchBackpack, setAtLimit } from '../../backpackSlice';

const TitleCard = ({title, setAtLimit}) => {

const [ countAvailable, setCountAvailable ] = useState(title.count_available)

const user = useSelector((state) => state.user);
const loggedIn = useSelector((state) => state.user.loggedIn);
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
const [ localAtLimit, setLocalAtLimit ] = useState(atLimit)

useEffect(() => {
  dispatch(fetchUser());
  dispatch(fetchBackpack(rentalMonth));
  console.log("hello from dispatch")
}, [dispatch]);


const handleClick = () => {
  if (countAvailable > 0) {
    const newCount = countAvailable - 1
    setCountAvailable(newCount)
    if (newCount === 0){
      setLocalAtLimit(true)
    }

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
          }
      })

  } else {
    setCountAvailable(0)
    // dispatch(setAtLimit());
    setLocalAtLimit(true)
    
  }
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


console.log("atLimit", loggedIn, atLimit)
    return(
      <>
      <CardContainer>
        <div className='container'>
        <div className='card'>
              <ul className='title'>
              <img src={title.image_url} alt={title.title}/>
              <br />
              <h4>{title.title}</h4>
              <br />
              </ul>
              <ul className='author'>{title.author.first_name} {title.author.last_name}
              <br />
              {title.rating}

              </ul>
          
              {loggedIn && localAtLimit === false && (atLimit === false && (countAvailable > 0 || title.count_available > 0)) ? <button onClick={handleClick}>Add to Cart</button> : <p className='wishlist'>Unavailable</p>}
            </div>
        </div>
      </CardContainer>
      </>
    )

  
}

export default TitleCard

import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = () => {
    const [foodIngredientOptions, setFoodIngredientOptions] = useState([])
    const [ displayFoodForm, setDisplayFoodForm ] = useState(false)
    const [ bookInputs, setBookInputs ] = useState({
        rented:"",
        expected_return: "",
        condition:""
    })
    const [ titleInputs, setTitleInputs ] = useState([{
        title:"",
        rating: "",
        genre:"",
        publication_date:"",
        image_url: ""
    }])

    const [ authorInputs, setAuthorInputs ] = useState ([{

    }])

    const [ createFoodErrorsList, setCreateFoodErrorsList ] = useState([])
    const [ createRecipeErrorsList, setCreateRecipeErrorsList ] = useState([])

    const navigate = useNavigate()


    const handleSubmit = () => {
        console.log("submit")
    }

    const handleBookInputs = () => {
        console.log("recipe inputs")
    }

    const handleTitleInputs = () => {
        console.log("title inputs")
    }

    const addIngredientField = () => {
        console.log("add ingredients")
    }
  return (
    <div>
      <h1>Add your recipe below:</h1>
        <form onSubmit={handleSubmit}>
            <label>Recipe Title:
              <input type="text" name="title" value={bookInputs.title} maxLength={30} onChange={handleBookInputs}/>
            </label>
            <br/>
            <label>Directions:
              <input type="textarea" name="directions" value={bookInputs.directions} onChange={handleBookInputs}/>
            </label>
            <br/>
            <label>Source
              <input type="text" name="source" value={bookInputs.source} maxLength={50} onChange={handleBookInputs}/>
            </label>
            <br/>
            <br/>
            <br/>
            <br />
            {titleInputs.map((data, index) => {
                return (
                    <div key={data.id}>
                        <select name="title_id" value={data.food_id} required onChange={(e)=>handleTitleInputs(e, index)}>
                            <option name="default" value="default">Select Food Item</option>
                            <option name="addNew" value="addNew">ADD NEW FOOD</option>
                            {/* {foodDropDownOptions} */}
                        </select>
                        <label>Amount:
                            <input type="decimal" name="amount" value={data.amount} maxLength={10} onChange={(e)=>handleTitleInputs(e, index)}/>
                        </label>
                        <label>Measurement
                            <input type="decimal" name="measurement" value={data.measurement} maxLength={30} onChange={(e)=>handleTitleInputs(e, index)}/>
                        </label>
                    </div>
                )
                })
            }

            <br/>
            <button onClick={addIngredientField}>Add another Ingredient</button>
            <br/>
            <br/>
              <button>Create Recipe</button>
        </form>
    </div>
  )
}

export default BookForm

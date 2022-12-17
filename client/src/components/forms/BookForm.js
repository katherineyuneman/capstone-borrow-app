import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = ({submittedTitleData}) => {

    const [ titles, setTitles ] = useState([])
    const [ bookInputs, setBookInputs ] = useState([{
        condition:"",
        title_id:""
    }])

    const [ createFoodErrorsList, setCreateFoodErrorsList ] = useState([])
    const [ createRecipeErrorsList, setCreateRecipeErrorsList ] = useState([])

    const navigate = useNavigate()

    if (submittedTitleData === {}){
        console.log("submitted title data inside if", submittedTitleData)
        setTitles(submittedTitleData)
    }
    else {
        fetch ('/titles')
        .then(response => response.json())
        .then((titles) => setTitles(titles))
    }

    const titleDropDownOptions = titles.map((title) => {
        return <option key={title.id} value={title.id}>{title.title} </option>
    })

    const handleSubmit = e => {
        e.preventDefault()
        // set up the array to send
    
        fetch('/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify([{bookInputs}])
          })

          .then(resp => resp.json())
          .then((data) => {
              console.log(data.errors)
            if (data.errors){
                const errorLis = data.errors.map((error, index) => <li key={[index]}>{index+1}. {error}</li>)
                setCreateRecipeErrorsList(errorLis)
                
            } else {
                setBookInputs([{
                    condition:"",
                    title_id:""
                }])
                  navigate("/titles")
                  setCreateRecipeErrorsList([])
              }
          })
    }

    const handleBookInputs = (e, index) => {
        const { name, value } = e.target;
        const list = [...bookInputs];
        list[index][name] = value;
        setBookInputs(list);
        }

    const addAnotherBookField = (e) => {
        e.preventDefault();
        setBookInputs([...bookInputs, {
            condition:"",
            title_id:""
        }])
    }

  return (
    <div>
      <h1>Add a new book for a Title below:</h1>
        <form onSubmit={handleSubmit}>
            <label>Condition:
              <input type="text" name="title" value={bookInputs.title} maxLength={30} onChange={handleBookInputs}/>
            </label>
            <br/>
            <br />
            {bookInputs.map((data, index) => {
                return (
                    <div key={data.id}>
                        <select name="title_id" value={data.title_id} required onChange={(e)=>handleBookInputs(e, index)}>
                            {/* <option name="default" value="default">Select Food Item</option>
                            <option name="addNew" value="addNew">ADD NEW FOOD</option> */}
                            {titleDropDownOptions}
                        </select>
                        <label>Condition
                        <select name="condition" value={data.condition} required onChange={(e)=>handleBookInputs(e, index)}>
                            <option name="default" value="default">Select Condition</option>
                            <option name="new" value="new">New</option>
                            <option name="great" value="great">Great</option>
                            <option name="good" value="good">Good</option>
                            <option name="ok" value="great">Ok</option>
                            <option name="very worn" value="worn">Very Worn</option>
                        </select>
                        </label>
                    </div>
                )
                })
            }

            <br/>
            <button onClick={addAnotherBookField}>Add another book for this title:</button>
            <br/>
            <br/>
              <button>Create Recipe</button>
        </form>
    </div>
  )
}

export default BookForm

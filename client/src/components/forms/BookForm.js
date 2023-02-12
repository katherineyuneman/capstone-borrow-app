import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = ({submittedTitleData}) => {

    const [ titles, setTitles ] = useState([])
    const [ bookInputs, setBookInputs ] = useState([{
        condition:submittedTitleData.condition,
        title_id:submittedTitleData.title_id
    }])

    const [ createFoodErrorsList, setCreateFoodErrorsList ] = useState([])
    const [ createRecipeErrorsList, setCreateRecipeErrorsList ] = useState([])

    const navigate = useNavigate()

    console.log("submitted title data:",submittedTitleData)

    // if (Object.keys(submittedTitleData).length !== 0){
    //     console.log("submitted title data inside if", submittedTitleData)
    //     setTitles(submittedTitleData)
    // }
    
    useEffect(() => {
        fetch ('/titles')
        .then(response => response.json())
        .then((pulledTitles) => {
            console.log("titles fetched:", pulledTitles)
            // if (submittedTitleData.length === 0){
                setTitles(pulledTitles)}
            // } 
        )
    },[])


    const titleDropDownOptions =
        titles.map((title) => {
            return <option key={title.id} value={title.id}>{title.title} </option>
        })
    

    const handleSubmit = e => {
        e.preventDefault()
        // set up the array to send
        console.log("book inputs:", bookInputs)
        fetch('/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(bookInputs)
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
        console.log("e.target.value", e.target.value)
        const { name, value } = e.target;
        const list = [...bookInputs];
        list[index][name] = value;
        setBookInputs(list);
        }

        console.log("book Inputs in general area", bookInputs)

    const addAnotherBookField = (e) => {
        e.preventDefault();
        setBookInputs([...bookInputs, {
            condition:"",
            title_id:""
        }])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <br/>
            <br />
            {bookInputs.map((data, index) => {
                return (
                    <div key={data.id}>
                        <select name="title_id" value={data.title_id} required onChange={(e)=>handleBookInputs(e, index)}>
                            <option name="default" value="default">Select Title</option>
                            {/* <option name="addNew" value="addNew">ADD NEW FOOD</option> */}
                            {/* {submittedTitleData.length !== 0 ? <option name={submittedTitleData.title} value={submittedTitleData.id}>{submittedTitleData.title}</option> : */}
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
              <button>Add Book</button>
        </form>
    </div>
  )
}

export default BookForm

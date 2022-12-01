import { useState, useEffect } from 'react/cjs/react.development'
import TitlesList from '../components/titles/TitlesList'
import { CardContainer } from '../styled-components/styleIndex'

const TitlesContainer = () => {
  console.log("hello from titles container")
  const [ titles, setTitles ] = useState([])
  const [ errors, setErrors ] = useState([])


  useEffect(() => {
    fetch("/titles")
      .then((r) => r.json())
      .then((data) => {
        if (data.errors){
          console.log(data.errors)
            setErrors(data.errors)
        } else {

          setTitles(data)
          console.log("data within fetch titles:",data)
        }
    })
  }, []);


  return (
    
      <CardContainer>
        <h1>Books</h1>
        <TitlesList titles={titles}/>
      </CardContainer>
  )
}

export default TitlesContainer

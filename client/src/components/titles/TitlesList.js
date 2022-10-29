import React from 'react'
import TitleCard from './TitleCard'

const TitlesList = ({titles, atLimit}) => {

  const eachTitle = titles.map(title => {
    return (
    <div>
      <TitleCard title={title} atLimit={atLimit}/>
      </div>)
  })


  return (
    <div>
      {eachTitle}
    </div>
  )
}

export default TitlesList

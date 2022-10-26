import React from 'react'
import TitleCard from './TitleCard'

const TitlesList = ({titles}) => {

  const eachTitle = titles.map(title => {
    return (
    <div>
      <TitleCard title={title}/>
      </div>)
  })


  return (
    <div>
      {eachTitle}
    </div>
  )
}

export default TitlesList

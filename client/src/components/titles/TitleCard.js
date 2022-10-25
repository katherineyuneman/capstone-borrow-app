import React from 'react'

const TitleCard = ({titles}) => {

  const eachTitle = titles.map(title => {
    console.log(title)
    return(
      <div>
        <ul>{title.title}
        <br />
        {title.rating}
        <br />
        {title.author.first_name} {title.author.last_name}
        <br />
        {title.genre}
        
        </ul>
      </div>
    )
})

  return (
    <div>
      {eachTitle}
    </div>
  )
}

export default TitleCard

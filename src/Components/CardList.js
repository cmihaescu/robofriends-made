import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((robot, i) => {
       return <Card key={robots[i].id} robot={robots[i]} />
      })}
    </div>
  )
}

export default CardList;

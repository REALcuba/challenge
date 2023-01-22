import React from 'react'

function Card (id) {
  return (
    <div class='card'>
      console.log({id});
      <div class='card-body' key={id}>{id}</div>
    </div>
  )
}

export default Card

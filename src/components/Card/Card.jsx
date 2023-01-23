import React from 'react'

function Card (props) {
  return (
    <div className='card rounded justify-content-center' style={{ width: 250, height: 250 }} key={props.id}>
      {/* <img
        className='card-img' src={card.ownedBy} alt=''
      /> */}
      <div className='card-body ' key={props.id}>
        <h3 className='card-text'>{props.text}</h3>
      </div>

    </div>
  )
}

export default Card

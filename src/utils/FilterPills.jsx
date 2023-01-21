import React from 'react'

function FilterPills({src}) {
  return (
    <span className=" filterPill rounded-pill text-start p-1 bg-dark text-center">
    Date created <img src={src} alt="" />
  </span>
  )
}

export default FilterPills
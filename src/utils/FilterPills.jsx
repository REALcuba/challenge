import React from 'react'

function FilterPills({src, value}) {
  return (
    <span className=" filterPill rounded-pill border bg-dark text-center">
    {value} <img src={src} alt="" />
  </span>
  )
}

export default FilterPills
import React from 'react'

import './filterPill.css'
import arrowdown from '../../assets/svg/arrow-down.svg'
import inbox from '../../assets/svg/inbox.svg'
import arrowSwap from '../../assets/svg/arrow_swap.svg'

import FilterPills from '../../utils/FilterPills'
function Filter () {
  return (
    <div className=' d-flex flex-column bg-black text-white p-1'>
      <span className='container text-secondary'>
        The LesnAi frens has shared{' '}
        <em className='text-white'>beautiful artworks!</em>
      </span>
      <div className='container d-flex flex-column mt-5'>
        <span className='text-secondary mb-3'>Sort by:</span>

        <div className='d-flex '>
          <FilterPills value='Date created' src={arrowdown} />
          <FilterPills value='Most collected' src={inbox} />
          <FilterPills value='Most mirrored' src={arrowSwap} />
        </div>
      </div>
    </div>
  )
}

export default Filter

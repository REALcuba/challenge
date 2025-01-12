import React, { useEffect, useState } from 'react'

import { explorePublications } from '../lensQueries/explorePublications'
import PaintCardInfo from '../components/PaintCardInfo/PaintCardInfo'
import './style.css'

export default function ExplorePublications (props) {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [cursor, setCursor] = useState('{"timestamp":1,"offset":0}')
  console.log(cursor)
  // const [scrollTop] = useState(0)
  // console.log(scrollTop)
  // const [response, setResponse] = useState([])
  // const [page, setPage] = useState(1)
  // console.log(document.documentElement.scrollTop)
  // console.log(window.innerHeight)
  // console.log(document.documentElement.offsetHeight)
  const init = async () => {
    try {
      const request = {
        sortCriteria: 'LATEST', // You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
        noRandomize: true,
        sources: ['5bba5781-78b5-4927-8d2f-122742817583'],
        publicationTypes: ['POST'],
        cursor: { cursor },
        limit: 10
      }
      const response = await explorePublications(request) // To get next result replace the cursor with the value of response.pageInfo.next
      // console.log(response)
      const responseArr = response.data.explorePublications.items
      // console.log(cursor)
      // console.log(responseArr)
      setCards(responseArr)
      setCursor(response.data.explorePublications.pageInfo.next)

      return response
    } catch (err) {
      console.log(err)
    }
  }
  const getNewCards = response => {
    setCursor(response.data.explorePublications.pageInfo.next)
    const newCards = response.data.explorePublications.items
    console.log('newCards:', response.data.explorePublications.items)
    setCards([...cards, ...newCards])
    setLoading(false)
  }
  useEffect(() => {
    init()
  }, [])
  const handleScroll = (response) => {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      document.documentElement.offsetHeight
    ) {
      setLoading(false)
      return
    }
    setLoading(true)
    console.log('event.currentTarget.scrollTop')

    // init()
    getNewCards(response)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  return (
    <div className='container-fluid row bg-black m-0 justify-content-center'>
      {cards.map((card) => {
        return (
          <div className='card p-0 m-1' key={card.id}>
            <PaintCardInfo>{card}</PaintCardInfo>
            {loading && <div>loading...</div>}
          </div>
        )
      })}
    </div>
  )
}

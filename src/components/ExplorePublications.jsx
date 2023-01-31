import React, { useEffect, useState } from 'react'

import { explorePublications } from '../lensQueries/explorePublications'
import PaintCardInfo from '../components/PaintCardInfo/PaintCardInfo'
import './style.css'

export default function ExplorePublications (props) {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [cursor, setCursor] = useState('{"timestamp":1,"offset":0}')
  // const [response, setResponse] = useState([])
  // const [page, setPage] = useState(1)

  const init = async () => {
    try {
      const request = {
        sortCriteria: 'LATEST', // You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
        noRandomize: true,
        sources: ['5bba5781-78b5-4927-8d2f-122742817583'],
        publicationTypes: ['POST'],
        cursor: { cursor },
        limit: 6
      }
      const response = await explorePublications(request) // To get next result replace the cursor with the value of response.pageInfo.next
      console.log(response)
      const responseArr = response.data.explorePublications.items
      console.log(cursor)
      setCursor(response.data.explorePublications.pageInfo.next)
      setCards(responseArr)
      return response
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    init()
  }, [])

  const handleScroll = async () => {
    setLoading(true)
    const getNewCards = await init().then(response => {
      const newCards = response.data.explorePublications.items
      console.log('newCards:', response.data.explorePublications.items)
      setCards([...cards, ...newCards])
    })
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      document.documentElement.offsetHeight
    ) {
      return
    }
    // init()
    getNewCards()
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [cards, loading])

  return (
    <div className='container-fluid row bg-black m-0 justify-content-center'>
      {cards.map((card) => {
        return (
          <div className='card p-0 m-1' key={card.id}>
            <PaintCardInfo onClick={handleScroll}>{card}</PaintCardInfo>
            {loading && <div>loading...</div>}
          </div>
        )
      })}
    </div>
  )
}

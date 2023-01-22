import React, { useEffect, useState } from 'react'
import { explorePublications } from '../lensQueries/explorePublications'
// import Card from './Card/Card'
import './style.css'
export default function ExplorePublications (props) {
  const [cards, setCards] = useState([])

  const init = async () => {
    try {
      const request = {
        sortCriteria: 'LATEST', // You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
        noRandomize: true,
        sources: ['5bba5781-78b5-4927-8d2f-122742817583'],
        publicationTypes: ['POST'],
        cursor: '{"timestamp":1,"offset":0}',
        limit: 24
      }
      const response = await explorePublications(request) // To get next result replace the cursor with the value of response.pageInfo.next
      // console.log(response)
      const responseArr = response.data.explorePublications.items
      // console.log(responseArr)
      setCards(responseArr)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (

    <div>

      {cards.map((card, index) => {
        console.log(index, card.id, card.profile.name)
        return <li key={card.id}>{card.id}</li>
      })}
    </div>
  )
}

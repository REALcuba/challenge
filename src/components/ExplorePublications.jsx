import React, { useEffect, useState } from 'react'
import { explorePublications } from '../lensQueries/explorePublications'
// import Card from './Card/Card'
import './style.css'
export default function ExplorePublications (props) {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  // const [img, setImg] = useState()

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
      const responseArr = response.data.explorePublications.items
      console.log(response)
      // console.log(responseArr)
      setCards(responseArr)
      setLoading(response.loading)
      // setImg(responseArr.profile.picture.original.url)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    init()
  }, [])
  useEffect(() => {

  })

  return (

    <div className='container-fluid row bg-black m-0 justify-content-center'>

      {cards.map((card, index) => {
        const URL = card.metadata.media[0].original.url
        console.log(URL)
        const imgUrl = URL => URL.replace('ipfs:', 'https://ipfs.io/ipfs/')

        // setImg(card.profile.picture.original.url)
        return (

          <div className='card m-1 rounded justify-content-center' style={{ width: 308, height: 308 }} key={card.id}>
            <img
              className='card-img' src={imgUrl(URL)} alt={card.metadata.content}
            />
            {/* <div className='card-body ' key={card.id}>
              <h3 className='card-text'>{card.profile.name}</h3>
              <h3 className='card-text'>{card.profile.id}
              </h3>
            </div> */}
            {loading && <div>Loading...</div>}
          </div>
        // <Card key={card.id} {...cards} />

        )
      })}
    </div>
  )
}

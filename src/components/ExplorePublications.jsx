import React, { useEffect, useState } from 'react'
import { explorePublications } from '../lensQueries/explorePublications'
import { paintCardInfo } from '../components/PaintCardInfo/PaintCardInfo'
import './style.css'
// import inbox from '../assets/svg/inbox.svg'
export default function ExplorePublications (props) {
  const [cards, setCards] = useState([])
  // const [loading, setLoading] = useState(false)
  const [hoverImg, setHoverImg] = useState(false)
  // const [img, setImg] = useState()
  // const [className, setClassName] = useState('')

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
      // setLoading(true)
      // setImg(responseArr.profile.picture.original.url)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (

    <div className='container-fluid row bg-black m-0 justify-content-center'>

      {cards.map((card) => {
        const URL = card.metadata.media[0].original.url
        const imgUrl = URL => URL.replace('ipfs:', 'https://ipfs.io/ipfs/')

        return (
          <div
            className='card rounded position-relative justify-content-center p-0 m-1' style={{
              width: 308,
              height: 308

            }} key={card.id}

            // onMouseLeave={() => { setHoverImg(false) }}
          >
            <img
              onMouseEnter={() => setHoverImg(card)}
              className='card-img ' src={imgUrl(URL)} alt={card.metadata.content}
            />
            {hoverImg &&
              <div
                className='card bg-dark opacity-50 text-white text-bg-color'
              >
                <div className='card-body '>
                  {paintCardInfo(hoverImg)}

                </div>
              </div>}
          </div>
        )
      })}

    </div>
  )
}

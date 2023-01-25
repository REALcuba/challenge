import { useState } from 'react'

import inbox from '../../assets/svg/inbox.svg'
import arrowSwap from '../../assets/svg/arrow_swap.svg'
import chatBubble from '../../assets/svg/chat-bubble.svg'

// export const PaintCardInfo = (children) => {
//   // console.log(hoverImg.profile.id)
//   const [hoverImg, setHoverImg] = useState(false)
//   return (
//     <>
//       <div
//         onMouseEnter={() => setHoverImg(children)}
//         onMouseLeave={() => { setHoverImg(false) }}
//         className='card-body m-1 justify-content-center'
//         key={children.id}
//       >{hoverImg && <div>
//         <strong className='card-text m-1 handle'>@{children.profile.handle}</strong>
//         <br />
//         <span className='card-text m-1 '>Created at: {children.createdAt}</span>
//         <br />
//         <span className='card-text m-1'><img src={inbox} alt='' />{children.stats.totalAmountOfCollects}
//         </span>
//         <br />
//         <span className='card-text m-1'><img src={arrowSwap} alt='' />{children.stats.totalAmountOfCollects}
//         </span>
//         <br />
//         <span className='card-text m-1'><img src={chatBubble} alt='' />{children.stats.totalAmountOfCollects}
//         </span>     </div>}
//       </div>
//     </>
//   )
// }

function PaintCardInfo ({ children, id, profile, stats }) {
  const URL = children.metadata.media[0].original.url
  const imgUrl = URL => URL.replace('ipfs:', 'https://ipfs.io/ipfs/')

  const [hoverImg, setHoverImg] = useState(false)
  //   console.log(children.children.metadata.media)
  return (

    <div
      onMouseEnter={() => setHoverImg(children)}
      onMouseLeave={() => { setHoverImg(false) }}
      className='card p-0 justify-content-center'
      key={id}
    > <img
      className='card-img ' src={imgUrl(URL)} alt={children.metadata.content}
      />
      {hoverImg &&
        <div className='position-absolute bg-dark info align-items-start text-white'>
          <strong className='card-text m-1 handle'>@{children.profile.handle}</strong>
          <br />
          <span className='card-text '>Created at: {children.createdAt}</span>
          <br />
          <span className='card-text '><img src={inbox} alt='' />{children.stats.totalAmountOfCollects}
          </span>
          <br />
          <span className='card-text'><img src={arrowSwap} alt='' />{children.stats.totalAmountOfCollects}
          </span>
          <br />
          <span className='card-text'><img src={chatBubble} alt='' />{children.stats.totalAmountOfCollects}
          </span>
        </div>}
    </div>

  )
}

export default PaintCardInfo

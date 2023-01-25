import inbox from '../../assets/svg/inbox.svg'
import arrowSwap from '../../assets/svg/arrow_swap.svg'
import chatBubble from '../../assets/svg/chat-bubble.svg'

export const paintCardInfo = (props) => {
  // console.log(hoverImg.profile.id)
  return (
    <div
      className='card-body d-flex row p-0 pt-2'
      key={props.id}
    //   style={{ zIndex: 2 }}
    >
      <strong className='card-text m-1 handle'>@{props.profile.handle}</strong>
      <br />
      <span className='card-text m-1'>{props.createdAt}</span>
      <br />
      <span className='card-text m-1'><img src={inbox} alt='' />{props.stats.totalAmountOfCollects}
      </span>
      <br />
      <span className='card-text m-1'><img src={arrowSwap} alt='' />{props.stats.totalAmountOfCollects}
      </span>
      <br />
      <span className='card-text m-1'><img src={chatBubble} alt='' />{props.stats.totalAmountOfCollects}
      </span>

    </div>
  )
}

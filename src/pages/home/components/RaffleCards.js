import React from "react";
import {RaffleTimer} from "./RaffleTimer";
import {WatchlistBtn} from "./WatchlistBtn";
import {Ticket} from "./Ticket";

export const RaffleCard = ({imgUrl, title, ticket, description,status, timer, onClick, charity, stacked}) => {
  return (
    <div className={'raffle-card-holder justify-content-between m-flex col-md-12 pointer'} onClick={()=> onClick ? onClick('18781237') : undefined}>
      <div className={'col-md-4'}>
        {/*<img src={(imgUrl)} className={'raffle-image'}/>*/}
        <div className={'raffle-image'} style={{backgroundImage: `url(${imgUrl})`}}>
          <Ticket ticket={ticket} className={'display-none'}/>
  
          {charity ?
            <img alt={'charity'} className={'charity-icon'} src={require('../../../assets/icons/charity.svg')}/>
            : ''}
        </div>
      </div>
      <div className={'col-md-7'}>
        <div className={'m-flex height-100px m-display-none justify-content-between'}>
          <div className={'title2 mt-5 m-display-none'}>{title}</div>
          <Ticket ticket={ticket}/>
        </div>
        <div className={'padding-right-15'}>
          <div className={`title2 mt-5 display-none`}>{title}</div>
          <div className={`${stacked ? 'small-paragraph mt-3' : 'paragraph'}`}>{description}</div>
          <div className={'mt-3'}>
            <RaffleTimer black stacked className={'raffle-card-button'} timer={timer}/>
          </div>
          <div className={'mt-3'}>
            <WatchlistBtn fullwidth status={status}/>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from "react";

export const Ticket = ({ticket, className}) => {
  return (
    <div className={`ticket-details-holder ${className}`}>
      <div className={'ticket-details text-align-center small-paragraph-bold'}>
        <img src={require('../../../assets/icons/ticket.svg')} className={'mt-4 ticket-text'} alt={'icon'}/>
        <div className={' ticket-text text-align-center'}>{ticket} {ticket > 1 ? "tokens" : "token"}</div>
      </div>
    </div>
  )
}
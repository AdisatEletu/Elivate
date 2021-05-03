import React from "react";

export const RaffleTimer = ({timer, className, black, stacked}) => {
  return (
    <div className={`raffle-button small-paragraph ${stacked ? 'block' : 'd-flex'} align-items-center m-raffle-btn ${className}`}>
      <span> Raffle starts in </span> {stacked ? <br/> : '&nbsp;'} <img alt={'timer icon'} width={24} height={24}
                                                  src={black ? require('../../../assets/icons/blackTimer.svg') : require('../../../assets/icons/timer.svg')}/> &nbsp;
      <span>{timer}</span>
    </div>
  )
}
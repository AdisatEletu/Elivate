import React from "react";

export const RaffleTimer = ({timer, className, black}) => {
  return (
    <div className={`raffle-button small-paragraph d-flex align-items-center m-raffle-btn ${className}`}>
      <span> Raffle starts in </span> &nbsp; <img alt={'timer icon'} width={24} height={24}
                                                  src={black ? require('../../../assets/icons/blackTimer.svg') : require('../../../assets/icons/timer.svg')}/> &nbsp;
      <span>{timer}</span>
    </div>
  )
}
import React from "react";

export const WatchlistBtn = ({className, fullwidth}) => {
  return (
    <div className={'d-flex m-justify-content-center'}>
      <div className={`secondary-bg-color secondary-btn white-color paragraph-bold ${className}`}
           style={fullwidth ? {width: '100%'} : {width: "280px"}}> Add to watchlist
      </div>
    </div>
  )
}
import React from "react";

export const WatchlistBtn = ({
  className,
  fullwidth,
  adding,
  handleEnterRaffle,
  handleAddWatchlist,
  watchlist,
  handleRemoveWatchlist,
  creating,
  ended,
  started,
  removing,
}) => {
  
  if (watchlist && !started) {
    return (
      <div>
        <div className={"m-flex m-justify-content-center fullwidth "}>
          <div
            className={`raffle-secondary-btn  danger-bg-color white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleRemoveWatchlist()}
          >
            {removing ? "Removing from watclist..." : "Remove"}
          </div>
        </div>
     
      </div>
    );
  } else if (!watchlist && !started) {
    return (
      <div>
        <div className={"m-flex m-justify-content-center fullwidth "}>
          <div
            className={`secondary-bg-color raffle-secondary-btn  white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleAddWatchlist()}
          >
            {adding ? "Adding..." : "Add to watchlist"}
          </div>
        </div>
      </div>
    );
  } else if (watchlist && ended || !watchlist && ended) {
    return (
      <div>
         <div className={"m-flex m-justify-content-center fullwidth "}>
        <div
          className={`a-disabled raffle-secondary-btn  paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
        
      </div>

      </div>
     
    );
  } else if(started) {
    return (
      <div>
         <div className={"m-flex m-justify-content-center r-mt-3 fullwidth "}>
          <div
            className={`green-bg-color pointer raffle-secondary-btn  white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleEnterRaffle()}
          >
           {creating ? " Entering Raffle...": "Enter Raffle"}
          </div>
        </div>
       
      </div>
     
    );
  }else{
    return (
      <div>
        <div className={"m-flex m-justify-content-center fullwidth"}>
        <div
          className={`a-disabled raffle-secondary-btn  paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
      </div>
     
      </div>
      
    );
  }
};

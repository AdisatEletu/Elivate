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
  viewMore
}) => {
  
  if (watchlist && !started) {
    return (
      <div>
        <div className={"m-flex m-justify-content-center fullwidth m-display-none"}>
          <div
            className={`secondary-btn danger-bg-color white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleRemoveWatchlist()}
          >
            {removing ? "Removing from watclist..." : "Remove"}
          </div>
        </div>
        <div className="green-color fw-500" onClick={viewMore}>View more</div>
      </div>
    );
  } else if (!watchlist && !started) {
    return (
      <div>
        <div className={"m-flex m-justify-content-center fullwidth  m-display-none"}>
          <div
            className={`secondary-bg-color secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleAddWatchlist()}
          >
            {adding ? "Adding..." : "Add to watchlist"}
          </div>
        </div>
        <div className="green-color fw-500" onClick={viewMore}>View more</div>
      </div>
    );
  } else if (watchlist && ended || !watchlist && ended) {
    return (
      <div>
         <div className={"m-flex m-justify-content-center fullwidth m-display-none"}>
        <div
          className={`a-disabled secondary-btn paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
        
      </div>
         <div className="green-color fw-500" onClick={viewMore}>View more</div>
      </div>
     
    );
  } else if(started) {
    return (
      <div>
         <div className={"m-flex m-justify-content-center mt-3 fullwidth m-display-none"}>
          <div
            className={`green-bg-color pointer secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleEnterRaffle()}
          >
           {creating ? " Entering Raffle...": "Enter Raffle"}
          </div>
        </div>
         <div className="green-color fw-500" onClick={viewMore}>View more</div>
      </div>
     
    );
  }else{
    return (
      <div>
        <div className={"m-flex m-justify-content-center fullwidth  m-display-none"}>
        <div
          className={`a-disabled secondary-btn paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
      </div>
         <div className="green-color fw-500" onClick={viewMore}>View more</div>
      </div>
      
    );
  }
};

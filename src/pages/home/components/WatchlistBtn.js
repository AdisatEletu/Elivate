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
  start,
  ended,
  started,
  removing
}) => {
  if (watchlist && !started) {
    return (
      <div>
        <div className={"d-flex m-justify-content-center fullwidth"}>
          <div
            className={`secondary-btn danger-bg-color white-color paragraph-bold ${className}`}
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
        <div className={"d-flex m-justify-content-center fullwidth"}>
          <div
            className={`secondary-bg-color secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleAddWatchlist()}
          >
            {adding ? "Adding..." : "Add to watchlist"}
          </div>
        </div>
        {/* <div className={"d-flex m-justify-content-center mt-3"}>
          <div
            className={`green-bg-color secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleEnterRaffle()}
          >
           {creating ? " Entering Raffle...": "Enter Raffle"}
          </div>
        </div> */}
      </div>
    );
  } else if (watchlist && ended || !watchlist && ended) {
    return (
      <div className={"d-flex m-justify-content-center fullwidth"}>
        <div
          className={`disabled secondary-btn paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
      </div>
    );
  } else if(started) {
    return (
      <div className={"d-flex m-justify-content-center mt-3 fullwidth"}>
          <div
            className={`green-bg-color pointer secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleEnterRaffle()}
          >
           {creating ? " Entering Raffle...": "Enter Raffle"}
          </div>
        </div>
    );
  }else{
    return (
      <div className={"d-flex m-justify-content-center fullwidth"}>
        <div
          className={`disabled secondary-btn paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
      </div>
    );
  }
};

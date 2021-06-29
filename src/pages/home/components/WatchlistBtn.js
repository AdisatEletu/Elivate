import React from "react";

export const WatchlistBtn = ({
  className,
  fullwidth,
  status,
  adding,
  handleEnterRaffle,
  handleAddWatchlist,
  watchlist,
  handleRemoveWatchlist,
  creating,
  ended,
  removing
}) => {
  if (watchlist) {
    return (
      <div>
        <div className={"d-flex m-justify-content-center"}>
          <div
            className={`secondary-btn danger-bg-color white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleRemoveWatchlist()}
          >
            {removing ? "Removing from watclist..." : "Remove"}
          </div>
        </div>
        <div className={"d-flex m-justify-content-center mt-3"}>
          <div
            className={`green-bg-color secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleEnterRaffle()}
          >
          {creating ? " Entering Raffle...": "Enter Raffle"}
          </div>
        </div>
      </div>
    );
  } else if (!watchlist) {
    return (
      <div>
        <div className={"d-flex m-justify-content-c`enter"}>
          <div
            className={`secondary-bg-color secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleAddWatchlist()}
          >
            {adding ? "Adding..." : "Add to watchlist"}
          </div>
        </div>
        <div className={"d-flex m-justify-content-center mt-3"}>
          <div
            className={`green-bg-color secondary-btn white-color paragraph-bold ${className}`}
            style={fullwidth ? { width: "100%" } : { width: "280px" }}
            onClick={() => handleEnterRaffle()}
          >
           {creating ? " Entering Raffle...": "Enter Raffle"}
          </div>
        </div>
      </div>
    );
  } else if (watchlist && ended || !watchlist && ended) {
    return (
      <div className={"d-flex m-justify-content-center"}>
        <div
          className={`disabled secondary-btn paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          Raffle Ended
        </div>
      </div>
    );
  } else {
    return (
      <div className={"d-flex m-justify-content-center"}>
        <div
          className={`green-bg-color secondary-btn white-color paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
          onClick={() => handleEnterRaffle()}
        >
          Enter Raffle
        </div>
      </div>
    );
  }
};

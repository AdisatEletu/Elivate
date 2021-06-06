import React from "react";

export const WatchlistBtn = ({ className, fullwidth, status }) => {
  if (status === "remove") {
    return (
      <div className={"d-flex m-justify-content-center"}>
        <div
          className={`secondary-btn danger-bg-color white-color paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          {" "}
          Remove
        </div>
      </div>
    );
  } else if (status === "watchlist") {
    return (
      <div className={"d-flex m-justify-content-center"}>
        <div
          className={`secondary-bg-color secondary-btn white-color paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          {" "}
          Add to watchlist
        </div>
      </div>
    );
  } else if (status === "expired") {
    return (
      <div className={"d-flex m-justify-content-center"}>
        <div
          className={`disabled secondary-btn paragraph-bold ${className}`}
          style={fullwidth ? { width: "100%" } : { width: "280px" }}
        >
          {" "}
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
        >
          {" "}
          Enter Raffle
        </div>
      </div>
    );
  }
};

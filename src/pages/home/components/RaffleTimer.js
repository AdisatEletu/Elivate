import React from "react";
import DateCountdown from "react-date-countdown-timer";
export const RaffleTimer = ({
  timer,
  className,
  black,
  stacked,
  profile,
  ended,
  winner,
}) => {
  if (profile && !ended) {
    return (
      <div
        className={`raffle-profile-button light-blue-bg primary-color small-paragraph  m-raffle-btn text-align-center`}
      >
        <span>{timer}</span>
      </div>
    );
  } else if (ended && profile && !winner) {
    return (
      <div
        className={`raffle-button small-paragraph ${
          stacked ? "block" : "d-flex"
        } align-items-center m-raffle-btn ${className}`}
      >
        <span>You cannot play this raffle. winners to be announced soon </span>
      </div>
    );
  } else if (ended && profile && winner === "you") {
    return (
      <div
        className={`raffle-button small-paragraph ${
          stacked ? "block" : "d-flex"
        } align-items-center m-raffle-btn ${className}`}
      >
        <img
          alt={"wins"}
          src={require("../../../assets/icons/confetti 1.svg")}
        />{" "}
        <span> &nbsp; You won this!!! </span>
      </div>
    );
  } else
    return (
      <div
        className={`raffle-button small-paragraph align-items-center m-raffle-btn ${className}`}
      >
        <div>
          <img
            alt={"timer icon"}
            width={24}
            height={24}
            src={
              black
                ? require("../../../assets/icons/blackTimer.svg")
                : require("../../../assets/icons/timer.svg")
            }
          />{" "}
          &nbsp; Raffle starts in: &nbsp;
        </div>
        <div>
          <DateCountdown dateTo={timer} />
        </div>
      </div>
    );
};

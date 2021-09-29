import React from "react";

export const Ticket = ({ ticket, className }) => {
  return (
    <>
      <div className={`ticket-details-holder m-display-none ${className}`}>
        <div
          className={"ticket-details text-align-center small-paragraph-bold"}
        >
          <img
            src={require("../../../assets/icons/ticket.svg")}
            className={"mt-4 ticket-text"}
            alt={"icon"}
          />
          <div className={" ticket-text text-align-center"}>
            {ticket} {ticket > 1 ? "tokens" : "token"}
          </div>
        </div>
      </div>

      <div className={`ticket-details-holder p-2 m-show ${className}`}>
        <div
          className={"m-ticket-details text-align-center small-paragraph-bold"}
        >
          <div className=" ticket-logo-holder">
            <img
              src={require("../../../assets/icons/ticket.svg")}
              className="ticket-icon-size"
              alt={"icon"}
            />
          </div>
          <div className={"fs-10 text-align-center m-ticket-text"}>{ticket}</div>
        </div>
      </div>
    </>
  );
};

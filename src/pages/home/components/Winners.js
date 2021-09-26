import React from "react";
import { useEffect } from "react";
import { useWinners } from "../../winners/useWinners";

export const HomepageWinners = () => {
  const { winners, fetchWinners, loading } = useWinners();

  useEffect(() => {
    fetchWinners(4);
  }, []);
  return (
    <div
      className={
        "col-md-12 winners-holder-div justify-content-center m-flex m-align-items-center"
      }
    >
      {winners && winners.length > 0 ? (
        winners.map((winner) => (
          <div key={winner.id} className={" col-md-3"}>
            <div className={"winners-div"}>
              <div className={"price-won"} />

              <div className={"d-flex align-items-center flex-column"}>
                <div
                  className={"winners-profile"}
                  style={{
                    backgroundImage: `url(${winner?.winner?.image_url})`,
                  }}
                />
                <div className={"title2 mt-3"}>{winner.name}</div>
                <div className={"paragraph mt-2"}>
                  <span className={"overline light-grey"}>Won by</span>
                  {` ${winner?.winner?.first_name} ${winner?.winner?.last_name}`}
                </div>
                <div className={"d-flex mt-3"}>
                  <img
                    alt={"winner"}
                    src={require("../../../assets/icons/ticket.svg")}
                  />
                  &nbsp;
                  <div>{winner?.number_of_tickets} tokens</div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No winners yet!</div>
      )}
    </div>
  );
};

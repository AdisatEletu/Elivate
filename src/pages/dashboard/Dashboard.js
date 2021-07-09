import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { raffleData } from "../../utils/mock";
import { RaffleCard } from "../home/components/RaffleCards";
import Pagination from "react-js-pagination";
import { useRaffle } from "../raffles/useRaffle";
import { useWatchlist } from "../watchlist/useWatchlist";
import { EmptyData } from "../../components/EmptyData";

const Dashboard = () => {
  // const {  raffles,
  //   fetching,
  //   getRaffles} = useRaffle;

  const { raffles, fetching, getWatchlist } = useWatchlist();

  useEffect(() => {
    getWatchlist();
  }, []);
  return (
    <div>
      <div className={"dashboard-stats-holder light-blue-bg dashboard-grid"}>
        <div className={"small-paragraph dashboard-stats"}>
          <div className={"small-paragraph"}>Total Real tickets used</div>
          <div className={"biggestText fw-400"}>3000</div>
        </div>
        <div className={"small-paragraph dashboard-stats"}>
          <div className={"small-paragraph"}>Total tickets available</div>
          <div className={"biggestText fw-400"}>30</div>
        </div>
        <div className={"small-paragraph dashboard-stats"}>
          <div className={"small-paragraph"}>Total raffles participated</div>
          <div className={"biggestText fw-400"}>100</div>
        </div>
        <div className={'small-paragraph dashboard-stats'}>
          <div className={'small-paragraph'}>
            Total tickets available
          </div>
          <div className={'biggestText fw-400'}>
            30
          </div>
        </div>
        <div className={'small-paragraph dashboard-stats'}>
          <div className={'small-paragraph'}>
            Total raffles participated
          </div>
          <div className={'biggestText fw-400'}>
            100
          </div>
        </div>
        <div className={'d-flex justify-content-center primary-bg-color mt-6'}>
        <div className={"small-paragraph dashboard-stats"}>
          <div className={"small-paragraph"}>Total raffles won</div>
          <div className={"biggestText fw-400"}>3</div>
        </div>
      </div>
      <div className={"profile-card mt-6"}>
        <div className={"header3  "}>Your Wishlist</div>
        {raffles.length > 0 ? (
          <div className={"card-grid mt-4 "}>
            {raffles.map((raffle, index) => (
              <RaffleCard
                key={index}
                raffle={raffle}
              />
            ))}
          </div>
        ) : (
          <EmptyData />
        )}
        {raffles.length > 0 &&
        <div className={"d-flex justify-content-center primary-bg-color mt-6"}>
          <Pagination
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={10}
            pageRangeDisplayed={10}
            onChange={() => console.log("changed")}
            innerClass="pagination justify-content-center pagination-holder"
            itemClass="page-item"
            activeClass="active"
            linkClass="page-link"
          />
        </div>}
      </div>
    </div>
  );
};

export default Dashboard;

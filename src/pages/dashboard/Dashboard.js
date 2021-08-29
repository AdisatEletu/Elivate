import React, { useEffect, useState } from "react";
import { RaffleCard } from "../home/components/RaffleCards";
import Pagination from "react-js-pagination";
import {getRequest} from "../../helpers/requests"
import handleError from "../../helpers/handleError"
import { EmptyData } from "../../components/EmptyData";
import { useDashboard } from "./useDashboard";
import { PageLoader } from "../../components/Loaders";

const Dashboard = () => {
  // const {  raffles,
  //   fetching,
  //   getRaffles} = useRaffle;

  
  const [raffles, setRaffles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [limit, setLimit] = useState(2);
  const [activePage, setActivePage] = useState(1)
  const [total, setTotal] = useState(0)
  const getWatchlist = async () => {
    try {
      const { success, data } = await getRequest(`/customer/watchlist?per_page=${activePage}&limit=${limit}`);
      if (success) {
        setRaffles(data?.data);
        setTotal(data?.total)
        setFetching(false);
      }
    } catch (e) {
      handleError(e);
    }
  };

  const { dashboard, fetchStats, loading } = useDashboard();
  useEffect(() => {
    getWatchlist();
  }, []);

  useEffect(() => {
    fetchStats()
  }, [activePage]);


  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
  };


  if (loading || fetching) {
    return <PageLoader />;
  } else {
    return (
      <div>
        <div className={"dashboard-stats-holder light-blue-bg dashboard-grid"}>
          <div className={"small-paragraph dashboard-stats"}>
            <div className={"small-paragraph"}>Total Real tokens used</div>
            <div className={"biggestText fw-400"}>{dashboard?.total_tickets_used || 0}</div>
          </div>
          <div className={"small-paragraph dashboard-stats"}>
            <div className={"small-paragraph"}>Total tokens available</div>
            <div className={"biggestText fw-400"}>{dashboard?.tickets_available || 0}</div>
          </div>
          <div className={"small-paragraph dashboard-stats"}>
            <div className={"small-paragraph"}>Total raffles participated</div>
            <div className={"biggestText fw-400"}>{dashboard?.total_raffles_participated || 0}</div>
          </div>

          <div className={"small-paragraph dashboard-stats"}>
            <div className={"small-paragraph"}>Total raffles won</div>
            <div className={"biggestText fw-400"}>0</div>
          </div>
        </div>
        <div className={"profile-card mt-6"}>
          <div className={"header3  "}>Your Wishlist</div>
          {raffles.length > 0 ? (
            <div className={"card-grid mt-4 "}>
              {raffles.map((raffle, index) => (
                <RaffleCard key={index} raffle={raffle} />
              ))}
            </div>
          ) : (
            <EmptyData />
          )}
          {raffles.length > 0 && (
            <div
              className={"d-flex justify-content-center primary-bg-color mt-6"}
            >
              <Pagination
                activePage={activePage}
                itemsCountPerPage={limit}
                totalItemsCount={total}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
                innerClass="pagination justify-content-center pagination-holder"
                itemClass="page-item"
                activeClass="active"
                linkClass="page-link"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Dashboard;

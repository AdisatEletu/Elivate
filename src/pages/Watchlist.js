import React, { useEffect, useState } from "react";
import { setSubHeaderAction } from "../../redux/actions/uiActions";
import { connect } from "react-redux";
import { Filter } from "../home/components/Filter";
import { RaffleCard } from "../home/components/RaffleCards";
import Pagination from "react-js-pagination";
import PageTitle from "../../components/title/PageTitle";
import "../../index.css";
import { EmptyData } from "../../components/EmptyData";

import { PageLoader } from "../../components/Loaders";
import { useWatchlist } from "./useWatchlist";

const Watchlist = (props) => {
  const [activePage, setActivePage] = useState(1);
  const {raffles,
    fetching,
    getWatchlist} = useWatchlist()

  useEffect(() => {
    getWatchlist();
    setSubHeaderAction("Ongoing and upcoming Raffles");
  }, []);

  const handlePageChange = (pageNumber) => {
    console.log({ pageNumber });
  };

  // const onClickRaffle = (id) => {
  //   window.location.href = `/raffles/${id}/details`;
  // };

  return (
    <div className={"mt-4"}>
      <PageTitle text={"Here’re your watchlist"} hideBack />
      <Filter />
      {fetching ? (
        <PageLoader />
      ) : (
        <div className={"mt-6 card-grid"}>
          {raffles.length > 0 ? raffles.map((raffle, index) => (
            <RaffleCard
              key={index}
             raffle={raffle}
            />
          )): <EmptyData/>}
        </div>
      )}
      <div className={"d-flex justify-content-center primary-bg-color mt-6"}>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={10}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          innerClass="pagination justify-content-center pagination-holder"
          itemClass="page-item"
          activeClass="active"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    header: state.headerReducer,
  };
};

export default connect(mapStateToProps, { setSubHeaderAction })(Watchlist);

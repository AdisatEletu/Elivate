import React, { useEffect } from "react";
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

const Watchlist = () => {
  const { 
    raffles,
    fetching,
    getWatchlist,
    handlePageChange,
    activePage,
    per_page,
    setWatchlist,
    total} = useWatchlist()

  useEffect(() => {
    setSubHeaderAction("Ongoing and upcoming Raffles");
  }, []);

  useEffect(()=>{
    getWatchlist();
  },[activePage])

  

  // const onClickRaffle = (id) => {
  //   window.location.href = `/raffles/${id}/details`;
  // };

  return (
    <div className={"mt-4"}>
      <PageTitle text={"Here’re your watchlist"} hideBack />
      <Filter  setRaffles={setWatchlist} sortEndpoint={"/customer/watchlist?"} searchEndpoint={"/customer/watchlist"} endpoint={"/customer/watchlist?category="}/>
      {fetching ? (
        <PageLoader />
      ) : (
        <>
       { raffles.length > 0 ?
        <div className={"mt-6 card-grid"}>
          {raffles?.map((raffle, index) => (
            <RaffleCard
              key={index}
             raffle={raffle}
            />
          ))}
        </div>
        : <EmptyData/>}
        </>
      )}
      <div className={"d-flex justify-content-center mt-6"}>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
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

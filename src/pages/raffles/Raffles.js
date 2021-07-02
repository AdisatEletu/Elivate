import React, { useEffect, useState } from "react";
import { setSubHeaderAction } from "../../redux/actions/uiActions";
import { connect } from "react-redux";
import { Filter } from "../home/components/Filter";
import { RaffleCard } from "../home/components/RaffleCards";
import Pagination from "react-js-pagination";
import PageTitle from "../../components/title/PageTitle";
import "../../index.css";
import { useRaffle } from "./useRaffle";
import { EmptyData } from "../../components/EmptyData";
import { PageLoader } from "../../components/Loaders";
import { getRequest } from "../../helpers/requests";

const Raffles = (props) => {
  const [activePage, setActivePage] = useState(1);

  const { raffles, fetching, getRaffles } = useRaffle();

  useEffect(() => {
    getRaffles()
    setSubHeaderAction("Ongoing and upcoming Raffles");
  },[]);

  const handlePageChange = (pageNumber) => {
 
  };

  const onClickRaffle = (id) => {
    window.location.href = `/raffles/${id}/details`;
  };


  return (
    <div className={"mt-4"}>
      {/*{header.title}*/}
      <PageTitle text={"Ongoing and upcoming Raffles"} hideBack />
      <Filter />
      {fetching ? (
        <PageLoader />
      ) : (
        <div>
        {raffles.length > 0 ?
        <div className={"mt-6 card-grid"}>
           {raffles.map((raffle, index) => (
              <RaffleCard
                key={index}
                description={raffle.description}
                timer={raffle.start_date}
                status={raffle.status}
                charity={raffle.charity}
                ticket={raffle.ticket}
                title={raffle.title}
                imgUrl={raffle.imgUrl}
                onClick={onClickRaffle}
                raffle={raffle}
              />
            ))
           } 
          </div>
          : (
            <EmptyData />
          )}
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

export default connect(mapStateToProps, { setSubHeaderAction })(Raffles);

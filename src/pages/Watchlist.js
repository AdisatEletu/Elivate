import React, {useEffect, useState} from "react";
import {setSubHeaderAction} from "./../redux/actions/uiActions";
import {connect} from "react-redux";
import {Filter} from "./home/components/Filter";
import {RaffleCard} from "./home/components/RaffleCards";
import Pagination from "react-js-pagination";
import PageTitle from "./../components/title/PageTitle";
import '../index.css'
import {raffleData} from "../utils/mock";

const Watchlist = (props) => {
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    setSubHeaderAction("Ongoing and upcoming Raffles")
  });
  
  const handlePageChange = (pageNumber) =>{
    console.log({pageNumber})
  };
  
  const onClickRaffle = (id) =>{
    window.location.href=`/raffles/${id}/details`
  };
  
  // console.log(header);
  
  return (
    <div className={'mt-4'}>
      {/*{header.title}*/}
      <PageTitle text={'Here’re your watchlist'} hideBack/>
      <Filter/>
      <div className={'mt-6 card-grid'}>
        {raffleData.map((raffle, index) =>
          <RaffleCard key={index} description={raffle.description}
                      timer={raffle.timer}
                      status={raffle.status}
                      charity={raffle.charity}
                      ticket={raffle.ticket}
                      title={raffle.title}
                      imgUrl={raffle.imgUrl}
                      onClick={onClickRaffle}
          />
        )}
      </div>
      
      <div className={'d-flex justify-content-center primary-bg-color mt-6'}>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={10}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          innerClass='pagination justify-content-center pagination-holder'
          itemClass='page-item'
          activeClass='active'
          linkClass='page-link'
        />
      </div>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    header: state.headerReducer
  }
};

export default connect(mapStateToProps, {setSubHeaderAction})(Watchlist);
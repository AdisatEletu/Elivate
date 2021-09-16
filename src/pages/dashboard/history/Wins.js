import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import {RaffleCard} from "../../home/components/RaffleCards";
import { useCustomerRaffle } from "./useHistory";
const  Win =()=>{

  const {wins, fetching, getWins, per_page, total, handlePageChange, activePage} = useCustomerRaffle() 
  useEffect(()=>{
    getWins()
  },[activePage])
  return (
    <>
    <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
      {wins && wins.map((raffle, index) => (
        <RaffleCard key={index} getRaffles={getWins} winner={'you'} profile raffle={raffle} />
      ))}
    </div>
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
  </>
  )
};

export default Win
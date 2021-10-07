import React, {useEffect } from "react";
import { RaffleCard } from "../../home/components/RaffleCards";
import { useCustomerRaffle } from "./useHistory";

import Pagination from "react-js-pagination";

const Raffles = () => {
  const {
    raffles,
    getRaffles,
    handlePageChange,
    activePage,
    per_page,
    raffleTotal,
  } = useCustomerRaffle();
  useEffect(() => {
    getRaffles();
  }, [activePage]);
  return (
    <>
      <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
        {raffles?.map((raffle, index) => (
          <RaffleCard key={index} getRaffles={getRaffles} raffle={raffle} />
        ))}
      </div>
      <div className={"d-flex justify-content-center mt-6"}>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={per_page}
          totalItemsCount={raffleTotal}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          innerClass="pagination justify-content-center pagination-holder"
          itemClass="page-item"
          activeClass="active"
          linkClass="page-link"
        />
      </div>
    </>
  );
};

export default Raffles;

import { useState } from "react";
import handleError from "../../helpers/handleError";
import { getRequest } from "../../helpers/requests";

export const useRaffle = () => {
  const [raffles, setRaffles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [per_page, setPerPage] = useState(20);
  const [activePage, setActivePage] = useState(1);

  const [total, setTotal] = useState(0);
  const getRaffles = async () => {
    try {
      const { data, success } = await getRequest(`/customer/raffle/all`);
      if (success) {
        setRaffles(data.data);
        setTotal(data.total);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return {
    raffles,
    fetching,
    getRaffles,
    setActivePage,
    activePage,
    per_page,
    total,
    setRaffles,
  };
};

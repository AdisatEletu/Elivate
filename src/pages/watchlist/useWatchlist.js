import { useState } from "react";
import handleError from "../../helpers/handleError";
import { getRequest } from "../../helpers/requests";


export const useWatchlist =()=>{
  const [raffles, setWatchlist] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [per_page] = useState(20);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState(0);
  const getWatchlist = async () => {
    try {
      const { success, data } = await getRequest(`/customer/watchlist?per_page=${per_page}&page=${activePage}`);
      if (success) {
        setWatchlist(data?.data);
        setTotal(data?.total)
      }
      setFetching(false);
    } catch (e) {
      setFetching(false);
      handleError(e);
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

    return {
      raffles,
      fetching,
      getWatchlist,
      handlePageChange,
      activePage,
      per_page,
      total,
      setWatchlist
    }
}
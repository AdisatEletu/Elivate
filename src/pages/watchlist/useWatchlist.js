import { useState } from "react";
import handleError from "../../helpers/handleError";
import { getRequest } from "../../helpers/requests";


export const useWatchlist =()=>{
  const [raffles, setRaffles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const getWatchlist = async () => {
    try {
      const { success, data } = await getRequest("/customer/watchlist");
      if (success) {
        setRaffles(data?.data);
        console.log({ data });
        setFetching(false);
      }
    } catch (e) {
      handleError(e);
    }
  };

    return {
      raffles,
      fetching,
      getWatchlist
    }
}
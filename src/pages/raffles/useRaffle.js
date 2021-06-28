import { useState } from "react";
import handleError from "../../helpers/handleError";
import { getRequest } from "../../helpers/requests";


export const useRaffle =()=>{
  const [raffles, setRaffles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const getRaffles = async () => {
    try {
      const { data, success } = await getRequest("/customer/raffle");
      if (success) {
        setRaffles(data.data);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

    return {
      raffles,
      fetching,
      getRaffles
    }
}
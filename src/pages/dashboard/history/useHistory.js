import { useState } from "react";
import handleError from "../../../helpers/handleError";
import { getRequest } from "../../../helpers/requests";

export const useCustomerRaffle = () => {
  const [raffles, setRaffles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [per_page, setPerPage] = useState(4);
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([]);
  const [wins, setWins] = useState([]);
  const [refferals, setRefferals] = useState([]);
  const [total, setTotal] = useState(0);
  const getRaffles = async () => {
    try {
      const { data, success } = await getRequest(
        `/customer/raffle?per_page=${per_page}&page=${activePage}`
      );
      if (success) {
        setRaffles(data.data);
        setTotal(data.total);
        console.log(data.total);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

  const getWins = async () => {
    try {
      const { data, success } = await getRequest(
        `/customer/raffle/my-wins?per_page=${per_page}&page=${activePage}`
      );
      if (success) {
        setWins(data.data);
        setTotal(data.total);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

  const getRefferals = async () => {
    try {
      const { data, success } = await getRequest(
        `/customer/profile/referred?per_page=${per_page}&page=${activePage}`
      );
      if (success) {
        setRefferals(data.data);
        setTotal(data.total);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

  const getTransactions = async ()=>{
    try {
      const {success, data} = await getRequest(`/customer/transactions?per_page=${per_page}&page=${activePage}`);
      if(success){
          setData(data.data);
        setTotal(data.total)
      }
      setFetching(false)
    } catch (error) {
        handleError(error)
        setFetching(false)
    }
  }

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return {
    raffles,
    fetching,
    getRaffles,
    setActivePage,
    handlePageChange,
    getRefferals,
    activePage,
    per_page,
    total,
    getWins,
    wins,
    refferals,
    setRefferals,
    getTransactions,
    setData,
    data
  };
};

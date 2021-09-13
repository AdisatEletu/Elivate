import { useState } from "react";
import { doAlert } from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";
import { getRequest, putRequest } from "../../../helpers/requests";
export const useTicket = ({ user }) => {
  const [tickets, setTickets] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const fetchTickets = async () => {
    try {
      const { data, success } = await getRequest(`/customer/ticket-bundle?per_page=${limit}&page=${page}`);
      if (success) {
        setTickets(data.data);
        setTotal(data?.total)
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

  const buyTickets = async (id, index) => {
    
    setLoading({...loading, [index]: true});
    try {
      const { data, success } = await putRequest(
        `/customer/ticket-bundle/${id}`
      );
      if (success) {
        window.location.href = data.url;
      }
      setLoading(false);
    } catch (error) {
      handleError(error);
      setLoading(false);
    }
  };


  const handlePageChange = (pageNumber) => {
    setPage(pageNumber)
  };


  return {
    fetchTickets,
    fetching,
    tickets,
    setAmount,
    buyTickets,
    loading,
    total,
    handlePageChange,
    limit,
    page
  };
};

import { useState } from "react";
import { doAlert } from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";
import { getRequest, putRequest } from "../../../helpers/requests";

export const useTicket = ({user}) => {
  const [tickets, setTickets] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [ref, setRef] = useState({});
  const [amount, setAmount] = useState(0);
  const fetchTickets = async () => {
    try {
      const { data, success } = await getRequest("/customer/ticket-bundle");
      if (success) {
        setTickets(data.data);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };



  const buyTickets = async (id) => {
    try {
      const { data, success } = await putRequest(`/customer/ticket-bundle/${id}`);
      if (success) {
        window.location.href=data.url
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };


  const config = {
    reference: (new Date()).getTime(),
    email: user.email,
    amount: (amount).toLocaleString(),
    publicKey: "pk_test_bae54c0032893f6cae06e53cd7faa17da05d4e4f",
};

console.log({config})
  // you can call this function anything
  const onSuccess = (reference) => {

    window.open=(`/payment/response/${reference.trxref}`)
    // Implementation for whatever you want to do with reference and after success call.
    setRef(reference)
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want t
    
    window.location.href=(`/payment/response/${ref.trxref}`)
    if(ref.message === 'Approved'){
        doAlert("Payment Successful", 'success')
    }
  }

  return {
    fetchTickets,
    fetching,
    tickets,
    onClose,
    onSuccess,
    config, setAmount,
    buyTickets

  };
};

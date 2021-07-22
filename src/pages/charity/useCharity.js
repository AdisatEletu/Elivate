import { useState } from "react";
import { getRequest } from "../../helpers/requests";
import { doAlert } from "../../components/alert/AlertComponent";
import handleError from "../../helpers/handleError";
import axios from "axios";
export const useCharity = () => {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCharities = async () => {
    try {
      const { success, data, error } = await getRequest("/customer/charity");

      console.log(data, success);

      if (success) {
        console.log(data.data, success);
        setCharities(data?.data);
        setLoading(false);
      } else {
        setLoading(false);
        // doAlert(error?.response?.data?.message);
      }
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };
  return {
    fetchCharities,
    charities,
    loading
  };
};

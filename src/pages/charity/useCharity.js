import { useState } from "react";
import { getRequest } from "../../helpers/requests";
import handleError from "../../helpers/handleError";
export const useCharity = () => {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCharities = async () => {
    try {
      const { success, data} = await getRequest("/customer/charity");

      if (success) {
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

import { useState } from "react";
import handleError from "../../helpers/handleError";
import { getRequest, putRequest } from "../../helpers/requests";
export const useDashboard = () => {
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dashboard, setDashboard] = useState(0);
  const fetchStats = async () => {
    try {
      const { data, success } = await getRequest("/customer/dashboard")
      if(success){
        setDashboard(data);
      }
      setLoading(false);
    } catch (error) {
      handleError(error);
      setLoading(false);
    }
  };



  return {
    fetchStats,
    loading,
    dashboard,
  };
};

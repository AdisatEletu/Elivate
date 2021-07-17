import { useState } from "react";
import handleError from "../../../helpers/handleError";
import { getRequest } from "../../../helpers/requests";
import { useRaffle } from "../../raffles/useRaffle";

export const useFilter = ({endpoint,setRaffles}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


console.log({endpoint})
  const getCategories = async () => {
    try {
      const { data, success } = await getRequest(`/customer/category`);
      if (success) {
        setCategories(data.data);
      }
      setLoading(false);
    } catch (error) {
      handleError(error);
      setLoading(false);
    }
  };
  const handleChange = async (value) => {
    console.log(`selected ${value}`);
    const {data, success} = getRequest(`${endpoint}${value}`)
    if(success){
        setRaffles(data)
    }
    
  };

  return {
    categories,
    getCategories,
    loading,
    handleChange,
  };
};

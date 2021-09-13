import { useState } from "react";
import handleError from "../../../helpers/handleError";
import { getRequest } from "../../../helpers/requests";

export const useFilter = ({ endpoint, setRaffles,sortEndpoint }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
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
    const { data, success } = await getRequest(`${endpoint}${value}`);
    if (success) {
      setRaffles(data.data);
    }
  };

  const handleSortChange = async (value) => {
    const { data, success } = await getRequest(`${sortEndpoint}${value}`);
    if (success) {
      setRaffles(data.data);
    }
  };

  const onClickSearch = async (value) => {
    const { data, success } = await getRequest(`${sortEndpoint}name=${searchValue}`);
    if (success) {
      setRaffles(data.data);
    }
  };

  const handleSearchChange = async (value) => {
    setSearchValue(value)
  };

  

  return {
    categories,
    getCategories,
    loading,
    handleChange,
    handleSortChange,
    handleSearchChange,
    searchValue,
    onClickSearch
  };
};

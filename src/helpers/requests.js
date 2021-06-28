import axios from 'axios';

export const getRequest = async (endpoint) => {
  try {
    const res = await axios.get(endpoint);
    const {success, data} = res.data;
    if (success) {
      if (res.data.count) {
        let count = res.data.count;
        return {success, data, count};
      }
      return {success, data};
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    return {success: false, error};
  }
};

export const postRequest = async (endpoint, payload, options) => {
  try {
    const res = await axios.post(endpoint, payload, options);
    const {success, data, message, error} = res.data;
    if (success) {
      return {success, data, message,error};
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    return {success: false, error};
  }
};

export const putRequest = async (endpoint, payload) => {
  try {
    const res = await axios.put(endpoint, payload);
    const {success, data, message} = res.data;
    if (success) {
      return {success, data, message};
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    return {success: false, error};
  }
};


export const deleteRequest = async (endpoint, payload) => {
  try {
    const res = await axios.delete(endpoint, payload);
    const {success, data, message} = res.data;
    if (success) {
      return {success, data, message};
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    return {success: false, error};
  }
};

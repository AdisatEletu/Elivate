import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import {
  getNotificationCount,
  setNotificationCount,
} from "./redux/actions/uiActions";
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Routes from "./config/Routes";

import "./index.css";
import "./responsive.css";
import "antd/dist/antd.css";

export const initialize = async ( axiosLib) => {
  axiosLib.defaults.baseURL = "https://desolate-fjord-54053.herokuapp.com/api/";
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;

  if (localStorage.user) {
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
    const count = await getNotificationCount();
    store.dispatch(setNotificationCount(count));
  }
};

const setInterceptor = async (axiosLib) => {
  return axiosLib.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 && !window.location.href.includes("/login")) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = "/login";
        logoutUser();
      }
      return Promise.reject(error);
    }
  );
};


const App = () => {
  setInterceptor(axios);
  initialize( axios);
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;

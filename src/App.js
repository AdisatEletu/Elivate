import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Routes from "./config/Routes";

import "./index.css";
import "./responsive.css";

export const initialize = (windowObj, axiosLib) => {
  axiosLib.defaults.baseURL = "https://desolate-fjord-54053.herokuapp.com/api/";
};


 const setInterceptor = (axiosLib) => {
  return axiosLib.interceptors.response.use((response) => {
    return (response);
  }, (error) => {
    const status = error.response.status;
    if (status === 401 && !window.location.href.includes("/login")) {
      localStorage.clear();
      window.location.href = "/login";
      logoutUser();
    }
    return Promise.reject(error);
  });
};
  axios.defaults.headers.common["Authorization"] = localStorage.jwt;
  //decode token and get user
  const decoded = jwt_decode(localStorage.jwt);
  //set current user
  //sets persistent session
  if (localStorage.user)
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));

export const verifyToken = (axiosLib) => {
  const bearerToken = localStorage.getItem("jwt");
  if (!bearerToken) return;
  axiosLib.defaults.headers.common["Authorization"] = bearerToken;
  
  const decoded = jwt_decode(bearerToken);
  
  setCurrentUser(JSON.parse(localStorage.getItem("user")))(store.dispatch);
  
  
  // check for expired token
  const currentTime = Date.now() / 1000;
  
  
  if (decoded.exp < currentTime) {
    logoutUser()(store.dispatch);
  }
};

const App = () => {
  setInterceptor(axios);
  initialize(window, axios);
  verifyToken(axios);
  
  return (
    <>
      <Provider store={store}>
        <Routes/>
      </Provider>
      {/*<ServiceWorkerWrapper />*/}
    </>
  );
};

export default App;

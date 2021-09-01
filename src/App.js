import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import {getNotificationCount} from "./redux/actions/uiActions"
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Routes from "./config/Routes";

import "./index.css";
import "./responsive.css";
import 'antd/dist/antd.css'


export const initialize = async (windowObj, axiosLib) => {
  axiosLib.defaults.baseURL = "https://desolate-fjord-54053.herokuapp.com/api/";
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
  //decode token and get user
  // const decoded = jwt_decode(localStorage.token);
  //set current user
  //sets persistent session
  

 // console.log("get")
  if (localStorage.user)
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
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
 

// export const verifyToken = (axiosLib) => {
//   const bearerToken = localStorage.getItem("jwt");
//   if (!bearerToken) return;
//   axiosLib.defaults.headers.common["Authorization"] = bearerToken;
  
//   const decoded = jwt_decode(bearerToken);
  
//   setCurrentUser(JSON.parse(localStorage.getItem("user")))(store.dispatch);
  
  
  // check for expired token
//   const currentTime = Date.now() / 1000;
  
  
//   if (decoded.exp < currentTime) {
//     logoutUser()(store.dispatch);
//   }
// };

const App = () => {
  setInterceptor(axios);
  initialize(window, axios);
  // verifyToken(axios);
  getNotificationCount()
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

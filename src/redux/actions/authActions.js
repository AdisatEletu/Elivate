import {
  IS_LOGGING_IN,
  DONE_LOGGING_IN,
  SET_USER,
  LOGOUT_USER,
} from "../types";
import axios from "axios";

export const setCurrentUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, expirationTime * 1000);
  };
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch({ type: IS_LOGGING_IN });
  //login logic here.
  // when done, dispatch({type: DONE_LOGGING_IN})
  const url = "https://desolate-fjord-54053.herokuapp.com/api/customer/login";
  const authData = {
    email,
    password,
  };

  return axios
    .post(url, authData) // whatever operation
    .then((user) => {
      try {
        const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("expirationTime", expirationTime);
        localStorage.setItem("token", user.data.data.token);

        dispatch({ type: DONE_LOGGING_IN });
        dispatch(setCurrentUser(user));
        //Take note of the checkAuthTimeout. It affected my code previously..
        dispatch(checkAuthTimeout(3600));
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
      // dispatch(authFail(error));
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT_USER });
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logoutUser());
    } else {
      const expirationTime = new Date(localStorage.getItem("expirationTime"));
      if (expirationTime < new Date()) {
        dispatch(logoutUser());
      } else {
        const user = localStorage.getItem("user");
        dispatch(setCurrentUser(user));
        dispatch(
          checkAuthTimeout(
            (expirationTime.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

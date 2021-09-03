import axios from "axios";
import {
  IS_LOGGING_IN,
  DONE_LOGGING_IN,
  SET_USER,
  LOGOUT_USER,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import { doAlert } from "../../components/alert/AlertComponent";
import { postRequest, getRequest } from "../../helper/request";
import handleError from "../../helpers/handleError";

export const loginUser = (email, password, history) => async (dispatch) => {
  try {
    dispatch({ type: IS_LOGGING_IN });
    const { data, success, error } = await postRequest("/customer/login", {
      email,
      password,
    });
    if (success) {
      dispatch({ type: DONE_LOGGING_IN });

      dispatch(setCurrentUser(data));

      localStorage.token = data.token;
      localStorage.user = JSON.stringify(data);
      doAlert("successfully logged in");
      window.location.href = "/";
    }else{
      doAlert(error.response.data.message)
      dispatch({ type: DONE_LOGGING_IN });
    }
  } catch (e) {
    dispatch({ type: DONE_LOGGING_IN });
    handleError(e);
  }
};
export const setCurrentUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};

export const getUser = () => async (dispatch) => {
  console.log('here')
  try {
    const { data, success } = await getRequest("/customer/profile");
    console.log("called")
    console.log({data})
    if (success) {
      dispatch(setCurrentUser(data));
      localStorage.user = JSON.stringify(data);
    }
  } catch (e) {
    handleError(e);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

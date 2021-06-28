// import {
//   IS_LOGGING_IN,
//   DONE_LOGGING_IN,
//   SET_USER,
//   LOGOUT_USER,
// } from "../types";
// import axios from "axios";
// import { postRequest } from "../../helper/request";

// export const setCurrentUser = (user) => (dispatch) => {
//   dispatch({ type: SET_USER, payload: user });
// };

// export const checkAuthTimeout = (expirationTime) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(logoutUser());
//     }, expirationTime * 1000);
//   };
// };

// export const loginUser = (email, password) => async (dispatch) => {
//   dispatch({ type: IS_LOGGING_IN });
//   //login logic here.
//   // when done, dispatch({type: DONE_LOGGING_IN})
//   const url = "https://desolate-fjord-54053.herokuapp.com/api/customer/login";
//   const authData = {
//     email,
//     password,
//   };

//   const {data, success} = await postRequest(url, authData);
//   console.log({data})

//   try {
//   if(success){
//     const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
//     localStorage.setItem("expirationTime", expirationTime);
//     localStorage.setItem("token",data.token);

//     dispatch({ type: DONE_LOGGING_IN });
//     dispatch(setCurrentUser(data));
//     //Take note of the checkAuthTimeout. It affected my code previously..
//     dispatch(checkAuthTimeout(3600));
    
//   }} catch (error) {
//     console.log(error);
//   }

// //   return axios
// //     .post(url, authData) // whatever operation
// //     .then((user) => {
// //       try {
       
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //       // dispatch(authFail(error));
// //     });
// };

// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem("expirationTime");
//   localStorage.removeItem("token");

//   dispatch({ type: LOGOUT_USER });
// };

// export const authCheckState = () => {
//   return (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       dispatch(logoutUser());
//     } else {
//       const expirationTime = new Date(localStorage.getItem("expirationTime"));
//       if (expirationTime < new Date()) {
//         dispatch(logoutUser());
//       } else {
//         const user = localStorage.getItem("user");
//         dispatch(setCurrentUser(user));
//         dispatch(
//           checkAuthTimeout(
//             (expirationTime.getTime() - new Date().getTime()) / 1000
//           )
//         );
//       }
//     }
//   };
// };


import axios from "axios";
import {
  IS_LOGGING_IN,
  DONE_LOGGING_IN,
  SET_USER,
  LOGOUT_USER
} from "../types";
import { v4 as uuidv4 } from "uuid";
import {doAlert} from "../../components/alert/AlertComponent";
import { postRequest } from "../../helper/request";
import handleError from "../../helpers/handleError";

export const loginUser = (email, password, history) => async dispatch => {
  try {
    dispatch({type: IS_LOGGING_IN});
    const {data, success} = await postRequest("/customer/login", {email, password});
    if (success) {
      dispatch({type: DONE_LOGGING_IN});

      setCurrentUser(data);

      localStorage.token = data.token;
      localStorage.user = JSON.stringify(data);
      doAlert("successfully logged in");
      window.location.href = ("/");
    } 
  } catch (e) {
    console.log(e);
    dispatch({type: DONE_LOGGING_IN});
    handleError(e)
  }
}
export const setCurrentUser = user => dispatch => {
  dispatch({ type: SET_USER, payload: user });
};
export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
};
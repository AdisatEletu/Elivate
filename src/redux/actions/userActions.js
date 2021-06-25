import {
   USER_DETAILS_START,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_FAIL
  } from "../types";
import axios from "axios";

export const userDetailsStart = () => (dispatch) => {
    dispatch({ type: USER_DETAILS_START });    
};
  
export const setUserDetailsSuccess = (userDetails) => (dispatch) => {
dispatch({ type: USER_DETAILS_SUCCESS, payload: userDetails });
};

export const userDetailsFail = (error) => (dispatch) => {
    dispatch({ type: USER_DETAILS_FAIL, error: error });    
};
  
export const fetchUserdetails = () => {
    return dispatch => {
        dispatch(userDetailsStart());
        const token = localStorage.getItem("token");

        axios.get('https://desolate-fjord-54053.herokuapp.com/api/customer/profile', {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
        }).then((res) => {
            console.log(res.data.data);
            dispatch(setUserDetailsSuccess(res.data.data));
        }).catch((error) => {
            console.log(error)
            dispatch(userDetailsFail(error));
        })
    }
}
 
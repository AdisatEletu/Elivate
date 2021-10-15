import {
  IS_LOGGING_IN,
  DONE_LOGGING_IN,
  SET_USER,
  LOGOUT_USER,
 PHONE_NOT_VERIFIED,
 PHONE_VERIFIED
       
} from "../types";

const initialState = {
  user: {},
  isLoggingIn: false,
  isAuthenticated: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGING_IN:
      return { ...state, isLoggingIn: true };
    case DONE_LOGGING_IN:
      return { ...state, isLoggingIn: false };
    case SET_USER:
      return { ...state, user: action.payload, isAuthenticated: true };
    case PHONE_NOT_VERIFIED:
      return { ...state, verified_number: false };
    case PHONE_VERIFIED:
      return { ...state, verified_number: true };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuthenticated: false };
    default:
      return state;
  }
};

export default auth;

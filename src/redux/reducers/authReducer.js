import {
  IS_LOGGING_IN,
  DONE_LOGGING_IN,
  SET_USER,
  LOGOUT_USER,
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
    case LOGOUT_USER:
      localStorage.clear();
      return { ...state, user: {}, isAuthenticated: false };
    default:
      return state;
  }
};

export default auth;

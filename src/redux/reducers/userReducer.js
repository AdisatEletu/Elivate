import { USER_DETAILS_START,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL } from '../types';

const initialState = {
  userDetails: {},
  loading: null,
  error: null,
};

const details = (state = initialState, action) => {
  switch (action.type) {
  case USER_DETAILS_START:
    return { ...state, loading: true };
  case USER_DETAILS_SUCCESS:
    return { ...state, userDetails: action.payload , loading: false};
  case USER_DETAILS_FAIL:
    return { ...state, loading: false, error: action.error };
  default:
    return state;
  }
};

export default details;

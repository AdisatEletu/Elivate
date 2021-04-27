import {SET_SUBHEADER} from "../types";

const initialState = {
  title: ''
};


export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBHEADER : {
      return {...state, title: action.payload}
    }
    default : {
      return state
    }
  }
};
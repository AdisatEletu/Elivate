import {SET_SUBHEADER,NOTIFICATION_COUNT} from "../types";

const initialState = {
  title: 'Hello World',
  notification_count: 0
};


export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBHEADER :
      return {title: action.payload};
    case NOTIFICATION_COUNT :
      return {notification_count: action.payload}
    default :
      return state
    
  }
};
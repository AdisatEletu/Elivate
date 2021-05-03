import {SET_SUBHEADER} from "../types";

const initialState = {
  title: 'Hello World'
};


export const headerReducer = (state = initialState, action) => {
  
  console.log({action});
  switch (action.type) {
    case SET_SUBHEADER :
      console.log({state});
      return {title: action.payload};
      
    default :
      return state
    
  }
};
import {SET_SUBHEADER} from '../types'


export const setSubHeaderAction = title => dispatch => {
  dispatch({type: SET_SUBHEADER, payload: title})
};
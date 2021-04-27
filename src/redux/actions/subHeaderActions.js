import {SET_SUBHEADER} from '../types'

const initialState = {
  title: ''
};


export const setSubHeaderAction = title => dispatch => {
  dispatch({type: SET_SUBHEADER, payload: title})
}
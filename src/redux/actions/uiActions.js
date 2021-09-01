import {SET_SUBHEADER} from '../types'
import {getRequest} from "../../helpers/requests"
import handleError from "../../helpers/handleError"
import {NOTIFICATION_COUNT} from "../types"
import axios from 'axios';

export const setSubHeaderAction = (title) => dispatch => {
  dispatch({type: SET_SUBHEADER, payload: title})
};

export const getNotificationCount= async (dispatch) => {

  try {
    const {data} = await axios.get('/customer/notifications/unread-count')
    console.log( "hcvgj", data)
    if(data.success){
      dispatch({type: NOTIFICATION_COUNT, payload: data?.data?.count})
    }
  } catch (error) {
    console.log(error)
  }
 
}
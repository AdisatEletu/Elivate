import { SET_SUBHEADER } from "../types";
import { getRequest } from "../../helpers/requests";
import handleError from "../../helpers/handleError";
import { NOTIFICATION_COUNT } from "../types";
import axios from "axios";

export const setSubHeaderAction = (title) => (dispatch) => {
  dispatch({ type: SET_SUBHEADER, payload: title });
};

export const getNotificationCount = async (dispatch) => {
  try {
    const { data } = await axios.get(
      "/customer/notifications/unread-count"
    );
    if (data.success) {
      // dispatch(setNotificationCount(data?.data?.count));
      return data?.data?.count
    }
  } catch (error) {
    console.log(error);
  }
};

export const setNotificationCount = (count) => (dispatch) => {
  dispatch({ type: NOTIFICATION_COUNT, payload: count });
};

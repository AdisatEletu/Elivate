import { combineReducers } from 'redux';
import auth from './authReducer';
import {headerReducer} from './uiReducer';
import details from "./userReducer";

export default combineReducers({
  auth, headerReducer, details
});

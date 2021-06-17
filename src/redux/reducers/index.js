import { combineReducers } from 'redux';
import auth from './authReducer';
import {headerReducer} from './uiReducer';

export default combineReducers({
  auth, headerReducer
});

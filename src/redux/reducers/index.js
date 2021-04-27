import { combineReducers } from 'redux';
import auth from './authReducer';
import {headerReducer} from './header';

export default combineReducers({
  auth, headerReducer
});

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const middleware = [logger, thunk];

const initialState = {};

const devTools =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, devTools);

export default store;

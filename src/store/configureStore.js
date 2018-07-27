import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import transactionsReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      transactionsData: transactionsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

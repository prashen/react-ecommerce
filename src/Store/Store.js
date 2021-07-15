
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger'
import Reducers from '../Reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  Reducers,
  composeEnhancer(applyMiddleware(thunk, logger)),
);

export default Store;
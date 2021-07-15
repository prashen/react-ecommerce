/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import HomeScreenReducer from '../Container/HomeScreen/HomeScreenReducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

const Reducers = combineReducers({
  home: HomeScreenReducer
});

export default Reducers;


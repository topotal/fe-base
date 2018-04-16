// @flow
import { combineReducers } from 'redux';
import routerReducer from '../router/routerReducer';

const reducers = combineReducers({
  router: routerReducer,
});
export default reducers;

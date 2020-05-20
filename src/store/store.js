import { createStore } from 'redux';
import rootReducer from '../reducers/reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const addCountryAction = {
  type: 'ADD_COUNTRY',
  payload: { country: 'Poland', cases: '19233', deaths: '888', recovered: '2444' },
};
store.dispatch(addCountryAction);

export default store;

// store.js

import { createStore, combineReducers } from 'redux';
import placeReducer from './src/reducers/placeReducer';

const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
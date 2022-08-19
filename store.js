// store.js

import { createStore, combineReducers } from 'redux';
import postReducer from './src/reducers/postReducer';

const rootReducer = combineReducers({
  posts: postReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
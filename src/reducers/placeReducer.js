// placeReducer.js

import { ADD_PLACE } from '../actions/types';

const initialState = {
  placeName: '',
  places: []
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          title: action.payload.title,
          status: action.payload.status,
          description: action.payload.description,
          image: action.payload.image,
          date: action.payload.date
        })
      };
    default:
      return state;
  }
}

export default placeReducer;
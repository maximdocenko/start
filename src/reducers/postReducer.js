import { ADD_POST } from '../actions/types';

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
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

export default postReducer;
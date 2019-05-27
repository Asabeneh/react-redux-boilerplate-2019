import { FETCH_POSTS } from '../actions/action-types';
const initialState = {
  posts: []
};

const postReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: [...payload.posts.data] };
    default:
      return state;
  }
};

export default postReducers;

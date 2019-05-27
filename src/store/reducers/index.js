import { combineReducers } from 'redux';
import reducerOne from './one-reduecer';
import todosReducer from './todos-reducer';
import postReducers from './post-reducers';

const allReducers = combineReducers({
  one: reducerOne,
  todos: todosReducer,
  posts:postReducers
});

export default allReducers;

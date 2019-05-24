import { combineReducers } from 'redux';
import reducerOne from './one-reduecer';
import todosReducer from './todos-reducer';

const allReducers = combineReducers({
  one: reducerOne,
  todos: todosReducer
});

export default allReducers;

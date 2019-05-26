import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './action-types';
export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: {
    todo: newTodo
  }
});
export const deleteTodo = index => ({
  type: DELETE_TODO,
  payload: {
    index: index
  }
});

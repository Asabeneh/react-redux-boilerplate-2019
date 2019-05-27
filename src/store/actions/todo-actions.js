import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './action-types';
export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: {
      todo: newTodo
    }
  };
};
export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: {
      index
    }
  };
};

export const editTodo = (index, todo) => {
  return {
    type: EDIT_TODO,
    payload: {
      index,
      todo
    }
  };
};
export const updateTodo = (index, newItem) => {
  return {
    type: 'UPDATE_TODO',
    payload: {
      index,
      todo: newItem
    }
  };
};

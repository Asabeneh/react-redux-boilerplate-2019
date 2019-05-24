import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actions/action-types";

const initialTodos = ['Item 1', 'Item 2', 'Item 3'];

const todosReducer = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload.todo];
    case DELETE_TODO:
      const todos = [...state];
      todos.splice(payload.index, 1);
      return todos;
    case EDIT_TODO:
      return;
    default:
      return state;
  }
};
export default todosReducer;

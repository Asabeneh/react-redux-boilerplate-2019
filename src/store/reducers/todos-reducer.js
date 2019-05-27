import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/action-types';

const initialTodos = {
  index: null,
  editing: false,
  todos: ['Item 1', 'Item 2', 'Item 3'],
  todo: ''
};

const todosReducer = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload.todo] };
    case DELETE_TODO:
      const todos = [...state.todos];
      todos.splice(payload.index, 1);
      return { ...state, todos: todos };
    case EDIT_TODO:
      return {
        ...state,
        editing: true,
        index: payload.index,
        todo: payload.todo
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: [...state.todos, payload.todo],
        editing: false
      };
    default:
      return state;
  }
};
export default todosReducer;

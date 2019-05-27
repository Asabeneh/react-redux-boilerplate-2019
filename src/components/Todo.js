import React from 'react';
import { deleteTodo, editTodo } from '../store/actions/todo-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Todo = ({ todo, index, deleteTodo, editTodo }) => {
  console.log(todo);
  return (
    <li>
      {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
      <button onClick={() => editTodo(index)}>Edit</button>
    </li>
  );
};

// const mapActionsToProps = dispatch => {
//   return {
//     deleteTodo: index => dispatch(deleteTodo(index))
//   };
// };

export default connect(
  null,
  { deleteTodo, editTodo }
)(Todo);

import React from 'react';
import { deleteTodo } from '../store/actions/todo-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <li>
      {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
      <button>Edit</button>
    </li>
  );
};

const mapActionsToProps = dispatch => {
  return {
    deleteTodo: index => dispatch(deleteTodo(index))
  };
};

export default connect(
  null,
  mapActionsToProps
)(Todo);

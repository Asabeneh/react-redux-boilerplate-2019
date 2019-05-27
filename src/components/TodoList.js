import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = props => {
  const todos = props.todos.map((todo, i) => {
    return <Todo key={'todo' + i} index={i} todo={todo} />;
  });
  return <ul>{todos}</ul>;
};

TodoList.propTypes = {};

export default TodoList;

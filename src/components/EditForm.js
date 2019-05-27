import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class EditForm extends Component {
  state = {
    editTask: this.props.editTask
  };
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleUpdate}>
          <input
            type="text"
            name="editTask"
            value={this.state.editTask}
            onChange={this.props.hanldeChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const index = state.todos.index;
  const todos = state.todos.todos;
  let todo = state.todos.editing && todos[index];
  return {
    editTask: todo
  };
};
export default connect(
  mapStateToProps,
  null
)(EditForm);

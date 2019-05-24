import React, { Component } from 'react';
import { addTodo } from '../store/actions/todo-actions';
import { connect } from 'react-redux';

class AddTodo extends Component {
  state = {
    task: ''
  };
  hanldeChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.hanldeChange}
            placeholder="Task"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapActionsToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(
  null,
  mapActionsToProps
)(AddTodo);

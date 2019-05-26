import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, minusOne, changeName } from './store/actions/count-actions';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const Home = props => <h1>Welcome Home</h1>;

const higherOrderComp = Comp => {
  return (
    <div style={{ background: 'gray' }}>
      <Comp />
    </div>
  );
};

class App extends Component {
  handleAdd = () => {};
  handleMinus = () => {};

  render() {
    console.log('props', this.props);
    const todos = this.props.todos.map(todo => (
      <li>
        {todo} <button>Delete</button>
      </li>
    ));
    return (
      <div className="App">
        {this.props.title}
        <h3>Number of todos:{this.props.todos.length}</h3>
        <AddTodo />
        <TodoList todos={this.props.todos} />
        <h1>WELCOME TO REACT REDUX</h1>
        <h1>Count:{this.props.count}</h1>
        <h2>Name:{this.props.name}</h2>
        {higherOrderComp(Home)}

        <button onClick={this.props.addOne}>Add One</button>
        <button onClick={this.props.minusOne}>Minus One</button>
        <button onClick={() => this.props.changeName('David')}>
          Change Name
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  // console.log(ownProps);
  return {
    count: state.one.count,
    name: state.one.name,
    todos: state.todos,
    title: `${ownProps.title} is a title`
  };
};
// const mapActionsToProps = dispatch => {
//   return {
//     addOne: () => dispatch(addOne()),
//     minusOne: () => dispatch(minusOne()),
//     changeName: () => dispatch(changeName('David'))
//   };
// };
export default connect(
  mapStateToProps,
  { addOne, minusOne, changeName }
)(App);

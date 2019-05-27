import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addOne, minusOne, changeName } from './store/actions/count-actions';
import { addTodo, updateTodo, editTodo } from './store/actions/todo-actions';
import { fetchPosts } from './store/actions/post-actions';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditForm from './components/EditForm';

async function square(n) {
  const result = n * n;
  return await result;
}

square(2).then(response => {
  console.log(response);
});

const Home = props => <h1>Welcome Home</h1>;
const higherOrderComp = Comp => {
  return (
    <div style={{ background: 'gray' }}>
      <Comp />
    </div>
  );
};

class App extends Component {
  state = {
    task: ''
  };
  // fetchData = async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const response = await axios.get(url);
  //   console.log('resonse outsite', response);
  //   this.setState({
  //     posts: response.data
  //   });

  // axios.get(url).then(response => {
  //   console.log('response inside', response);
  //   this.setState({
  //     posts: response.data
  //   });
  // });
  // };
  componentDidMount() {
    this.props.fetchPosts();
    // this.fetchData();
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       posts: data
    //     });
    //   })
    //   .catch(error => console.log(error));
  }
  hanldeChange = e => {
    const { name, value } = e.target;
    console.log('name', name, value);
    this.setState({
      [name]: value
    });
  };
  handleUpdate = e => {
    e.preventDefault(e);
    this.props.updateTodo(this.props.index, this.state.editTask);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
  };
  renderPosts = () => {
    const posts = this.props.posts;
    if (posts.length > 0) {
      return posts.map(post => (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ));
    }
    return <div> No value </div>;
  };
  render() {
    const {
      todos,
      todo,
      count,
      name,
      addOne,
      minusOne,
      changeName,
      title,
      index
    } = this.props;
    console.log(index, todo);
    console.log(this.props);
    return (
      <div className="App">
        {title}
        <h3>Number of todos:{todos.length}</h3>

        {this.props.editing ? (
          <EditForm
            editTodo={() => this.props.editTodo(index, todo)}
            hanldeChange={this.hanldeChange}
            handleUpdate={this.handleUpdate}
            editTask={this.props.editTask}
          />
        ) : null}

        <AddTodo
          task={this.state.task}
          hanldeChange={this.hanldeChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList todos={todos} />
        <h1>WELCOME TO REACT REDUX</h1>
        <h1>Count:{count}</h1>
        <h2>Name:{name}</h2>
        {higherOrderComp(Home)}

        <button onClick={addOne}>Add One</button>
        <button onClick={minusOne}>Minus One</button>
        <button onClick={() => changeName('David')}>Change Name</button>
        <h1>Posts</h1>
        <h3>
          Number of posts:
          {this.props.posts.length > 0 ? this.props.posts.length : 'no value'}
        </h3>
        {this.renderPosts()}

        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const index = state.todos.index;
  const todos = state.todos.todos;
  let todo = state.todos.editing && todos[index];
  console.log('todos', todos);
  console.log('index', index);
  console.log(todo);
  console.log(state);
  // console.log(ownProps);
  console.log(state);

  return {
    count: state.one.count,
    name: state.one.name,
    todos: state.todos.todos,
    todo: todo,
    editing: state.todos.editing,
    title: `${ownProps.title} is a title`,
    index: state.todos.index,
    posts: state.posts.posts
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
  { addOne, minusOne, changeName, addTodo, editTodo, updateTodo, fetchPosts }
)(App);

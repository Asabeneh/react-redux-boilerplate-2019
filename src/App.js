import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, minusOne, changeName } from './index';
import './App.css';

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
    return (
      <div className="App">
        {this.props.title}
        <h1>WELCOME TO REACT REDUX</h1>
        <h1>Count:{this.props.count}</h1>
        <h2>Name:{this.props.name}</h2>
        {higherOrderComp(Home)}
        <button onClick={this.props.addOne}>Add One</button>
        <button onClick={this.props.minusOne}>Minus One</button>
        <button onClick={this.props.changeName}>Change Name</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    count: state.count,
    name: state.name,
    title: `${ownProps.title} is a title`
  };
};
const mapActionsToProps = dispatch => {
  return {
    addOne: () => dispatch(addOne()),
    minusOne: () => dispatch(minusOne()),
    changeName: () => dispatch(changeName('David'))
  };
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

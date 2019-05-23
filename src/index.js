import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const allEnhancers = compose(app);
const inititalState = {
  count: 0,
  name: 'Asabeneh'
};
const reducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case 'ADD_ONE':
      return { ...state, count: state.count + 1 };
    case 'MINUS_ONE':
      return { ...state, count: state.count - 1 };
    case 'CHANGE_NAME':
      return { ...state, name: payload.name };
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
export const addOne = () => {
  return {
    type: 'ADD_ONE'
  };
};
export const minusOne = () => {
  return {
    type: 'MINUS_ONE'
  };
};
export const changeName = newName => {
  return {
    type: 'CHANGE_NAME',
    payload: {
      name: newName
    }
  };
};
// store.dispatch(addOne());
// store.dispatch(addOne());
// store.dispatch(addOne());
// console.log(store.getState());
// store.dispatch(minusOne());
// console.log(store.getState());
// store.dispatch(changeName('David'));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App title="I am a title from the App component" />
  </Provider>,
  document.getElementById('root')
);

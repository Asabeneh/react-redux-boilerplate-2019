import { MINUS_ONE, ADD_TODO, CHANGE_NAME } from './action-types';

export const addOne = () => {
  return {
    type: ADD_TODO
  };
};
export const minusOne = () => {
  return {
    type: MINUS_ONE
  };
};
export const changeName = newName => {
  return {
    type: CHANGE_NAME,
    payload: {
      name: newName
    }
  };
};

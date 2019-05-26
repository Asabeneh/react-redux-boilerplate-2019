import { MINUS_ONE, CHANGE_NAME, ADD_ONE } from './action-types';

export const addOne = () => ({
  type: ADD_ONE
});
export const minusOne = () => ({
  type: MINUS_ONE
});

export const changeName = newName => ({
  type: CHANGE_NAME,
  payload: {
    name: newName
  }
});

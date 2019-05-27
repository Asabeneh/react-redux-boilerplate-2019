import { MINUS_ONE, CHANGE_NAME, ADD_ONE } from './action-types';

export const addOne = () => {
  return {
    type: ADD_ONE
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

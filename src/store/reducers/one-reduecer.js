import { ADD_ONE, MINUS_ONE, CHANGE_NAME } from "../actions/action-types";
const inititalState = {
    count: 0,
    name: 'Asabeneh'
};
const reducerOne = (state = inititalState, { type, payload }) => {
    switch (type) {
        case ADD_ONE:
            return { ...state, count: state.count + 1 };
        case MINUS_ONE:
            return { ...state, count: state.count - 1 };
        case CHANGE_NAME:
            return { ...state, name: payload.name };
        default:
            return state;
    }
};
export default reducerOne
import {ADD_TODO, DELETE_TODO, EDIT_TODO} from './action-types'
export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: {
            todo: newTodo
        }
    }
}
export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: {
            index: index
        }
    }
}
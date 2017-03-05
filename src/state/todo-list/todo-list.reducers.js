import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';

export default handleActions({
    [todoListConstants.TODO_LIST_ADD_TODO]: addTodo,
    [todoListConstants.TODO_LIST_TODO_CHANGE]: todoChange,
    [todoListConstants.TODO_LIST_TOGGLE_COMPLETED]: toggleCompleted
}, initialState);


function addTodo(state) {
    const [...todos] = state.getIn([todoListConstants.TODOS]).keys();
    const id = todos ? todos.length : 0;
    const text = state.get(todoListConstants.NEW_TODO);

    let newState = state.mergeIn([todoListConstants.TODOS], fromJS({
        [id]: {
            [todoListConstants.TEXT]: text,
            [todoListConstants.COMPLETED]: false,
            id
        }
    }));

    newState = newState.mergeIn([todoListConstants.UNCOMPLETED_TODOS], fromJS({
        [id]: {
            [todoListConstants.TEXT]: text,
            [todoListConstants.COMPLETED]: false,
            id
        }
    }));
    
    return newState;
}

function todoChange(state, action) {
    return state.setIn([todoListConstants.NEW_TODO], action.payload);
}

function toggleCompleted(state, action) {
    let todo = state.getIn([todoListConstants.TODOS, action.payload.id]);
    let newState;
    if (todo.get(todoListConstants.COMPLETED)) {
        todo = todo.setIn([todoListConstants.COMPLETED], false);
        newState = state.setIn([todoListConstants.TODOS, action.payload.id, todoListConstants.COMPLETED], false);
        newState = newState.deleteIn([todoListConstants.COMPLETED_TODOS, action.payload.id]);
        newState = newState.setIn([todoListConstants.UNCOMPLETED_TODOS, action.payload.id], todo)
    } else {
        todo = todo.setIn([todoListConstants.COMPLETED], true);
        newState = state.setIn([todoListConstants.TODOS, action.payload.id, todoListConstants.COMPLETED], true);
        newState = newState.deleteIn([todoListConstants.UNCOMPLETED_TODOS, action.payload.id]);
        newState = newState.setIn([todoListConstants.COMPLETED_TODOS, action.payload.id], todo)
    }

    return newState;
}
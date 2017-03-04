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

    return state.mergeIn([todoListConstants.TODOS], fromJS({
        [id]: {
            [todoListConstants.TEXT]: text,
            [todoListConstants.COMPLETED]: false,
            id
        }
    }));
}

function todoChange(state, action) {
    return state.setIn([todoListConstants.NEW_TODO], action.payload);
}

function toggleCompleted(state, action) {
    const completed = state.getIn([todoListConstants.TODOS, action.payload.id, todoListConstants.COMPLETED]);

    return state.setIn([todoListConstants.TODOS, action.payload.id, todoListConstants.COMPLETED], !completed);
}
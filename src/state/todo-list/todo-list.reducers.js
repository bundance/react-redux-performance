import update from 'update-immutable';
import { keys } from 'ramda';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';
import * as actions from './todo-list.actions';

export default handleActions({
    [actions.TODO_LIST_ADD_TODO]: addTodo,
    [actions.TODO_LIST_TODO_CHANGE]: todoChange,
    [actions.TODO_LIST_TOGGLE_COMPLETED]: toggleCompleted
}, initialState);

////// SLICE REDUCERS //////

function addTodo(state, action) {
    const [...todos] = keys(state[todoListConstants.TODOS]);
    const id = todos ? todos.length : 0;
    const text = action.payload;

    return update(state, {
        [todoListConstants.TODOS]: {
            $merge: {
                [id]: {
                    [todoListConstants.TEXT]: text,
                    [todoListConstants.COMPLETED]: false,
                    id
                }
            }
        }
    });
}

function todoChange(state, action) {
    return update(state, {
        [todoListConstants.NEW_TODO]: {
            [todoListConstants.TEXT]: {
                $set: action.payload
            }
        }
    });
}

function toggleCompleted(state, action) {
    let todo = state[todoListConstants.TODOS][action.payload.id];

    return update(state, {
        [todoListConstants.TODOS]: {
            [action.payload.id]: {
                [todoListConstants.COMPLETED]: { $set: !todo[todoListConstants.COMPLETED] }
            }
        }
    });
}
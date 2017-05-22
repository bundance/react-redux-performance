import update from 'update-immutable';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';
import * as actions from './todo-list.actions';

export default handleActions({
    [actions.TOGGLE_COMPLETED]: toggleCompleted
}, initialState);

////// SLICE REDUCERS //////

export function toggleCompleted(state, action) {
    let todo = state[todoListConstants.TODOS][action.payload.id];

    return update(state, {
        [todoListConstants.TODOS]: {
            [action.payload.id]: {
                [todoListConstants.COMPLETED]: { $set: !todo[todoListConstants.COMPLETED] }
            }
        }
    });
}
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';

export default handleActions({
    [todoListConstants.TODO_LIST_REFRESH]: refreshTodoList
}, initialState);


function refreshTodoList(state) {
    const refreshCount = state.get(todoListConstants.REFRESH_COUNT);
    return state.mergeDeepIn([], fromJS({
        refreshCount: refreshCount + 1
    }));
}


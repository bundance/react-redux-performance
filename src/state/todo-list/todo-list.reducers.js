import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';

export default handleActions({
    [todoListConstants.TODO_LIST_REFRESH]: refreshTodoList,
    [todoListConstants.TODO_LIST_ADD_TODO]: addTodo,
    [todoListConstants.TODO_LIST_TODO_CHANGE]: todoChange
}, initialState);


function refreshTodoList(state) {
    const refreshCount = state.get(todoListConstants.REFRESH_COUNT);
    return state.mergeDeepIn([], fromJS({
        [todoListConstants.REFRESH_COUNT]: refreshCount + 1
    }));
}

function addTodo(state, action) {
    const updatedTodos = state
        .getIn([todoListConstants.TODOS])
        .push(fromJS({ text: action.payload, completed: false }));
    
    return state.updateIn([todoListConstants.TODOS], () => updatedTodos );
}

function todoChange(state, action) {
    return state.setIn([todoListConstants.NEW_TODO], action.payload);
}
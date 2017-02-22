import { combineReducers } from 'redux-immutable';
import todoList from './todo-list/todo-list.reducers';


export default combineReducers({
    todoList
});
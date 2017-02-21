import { combineReducers } from 'redux-immutable';
import customerSearch from './customer-search/customer-search.reducers';
import customer from './customer/customer.reducers';
import todoList from './todo-list/todo-list.reducers';


export default combineReducers({
    customerSearch,
    customer,
    todoList
});
import { createSelector } from 'reselect'
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';


/******************************************* SELECTORS ***********************************************/
const todosSelector = state => state.getIn([toDoListKeys.TODO_LIST, toDoListKeys.TODOS]);
const newTodoSelector = state => state.getIn(toDoListKeys.NEW_TODO);


const getTodos = createSelector(
    todosSelector,
    (todos) => {
        console.log('getTodosSelector called');
        return asList(todos);
    }
);

const getNewTodo = createSelector(
    newTodoSelector,
    (newTodo) => {
        console.log('getNewTodoSelector called');
        return newTodo
    }
);

export default {
    getNewTodo,
    getTodos
}

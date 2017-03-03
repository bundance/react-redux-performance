import { createSelector } from 'reselect'
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { filter } from 'ramda';

import { fromJS } from 'immutable';

/******************************************* SELECTORS ***********************************************/

const todosSelector = state => state.getIn([toDoListKeys.TODO_LIST, toDoListKeys.TODOS]);
const newTodoSelector = state => state.getIn(toDoListKeys.NEW_TODO);

let getTodosCount = 0;

const getTodos = createSelector(
    todosSelector,
    (todos) => {
        getTodosCount += 1;
        console.log('in _getTodos, getTodosCount=', getTodosCount);
        
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

const getVisibleTodos = createSelector(
    todosSelector,
    (todos) => {
        const isUncompleted = todo => !todo.get('completed');

        return asList(filter(isUncompleted, todos));
    }
);

const getCompletedTodos = createSelector(
    todosSelector,
    (todos) => {
        const isCompleted = todo => todo.get('completed');

        return asList(filter(isCompleted, todos));
    }
);


export default {
    getNewTodo,
    getTodos,
    getVisibleTodos,
    getCompletedTodos
}

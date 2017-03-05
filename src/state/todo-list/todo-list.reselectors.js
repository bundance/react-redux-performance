import { createSelector } from 'reselect';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { filter } from 'ramda';
import { Iterable } from 'immutable';

console.log(':::::::::: REselectors called ::::::::::::::');

/******************************************* RESELECT SELECTORS *****************************************/

const todosSelector = state => Iterable.isIterable(state) && state.getIn([toDoListKeys.TODO_LIST, toDoListKeys.TODOS]);

const getVisibleTodos = createSelector(
    todosSelector,
    (todos) => {
        const isUncompleted = todo => !todo.get('completed');
        const getVisibleTodosRetVal = asList(filter(isUncompleted, todos));
        console.log({ getVisibleTodosRetVal});
        return getVisibleTodosRetVal;
    }
);


const getCompletedTodos = createSelector(
    todosSelector,
    (todos) => {
        const isCompleted = todo => todo.get('completed');
        const getCompletedTodosRetVal = asList(filter(isCompleted, todos));
        console.log({ getCompletedTodosRetVal });
        return getCompletedTodosRetVal;
    }
);

export default {
    getAllTodos: todosSelector,
    getVisibleTodos,
    getCompletedTodos
}

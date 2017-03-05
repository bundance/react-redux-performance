import { createSelector } from 'reselect';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { compose } from 'ramda';
import { filter } from 'ramda';
import { Iterable } from 'immutable';

console.log(':::::::::: REselectors called ::::::::::::::');

/******************************************* RESELECT SELECTORS *****************************************/

const todosSelector = state => Iterable.isIterable(state) && state.getIn([toDoListKeys.TODO_LIST, toDoListKeys.TODOS]);
const completedTodosSelector = state => Iterable.isIterable(state) && state.getIn([toDoListKeys.TODO_LIST, toDoListKeys.COMPLETED_TODOS]);
const unCompletedTodosSelector = state => Iterable.isIterable(state) && state.getIn([toDoListKeys.TODO_LIST, toDoListKeys.UNCOMPLETED_TODOS]);


const getVisibleTodos = createSelector(
    todosSelector,
    (todos) => {
        const isUncompleted = todo => !todo.get('completed');
        const getVisibleTodosRetVal = asList(filter(isUncompleted, todos));
        console.log({ getVisibleTodosRetVal});
        return getVisibleTodosRetVal;
    }
);

export default {
    getAllTodos: compose(asList, todosSelector),
    getCompletedTodos: compose(asList, completedTodosSelector),
    getUncompletedTodos: compose(asList, unCompletedTodosSelector)
}

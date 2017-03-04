import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, filter, memoize, view } from 'ramda';
// import memoize from 'memoize-immutable';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { fromJS } from 'immutable';
import { trace } from '../../utils/dev/trace';
import { createSelector } from 'reselect';

console.log(':::::::::: selectors called ::::::::::::::');

/******************************************* SELECTORS ***********************************************/
export const todoList = immLens(toDoListKeys.TODO_LIST);
export const todos = immLens(toDoListKeys.TODOS);


const _getVisibleTodos = todos => {
    const isUncompleted = todo => !todo.get('completed');

    console.log('****** _getVisibleTodos called *******');

    return asList(filter(isUncompleted, todos));
};

const _getCompletedTodos = todos => {
    const isCompleted = todo => todo.get('completed');

    console.log('****** getCompletedTodos called *******');

    return asList(filter(isCompleted, todos));
};


const getVisibleTodos = state => _getVisibleTodos(_getTodos(state));
const getCompletedTodos = state => _getCompletedTodos(_getTodos(state));


export default {
    getCompletedTodos,
    getVisibleTodos
}

//////

function _getTodos(state) {
    return view(compose(todoList, todos))(state);
}

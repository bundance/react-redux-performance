import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, filter, memoize, view } from 'ramda';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { fromJS } from 'immutable';

console.log(':::::::::: selectors called ::::::::::::::');

/******************************************* RAMDA LENS SELECTORS *******************************************/

/**
 * NOTE: Memoizing the _getVisibleTodos and _getCompletedTodos functions is the best you can do. It doesn't
 * matter if you memoize them or not as far as wasted renders are concerned, as the shouldComponentUpdates
 * in the Todo Component has taken care of that. But the WhyDidYouUpdate HoC WILL report an unnecessary
 * call to the completedToDo components when you type in the text box if you *don't* memoize them.
 *
 * Note that even though the _getVisibleTodos and _getCompletedTodos functions have been memoized, the
 * WhyDidYouUpdate HoC will *still* report an unnecessary render for the completedTodoComponents when
 * you add a new ToDo. This is because the ToDo object has been changed, as you've added a new todo, and
 * so of course the memoized version will not be returned for either _getVisibleTodos or _getCompletedTodos.
 *
 * This cannot be avoided unless you split completedTodos and uncompletedTodos into their own state slice.
 * This also affects the Reselect selectors for exactly the same reason.
 *
 * Note that it's no use trying to memoize the result of the filters in both _getVisibleTodos and
 * _getCompletedTodos, either as memoize does a shallow compare, and filter always returns a new object.
 */


export const todoList = immLens(toDoListKeys.TODO_LIST);
export const todos = immLens(toDoListKeys.TODOS);

const _getTodos = view(compose(todoList, todos));

// Memoize the todos, as these are independent from the newToDo property, and will only change when the
// todos themselves have changed (in which case, you don't want a memoized version of them)
const _getVisibleTodos = memoize(todos => {
    const isUncompleted = todo => !todo.get('completed');

    console.log('****** getVisibleTodos called *******');

    return asList(filter(isUncompleted, todos));
});

const _getCompletedTodos = memoize(todos => {
    const isCompleted = todo => todo.get('completed');

    console.log('****** getCompletedTodos called *******');

    return asList(filter(isCompleted, todos));
});

// You can't memoize the state, as it's the whole root object, and so will always change when any prop changes
const getAllTodos = state => _getTodos(state);
const getVisibleTodos = state => _getVisibleTodos(_getTodos(state));
const getCompletedTodos = state => _getCompletedTodos(_getTodos(state));

export default {
    getAllTodos,
    getCompletedTodos,
    getVisibleTodos
}



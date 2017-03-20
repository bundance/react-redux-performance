import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, filter, memoize, view } from 'ramda';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { fromJS } from 'immutable';

console.log(':::::::::: selectors called ::::::::::::::');

/******************************************* RAMDA LENS SELECTORS *******************************************/

/**
 * NOTE: Memoizing the selectors will ensure that mapStateToProps does not cause a wasted render. Note that we
 * memoize the returned value of _getTodo, _getCompletedTodos and _getUncompletedTodos. That's because these
 * are the state slices that are not affected by changes to the other state slices. We cannot memoize state or
 * todoList, because a change in any of the xTodos slices will cause the state and todoList objects to be created
 * again (via the immutable reducers). When this happens, new objects are created, and ramda's memoization function,
 * which performs a shallow comparison, will fail.
 * 
 * Note that when the selectors wrongly return a new object (as with the unmemoized selectors), the performance problem
 * will appear in mapStateToProps, as this will trigger a re-render. If you have a working shouldComponentUpdate
 * method in your component classes, this will stop the re-render from occurring, and so you won't see any wasteful
 * re-rendering reporting in React-perf.
 * 
 * However, you *will* see the Why-Did-You-Update HoC report that a wasteful render was triggered, which tells you 
 * that mapStateToProps is creating new objects each time.
 * 
 * This is worth repeating: shouldComponentUpdate will stop a wasteful re-render from mapStateToProps, and so stop 
 * react-perf from reporting an unnecessary *data generation*
 * 
 * In contrast, WhyDidYouUpdate *will* report any wasteful data regenerations in mapStateToProps, but this will only
 * lead to wasteful re-rendering if shouldComponentUpdate isn't working well.
 * 
 */


export const todoList = immLens(toDoListKeys.TODO_LIST);
export const todos = immLens(toDoListKeys.TODOS);
export const completedTodos = immLens(toDoListKeys.COMPLETED_TODOS);
export const uncompletedTodos = immLens(toDoListKeys.UNCOMPLETED_TODOS);


const _getTodos = view(compose(todoList, todos));
const _getCompletedTodos = view(compose(todoList, completedTodos));
const _getUncompletedTodos = view(compose(todoList, uncompletedTodos));

// Memoized selectors
export default {
    getAllTodos: compose(memoize(todos => asList(todos)), _getTodos),
    getCompletedTodos: compose(memoize(completedTodos => asList(completedTodos)), _getCompletedTodos),
    getUncompletedTodos: compose(memoize(uncompletedTodos => asList(uncompletedTodos)), _getUncompletedTodos),
};

// Unmemoized selectors
export const unMemoizedSelectors = {
    getAllTodos: compose(asList, _getTodos),
    getCompletedTodos: compose(asList, _getCompletedTodos),
    getUncompletedTodos: compose(asList, _getUncompletedTodos)
};


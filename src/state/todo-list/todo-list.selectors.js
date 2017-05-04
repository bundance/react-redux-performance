import { compose, memoize, values } from 'ramda';
import { TODO_LIST, TODOS } from '../../constants/todo-list/todo-list.constants';

/******************************************* SELECTORS *******************************************/

/**
 * NOTE: Memoizing the selectors will ensure that mapStateToProps does not cause a wasted render. Note that we
 * memoize the returned value of _getTodo, selectCompletedToDos and selectUncompletedToDos. That's because these
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

const selectToDos = state => state[TODO_LIST][TODOS];


// Memoized selectors
export const getAllTodosMemoized = compose(memoize(values), selectToDos);
export const getAllTodosUnmemoized = compose(values, selectToDos);

export default {
    // change this to getAllTodosUnmemoized or getAllTodosMemoized, depending on whether you want to use an 
    // unmemoized or memoized selector
    getAllTodos: getAllTodosMemoized
};


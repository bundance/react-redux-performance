import { compose, memoize, values } from 'ramda';
import { TODO_LIST, TODOS } from '../../constants/todo-list/todo-list.constants';
import { createSelector } from 'reselect';

/******************************************* SELECTORS *******************************************/

/**
 * Memoizing the getAllTodos() selector will ensure that when mapStateToProps calls it in the ToDoList connected
 * component (defined in todo-list.container), it will not trigger a wasted render if the state.todoList.todos
 * object has not changed.
 *
 * Conversely, when using the Unmemoized selectors in mapStateToProps, mapStateToProps WILL trigger a re-render every
 * time it's called, even if the values of the todos themselves have not changed.

 * Note that if you have a working shouldComponentUpdate() method in your component classes, the re-render will be
 * prevented from occurring, and so you won't see any wasteful re-rendering reported by React-perf.
 *
 * However, you *will* see the Why-Did-You-Update HoC report that a wasteful render was triggered, which tells you
 * that mapStateToProps is creating new objects each time.
 *
 * This is worth repeating: shouldComponentUpdate() will stop a wasteful re-render from mapStateToProps, and so stop
 * react-perf from reporting an unnecessary *data generation*
 *
 * In contrast, WhyDidYouUpdate *will* report any wasteful data regenerations in mapStateToProps, but this will only
 * lead to wasteful re-rendering if shouldComponentUpdate() isn't doing its job.
 *
 */

const selectToDos = state => state[TODO_LIST][TODOS];


// Memoized selector
// Converts an object of todos keyed by id into an array of objects with the
// properties { id, text, completed }. The todos object returned from selectToDos() is memoized, and so if the same
// object is returned by selectTodos() on a subsequent call, the same, previously memoized, array is returned.
export const getAllTodosMemoized = createSelector(
    [compose(values, selectToDos)],
    todos => todos
);


// Unmemoized selector
// Converts an object of todos keyed by id into an array of objects with the
// properties { id, text, completed } A new array of the same objects is returned each time this selector is called.
export const getAllTodosUnmemoized = compose(values, selectToDos);

export default {
    // change this to getAllTodosUnmemoized or getAllTodosMemoized, depending on whether you want to use an 
    // unmemoized or memoized selector
    getAllTodos: getAllTodosMemoized
};


import { compose, values } from 'ramda';
import { TODO_LIST, TODOS } from '../../constants/todo-list/todo-list.constants';

/******************************************* SELECTORS *******************************************/

/**
 * selectToDos returns a hash of todo objects, keyed by id.
 * compose(values, selectToDos) returns an array of the same todo objects
 *
 * Each time getAllTodos is called by todo-list.container's mapStateToProps, a new array is returned by ramda's
 * value() function. However, that array always comprises the same todo objects (so long as they haven't been mutated),
 * and so Todo.component will not re-render, as its todo object passed into it has not changed.
 *
 */

const selectToDos = state => state[TODO_LIST][TODOS];

export default {
    getAllTodos: compose(values, selectToDos)
};


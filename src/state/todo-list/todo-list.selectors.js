import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, memoize, view } from 'ramda';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';
import { fromJS } from 'immutable';

/******************************************* SELECTORS ***********************************************/
export const todoList = immLens(toDoListKeys.TODO_LIST);
export const todos = immLens(toDoListKeys.TODOS);
export const newTodo = immLens(toDoListKeys.NEW_TODO);

let getTodosCount = 0;
let getNewTodoCount = 0;

const getTodos = state => {
    return _getTodos(state);
};

function _getTodos(state) {
    getTodosCount += 1;
    console.log('in _getTodos, getTodosCount=', getTodosCount);

    return compose(
        asList,
        view(compose(
            todoList,
            todos
        ))
    )(state)
}

const getNewTodo = memoize(state => {
    getNewTodoCount += 1;
    console.log('>>>> In getNewTodo, getNewTodoCount = ', getNewTodoCount);
    return view(compose(
        todoList,
        newTodo
    ))(state);
});

export default {
    getNewTodo,
    getTodos
}

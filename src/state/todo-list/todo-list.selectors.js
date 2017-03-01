import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, map, view } from 'ramda';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';

/******************************************* SELECTORS ***********************************************/
export const todoList = immLens(toDoListKeys.TODO_LIST);
export const todos = immLens(toDoListKeys.TODOS);
export const newTodo = immLens(toDoListKeys.NEW_TODO);

const getTodos = state => (
    compose(
        asList,
        view(compose(
            todoList,
            todos
        ))
    )(state)
);

const getNewTodo = view(compose(
    todoList,
    newTodo
));

const getTodoById = (id, state) => find(todo => todo.id === id, getTodos(state));

export default {
    getNewTodo,
    getTodos,
    getTodoById
}

import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, view } from 'ramda';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';

/******************************************* SELECTORS ***********************************************/
export const todoList = immLens(toDoListKeys.TODO_LIST);
export const todos = immLens(toDoListKeys.TODOS);
export const refreshCount = immLens(toDoListKeys.REFRESH_COUNT);
export const newTodo = immLens(toDoListKeys.NEW_TODO);

const getTodos = view(compose(
    todoList,
    todos
));

const getRefreshCount = view(compose(
    todoList,
    refreshCount
));


const getNewTodo = view(compose(
    todoList,
    newTodo
));

export default {
    getNewTodo,
    getTodos,
    getRefreshCount
}

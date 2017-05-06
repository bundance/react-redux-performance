import { TODO_LIST, NEW_TODO } from '../../constants/todo-list/todo-list.constants';

export const selectNewTodo = state => state[TODO_LIST][NEW_TODO];
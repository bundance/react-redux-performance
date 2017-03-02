import { createSelector } from 'reselect'
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { asList } from '../../utils/immutable-utils/convert-types';


/******************************************* SELECTORS ***********************************************/
const todoListSelector = state => state.get(toDoListKeys.TODO_LIST);
const todosSelector = state => state.get(toDoListKeys.TODOS);
const newTodoSelector = state => state.get(toDoListKeys.NEW_TODO);


const getTodos = createSelector(
    [todoListSelector, todosSelector],
    todos => {
        const retVal = asList(todos);
        console.log('getTodos called, returning: ', retVal);
        return retVal;
    }
);

const getNewTodo = createSelector(
    [todoListSelector, newTodoSelector]
);

export default {
    getNewTodo,
    getTodos
}

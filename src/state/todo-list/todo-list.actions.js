import { createActions } from 'redux-actions';
import * as toDoListActions from '../../constants/todo-list/todo-list.constants';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions(
    {
        [toDoListActions.TODO_LIST_TODO_CHANGE]: onNewTodoChange
    },
    toDoListActions.TODO_LIST_REFRESH,
    toDoListActions.TODO_LIST_ADD_TODO
);

// Destructure action creators from actions object
const {
    todoListRefresh,
    todoListAddTodo,
    todoListTodoChange
} = actions;

// Rename and Export Public Action Creators
export {
    todoListRefresh as onRefreshClick,
    todoListAddTodo as addTodo,
    todoListTodoChange as onTodoChange
};

////////

function onNewTodoChange(evt) {
    console.log('newTodo:', evt.target.value);

    return evt.target.value;
}
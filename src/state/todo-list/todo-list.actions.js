import { createActions } from 'redux-actions';
import * as toDoListActions from '../../constants/todo-list/todo-list.constants';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions(
    {
        [toDoListActions.TODO_LIST_TOGGLE_COMPLETED]: onToggleCompleted
    },
    toDoListActions.TODO_LIST_ADD_TODO,
    toDoListActions.TODO_LIST_TODO_CHANGE
);

// Destructure action creators from actions object
const {
    todoListAddTodo,
    todoListTodoChange,
    todoListToggleCompleted
} = actions;

// Rename and Export Public Action Creators
export {
    todoListAddTodo as addTodo,
    todoListTodoChange as onTodoChange,
    todoListToggleCompleted as toggleCompleted
};

////////

function onToggleCompleted(id, completed) {
    return { id, completed };
}
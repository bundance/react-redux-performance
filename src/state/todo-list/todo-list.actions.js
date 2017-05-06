import { createActions } from 'redux-actions';

/*********************************************** ACTIONS ********************************************/
export const TODO_LIST_ADD_TODO = 'TODO_LIST_ADD_TODO';
export const TODO_LIST_TODO_CHANGE = 'TODO_LIST_TODO_CHANGE';
export const TODO_LIST_TOGGLE_COMPLETED = 'TODO_LIST_TOGGLE_COMPLETED';


/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions(
    {
        [TODO_LIST_TOGGLE_COMPLETED]: onToggleCompleted
    },
    TODO_LIST_ADD_TODO,
    TODO_LIST_TODO_CHANGE
);

// Destructure action creators from actions object
const {
    todoListAddTodo,
    todoListTodoChange,
    todoListToggleCompleted
} = actions;

// Rename and Export Public Action Creators
export {
    todoListAddTodo as onAddTodo,
    todoListTodoChange as onTodoChange,
    todoListToggleCompleted as toggleCompleted
};

////////

function onToggleCompleted(id, completed) {
    return { id, completed };
}
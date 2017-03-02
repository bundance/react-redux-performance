import { createActions } from 'redux-actions';
import * as todoActions from '../../constants/todo/todo.constants';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions(todoActions.TODO_TOGGLE_COMPLETED);

// Destructure action creators from actions object
const {
    todoToggle,
} = actions;

// Rename and Export Public Action Creators
export {
    todoToggle as toggleTodo
};

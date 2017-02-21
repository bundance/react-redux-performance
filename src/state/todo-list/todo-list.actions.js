import { createActions } from 'redux-actions';
import * as toDoListActions from '../../constants/todo-list/todo-list.constants';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions(
    {}, 
    toDoListActions.TODO_LIST_REFRESH
);

// Destructure action creators from actions object
const {
    todoListRefresh
} = actions;

// Rename and Export Public Action Creators
export {
    todoListRefresh as onRefreshClick
};

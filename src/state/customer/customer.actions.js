import { createActions } from 'redux-actions';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions({}, 'ADD_BUTTON_INSTANCE');

// Destructure action creators from actions object
const {
    addButtonInstance
} = actions;

// Rename and Export Public Action Creators
export {
    addButtonInstance
};

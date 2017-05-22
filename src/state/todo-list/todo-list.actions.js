import { createActions } from 'redux-actions';

/*********************************************** ACTIONS ********************************************/
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions({
    [TOGGLE_COMPLETED]: (id, completed) => ({ id, completed })
});

// Destructure action creators from actions object
const {
    toggleCompleted
} = actions;

// Export Public Action Creators
export { toggleCompleted };

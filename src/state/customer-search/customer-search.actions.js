import { createActions } from 'redux-actions';
import * as customerSearchActions from '../../constants';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions({
    [customerSearchActions.CUSTOMERS_BUTTON_CLICK]: _handleCustomersButtonClick
});

// Destructure action creators from actions object
const {
    customersDetailsFetch
} = actions;

// Rename and Export Public Action Creators
export {
    customersDetailsFetch as fetchCustomersDetails
};

//////

function _handleCustomersButtonClick(searchValue, searchFilter) {
    console.log('>>>>>>>>>>>>> _handleCustomersButtonClick called, searchValue:', searchValue);
    return {
        searchValue,
        searchFilter
    }
}

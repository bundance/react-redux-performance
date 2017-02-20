import { createActions } from 'redux-actions';
import * as customerSearchActions from '../../constants';

/******************************************* ACTION CREATORS ****************************************/

// Create action creators
const actions = createActions({
        [customerSearchActions.CUSTOMERS_DETAILS_FETCH]: _fetchCustomersDetails
    },
    customerSearchActions.CUSTOMER_SEARCH_VALUE_CHANGE,
    customerSearchActions.CUSTOMERS_DETAILS_IS_FETCHING,
    customerSearchActions.CUSTOMERS_DETAILS_IS_LOADED,
    customerSearchActions.CUSTOMERS_DETAILS_IS_ERROR,
    customerSearchActions.CUSTOMERS_DETAILS_VISIBILITY_SET,
    customerSearchActions.CUSTOMER_SEARCH_FILTER_CHANGE,
    customerSearchActions.CUSTOMER_SELECT,
);

// Destructure action creators from actions object
const {
    customersDetailsVisibilitySet,
    customersDetailsFetch,
    customersDetailsIsFetching,
    customersDetailsIsLoaded,
    customersDetailsIsError,
    customerSearchFilterChange,
    customerSelect,
    customerSearchValueChange,
} = actions;

// Rename and Export Public Action Creators
export {
    customersDetailsVisibilitySet as setCustomersDetailsVisibility,
    customerSearchValueChange as handleCustomerSearchValueChange,
    customersDetailsFetch as fetchCustomersDetails,
    customersDetailsIsFetching,
    customersDetailsIsLoaded,
    customersDetailsIsError,
    customerSearchFilterChange as handleSearchFilterChange,
    customerSelect as selectCustomer
};

//////

function _fetchCustomersDetails(searchValue, searchFilter) {
    console.log('>>>>>>>>>>>>> _fetchCustomersDetails called, searchValue:', searchValue);
    return {
        searchValue,
        searchFilter
    }
}

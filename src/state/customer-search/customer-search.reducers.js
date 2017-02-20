import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as customerSearchKeys from '../../constants/customer-search/customer-search-store-keys';
import * as fetchStateKeys from '../../constants/fetch-state-keys';
import * as customerSearchActions from '../../constants';
import initialState from './initial.state';

/** State hierarchy:
 *
 *  - Selectors are passed top-level state:
 *
 *  state = {
 *      customerSearch: {
 *          username: string,
 *          customersDetailsIsVisible: boolean,
 *          customersDetails: [{ username, address... }]
 *      }
 *   }
 *
 *   - Reducers handle state slice:
 *
 *   reducerState = {
 *      customerSearch: {
 *          username: string,
 *          customersDetailsIsVisible: boolean,
 *          customersDetails: [{ username, address... }]
 *      }
 *   }
 *
 */


export default handleActions({
    [customerSearchActions.CUSTOMER_SEARCH_VALUE_CHANGE]: customerSearchValueChange,
    [customerSearchActions.CUSTOMERS_DETAILS_IS_FETCHING]: customersDetailsIsFetching,
    [customerSearchActions.CUSTOMERS_DETAILS_IS_LOADED]: customersDetailsIsLoaded,
    [customerSearchActions.CUSTOMERS_DETAILS_IS_ERROR]: customersDetailsIsError,
    [customerSearchActions.CUSTOMER_SEARCH_FILTER_CHANGE]: customerSearchFilterChange
}, initialState);

////// CASE REDUCERS //////

export function customerSearchValueChange(state, action) {
    return state.setIn([customerSearchKeys.CUSTOMER_SEARCH_VALUE], action.payload);
}

export function customerSearchFilterChange(state, action) {
    return state.setIn([customerSearchKeys.CUSTOMER_SEARCH_FILTER_BY], action.payload);
}

// ToDo: refactor the IsFetchings, etc.
export function customersDetailsIsFetching(state) {
    return state.mergeDeepIn([], fromJS({
        [customerSearchKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
        [fetchStateKeys.IS_FETCHING]: true,
        [fetchStateKeys.IS_LOADED]: false,
        [fetchStateKeys.IS_ERROR]: false
    }));
}

export function customersDetailsIsLoaded(state, action) {
    let newState = state.mergeDeepIn([], fromJS({
        [customerSearchKeys.CUSTOMERS_DETAILS]: action.payload.users,
        [customerSearchKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: true,
        [fetchStateKeys.IS_FETCHING]: false,
        [fetchStateKeys.IS_LOADED]: true,
        [fetchStateKeys.IS_ERROR]: false
    }));

    if (!action.payload.users || (action.payload.users && !action.payload.users.length)) {
        newState = newState.updateIn([customerSearchKeys.CUSTOMERS_DETAILS], () => fromJS([]));
    }

    return newState;
}

export function customersDetailsIsError(state) {
    return state.mergeDeepIn([], fromJS({
        [customerSearchKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
        [fetchStateKeys.IS_FETCHING]: false,
        [fetchStateKeys.IS_LOADED]: false,
        [fetchStateKeys.IS_ERROR]: true
    }));
}

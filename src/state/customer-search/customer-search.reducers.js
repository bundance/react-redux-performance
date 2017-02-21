import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as customerSearchKeys from '../../constants/customer-search/customer-search-store-keys';
import * as fetchStateKeys from '../../constants/fetch-state-keys';
import * as customerSearchActions from '../../constants';
import initialState from './initial.state';

export default handleActions({
    [customerSearchActions.CUSTOMERS_BUTTON_CLICK]: customersButtonClick
}, initialState);

////// CASE REDUCERS //////

export function customersButtonClick(state, action) {
    return state.setIn([customerSearchKeys.CUSTOMER_SEARCH_VALUE], action.payload);
}

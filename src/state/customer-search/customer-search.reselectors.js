import * as customerSearchKeys from '../../constants/customer-search/customer-search-store-keys';
import { createSelector } from 'reselect';

const getCustomerSearch = (state) => state.get(customerSearchKeys.CUSTOMER_SEARCH);

export const getCustomerSearchValue = createSelector(
    [getCustomerSearch],
    customerSearch  => customerSearch && customerSearch.get(customerSearchKeys.CUSTOMER_SEARCH_VALUE)
);

export const getCustomersDetailsVisibility = createSelector(
    [getCustomerSearch],
    customerSearch => customerSearch && customerSearch.get(customerSearchKeys.CUSTOMERS_DETAILS_IS_VISIBLE)
);

export const getCustomersDetails = createSelector(
    [getCustomerSearch],
    customerSearch => customerSearch && customerSearch.get(customerSearchKeys.CUSTOMERS_DETAILS)
);

export const getSearchFilter = createSelector(
    [getCustomerSearch],
    customerSearch => customerSearch && customerSearch.get(customerSearchKeys.CUSTOMER_SEARCH_FILTER_BY)
);
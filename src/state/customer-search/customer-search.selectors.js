import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, view } from 'ramda';
import * as customerSearchKeys from '../../constants/customer-search/customer-search-store-keys';

/******************************************* SELECTORS ***********************************************/
export const customerSearchLens = immLens(customerSearchKeys.CUSTOMER_SEARCH);
export const customerSearchValueLens = immLens(customerSearchKeys.CUSTOMER_SEARCH_VALUE);
export const customerDetailsIsVisibleLens = immLens(customerSearchKeys.CUSTOMERS_DETAILS_IS_VISIBLE);
export const customerDetailsLens = immLens(customerSearchKeys.CUSTOMERS_DETAILS);
export const customerSearchFilterByLens = immLens(customerSearchKeys.CUSTOMER_SEARCH_FILTER_BY);

export const getCustomerSearchValue = view(compose(
    customerSearchLens,
    customerSearchValueLens
));

export const getCustomersDetailsVisibility = view(compose(
    customerSearchLens,
    customerDetailsIsVisibleLens
));

export const getCustomersDetails = view(compose(
    customerSearchLens,
    customerDetailsLens
));

export const getSearchFilter = view(compose(
    customerSearchLens,
    customerSearchFilterByLens
));


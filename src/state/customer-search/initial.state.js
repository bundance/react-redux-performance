import { fromJS } from 'immutable';
import * as customerSearchKeys from '../../constants/customer-search/customer-search-store-keys';

export default fromJS({
    [customerSearchKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
    [customerSearchKeys.CUSTOMER_SEARCH_VALUE]: 'searchValue',
    [customerSearchKeys.CUSTOMER_SEARCH_FILTER_BY]: customerSearchKeys.USERNAME
});

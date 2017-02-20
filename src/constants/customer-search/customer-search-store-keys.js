export const CUSTOMER_SEARCH = 'customerSearch';
export const CUSTOMERS_DETAILS = 'customersDetails';
export const CUSTOMERS_DETAILS_IS_VISIBLE = 'customersDetailsIsVisible';
export const CUSTOMER_SEARCH_FILTER_BY = 'customerSearchFilterBy';
export const CUSTOMER_SEARCH_VALUE = 'customerSearchValue';

// Values
export const USERNAME = 'username';
export const MOBILE_NUMBER = 'mobileNumber';
export const HUB_ID = 'hubId';


export const mapSearchFilterToRestParam = {
    [USERNAME]: 'name',
    [MOBILE_NUMBER]: MOBILE_NUMBER,
    [HUB_ID]: HUB_ID
};
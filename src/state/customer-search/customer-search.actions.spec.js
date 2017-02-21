import * as customerSearchActions from '../../constants';

let api;
let actionCreator;

describe('Test Action Creators', () => {
    beforeEach(() => {
        jest.mock('../../api/customers-details.api', () => ({ fetchCustomersDetails: jest.fn(() => 'keith') }));
        actionCreator = require('./customer-search.actions');
    });

    it('should create a CUSTOMERS_BUTTON_CLICK action', () => {
        expect(actionCreator.fetchCustomersDetails('keith', 'username')).toEqual({
            type: customerSearchActions.CUSTOMERS_BUTTON_CLICK,
            payload: {
                searchFilter: 'username',
                searchValue: 'keith'
            }
        });
    });

    it('should create a CUSTOMERS_DETAILS_VISIBILITY_SET action', () => {
        expect(actionCreator.setCustomersDetailsVisibility(true)).toEqual({
            type: customerSearchActions.CUSTOMERS_DETAILS_VISIBILITY_SET,
            payload: true
        });
    });

    it('should create a CUSTOMER_SEARCH_VALUE_CHANGE action', () => {
        expect(actionCreator.handleCustomerSearchValueChange('keith')).toEqual({ 
            type: customerSearchActions.CUSTOMER_SEARCH_VALUE_CHANGE,
            payload: 'keith' 
        });
    });

    it('should create a CUSTOMERS_DETAILS_IS_FETCHING action', () => {
        expect(actionCreator.customersDetailsIsFetching()).toEqual({
            type: customerSearchActions.CUSTOMERS_DETAILS_IS_FETCHING
        });
    });

    it('should create a CUSTOMERS_DETAILS_IS_LOADED action', () => {
        expect(actionCreator.customersDetailsIsLoaded()).toEqual({
            type: customerSearchActions.CUSTOMERS_DETAILS_IS_LOADED
        });
    });
    
    it('should create a CUSTOMERS_DETAILS_IS_ERROR action', () => {
        expect(actionCreator.customersDetailsIsError()).toEqual({
            type: customerSearchActions.CUSTOMERS_DETAILS_IS_ERROR
        });
    });

    it('should create a CUSTOMERS_SELECT action', () => {
        expect(actionCreator.selectCustomer()).toEqual({
            type: customerSearchActions.CUSTOMER_SELECT
        });
    });
});

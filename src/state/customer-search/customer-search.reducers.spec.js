import Immutable from 'immutable';
import * as csKeys from '../../constants/customer-search/customer-search-store-keys';
import * as fetchStateKeys from '../../constants/fetch-state-keys';
import * as reducers from './customer-search.reducers'; 

describe('test reducers', () => {
    let state;

    beforeEach(() => {
        state = _getInitialState();
    });

    describe('customerSearchValueChange reducer', () => {
        it('should handle CUSTOMER_SEARCH_VALUE_CHANGE', () => {
            // ARRANGE
            const expected = {
                [csKeys.CUSTOMER_SEARCH_VALUE]: 'keith chegwin',
                [csKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
                [csKeys.CUSTOMERS_DETAILS]: [{
                    username: 'foundUsername'
                }]
            };

            // ACT
            const actual = reducers.customerSearchValueChange(state.get(csKeys.CUSTOMER_SEARCH),
                { payload: 'keith chegwin' });

            // ASSERT
            expect(actual.toJS()).toEqual(expected);
        });
    });


    describe('customersDetailsIsFetching reducer', () => {
        it('should handle CUSTOMERS_DETAILS_IS_FETCHING', () => {
            // ARRANGE
            const expected = {
                customersDetails: [{ username: "foundUsername" }],
                [csKeys.CUSTOMER_SEARCH_VALUE]: 'searchUsername',
                [csKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
                [fetchStateKeys.IS_FETCHING]: true,
                [fetchStateKeys.IS_LOADED]: false,
                [fetchStateKeys.IS_ERROR]: false
            };

            // ACT
            const actual = reducers.customersDetailsIsFetching(state.get(csKeys.CUSTOMER_SEARCH),
                { payload: 'keith chegwin' });

            // ASSERT
            expect(actual.toJS()).toEqual(expected);
        });
    });

    describe('customersDetailsIsLoaded reducer', () => {
        it('should handle CUSTOMERS_DETAILS_IS_LOADED', () => {
            // ARRANGE
            const expected = {
                customersDetails: [{ username: "keith chegwin" }],
                [csKeys.CUSTOMER_SEARCH_VALUE]: 'searchUsername',
                [csKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: true,
                [fetchStateKeys.IS_FETCHING]: false,
                [fetchStateKeys.IS_LOADED]: true,
                [fetchStateKeys.IS_ERROR]: false
            };

            // ACT
            const actual = reducers.customersDetailsIsLoaded(state.get(csKeys.CUSTOMER_SEARCH),
                { payload: { users: [ { username: 'keith chegwin' } ] } });

            // ASSERT
            expect(actual.toJS()).toEqual(expected);
        });
    });

    describe('customersDetailsIsError reducer', () => {
        it('should handle CUSTOMERS_DETAILS_IS_ERROR', () => {
            // ARRANGE
            const expected = {
                customersDetails: [{ username: "foundUsername" }],
                [csKeys.CUSTOMER_SEARCH_VALUE]: 'searchUsername',
                [csKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
                [fetchStateKeys.IS_FETCHING]: false,
                [fetchStateKeys.IS_LOADED]: false,
                [fetchStateKeys.IS_ERROR]: true
            };

            // ACT
            const actual = reducers.customersDetailsIsError(state.get(csKeys.CUSTOMER_SEARCH),
                { payload: 'keith chegwin' });

            // ASSERT
            expect(actual.toJS()).toEqual(expected);
        });
    });

});

function _getInitialState() {
    return Immutable.fromJS({
        [csKeys.CUSTOMER_SEARCH]: {
            [csKeys.CUSTOMER_SEARCH_VALUE]: 'searchUsername',
            [csKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
            [csKeys.CUSTOMERS_DETAILS]: [{
                username: 'foundUsername'
            }]
        }
    });
}
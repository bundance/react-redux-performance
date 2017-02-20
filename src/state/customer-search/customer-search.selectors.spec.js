import { fromJS } from 'immutable';
import * as csKeys from '../../constants/customer-search/customer-search-store-keys';
import * as selectors from './customer-search.selectors';

describe('Test Customer Search Selectors', () => {
    let state;

    const initialState = fromJS({
        [csKeys.CUSTOMER_SEARCH_VALUE]: 'searchUsername',
        [csKeys.CUSTOMERS_DETAILS_IS_VISIBLE]: false,
        [csKeys.CUSTOMERS_DETAILS]: [{
            username: 'foundUsername'
        }]
    });
    
    state = fromJS({ [csKeys.CUSTOMER_SEARCH]: initialState });
    
    it('should get the username being searched for from the store', () => {
        const expected = 'searchUsername';

        expect(selectors.getCustomerSearchValue(state)).toEqual(expected);
    });


    it('should get the visibility of the CustomerDetails table from the store', () => {
        expect(selectors.getCustomersDetailsVisibility(state)).toBeFalsy();
    });


    it('should get the customersDetails from the store', () => {
        const expected = [{
            username: 'foundUsername'
        }];

        expect(selectors.getCustomersDetails(state).toJS()).toEqual(expected);
    });
});

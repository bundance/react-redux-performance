import { connect } from 'react-redux';
import {
    getCustomerSearchValue,
    getCustomersDetailsVisibility,
    getSearchFilter
} from '../../state/customer-search/customer-search.selectors';
import {
    fetchCustomersDetails,
    handleCustomerSearchValueChange,
    handleSearchFilterChange
} from '../../state/customer-search/customer-search.actions';
import { toJS } from '../../utils/immutable-utils/to-js';
import CustomerSearch from './customer-search.component';

const mapStateToProps = (state) => ({
    searchValue: getCustomerSearchValue(state),
    showCustomersDetails: getCustomersDetailsVisibility(state),
    searchFilter: getSearchFilter(state)
});

const mapDispatchToProps = ({
    fetchCustomersDetails,
    handleCustomerSearchValueChange,
    handleSearchFilterChange
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(CustomerSearch));
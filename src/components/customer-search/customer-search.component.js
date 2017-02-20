import React, { PropTypes } from 'react';

export default class CustomerSearch extends React.Component {

    static propTypes = {
        fetchCustomersDetails: PropTypes.func.isRequired,
        handleCustomerSearchValueChange: PropTypes.func.isRequired,
        handleSearchFilterChange: PropTypes.func.isRequired,
        searchFilter: PropTypes.string,
        searchValue: PropTypes.string,
        showCustomersDetails: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    fetchCustomersDetails = () => {
        this.props.fetchCustomersDetails(this.props.searchValue, this.props.searchFilter);
    };

    onSearchFilterChange = (event) => {
        this.props.handleSearchFilterChange(event.target.value);
    };
    
    onCustomerSearchValueChange = (event) => {
        this.props.handleCustomerSearchValueChange(event.target.value);
    };

    render() {
        const { searchFilter, searchValue, showCustomersDetails } = this.props;

        return (
            <div>
                <h1>Customer Search</h1>
                <div className="customer-search">
                    <h3>Customer</h3>
                    <div className="customer-search__form">
                            {' '}
                            <button onClick={ this.fetchCustomersDetails}>
                                Search
                            </button>
                            <div className="search-filter">
                                <h5 className="title">{ searchValue }</h5>
                            </div>
                    </div>
                </div>
            </div>
        );
    };
}

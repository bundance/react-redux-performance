import React from 'react';
import CustomerSearch from '../customer-search/customer-search.container';

const Customer = ({
    buttonInstances,
    addButtonInstance
}) => (
    <div>
        Add Button instance:
        <button onClick={ () => addButtonInstance()}>
            Search
        </button>
        {buttonInstances.map(instance => (
            <CustomerSearch key={instance} />
        ))}
    </div>
);


export default Customer;


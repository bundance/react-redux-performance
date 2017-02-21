import { connect } from 'react-redux';
import { getInstances } from '../../state/customer/customer.selectors';
import { addButtonInstance } from '../../state/customer/customer.actions';
import Customer from './customer.component';
import { toJS } from '../../utils/immutable-utils/to-js';

const mapStateToProps = state => {
    const retVal = {
        buttonInstances: getInstances(state)
    };
    console.log({ retVal });
    return retVal;
};

const mapDispatchToProps = ({
    addButtonInstance
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Customer));
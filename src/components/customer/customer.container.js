import { connect } from 'react-redux';
import { getInstances } from '../../state/customer/customer.selectors';
import { addButtonInstance } from '../../state/customer/customer.actions';
import Customer from './customer.component';

const mapStateToProps = state => ({
    buttonInstances: getInstances(state)
});

const mapDispatchToProps = ({
    addButtonInstance
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
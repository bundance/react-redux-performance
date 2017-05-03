import { connect } from 'react-redux';
import ToDo from './todo.component';

const mapStateToProps = (state, ownProps) => ({
    todo: ownProps.todo
});

export default connect(mapStateToProps)(ToDo);
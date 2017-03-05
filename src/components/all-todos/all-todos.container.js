import { connect } from 'react-redux';
import AllTodos from './all-todos.component';
import { toJS } from '../../utils/immutable-utils/to-js';
import selectors from '../../state/todo-list/todo-list.reselectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state, ownProps) => ({
    todos: selectors.getAllTodos(state)
});

export default connect(mapStateToProps)(WhyDidYouUpdate(toJS(AllTodos)));
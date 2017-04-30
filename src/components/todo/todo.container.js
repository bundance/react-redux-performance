import { connect } from 'react-redux';
import selectors from '../../state/todo-list/todo-list.selectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';
import { toJS } from '../../utils/immutable-utils/to-js';
import Todo from './todo.component.js';

const mapStateToProps = (state, ownProps) => ({
    todo: selectors.getTodo(ownProps.todo.id, state)
});

export default connect(mapStateToProps)(WhyDidYouUpdate(toJS(Todo)));
import { connect } from 'react-redux';
import UncompletedTodos from './uncompleted-todos.component';
import { toJS } from '../../utils/immutable-utils/to-js';
import { toggleCompleted } from '../../state/todo-list/todo-list.actions.js';
import selectors from '../../state/todo-list/todo-list.selectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state, ownProps) => ({
    todos: selectors.getUncompletedTodos(state)
});

const mapDispatchToProps = ({
    toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(toJS(UncompletedTodos)));
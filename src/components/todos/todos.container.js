import { connect } from 'react-redux';
import Todos from './todos.component.js';
import { toJS } from '../../utils/immutable-utils/to-js';
import { 
    toggleCompleted
} from '../../state/todo-list/todo-list.actions.js';
import selectors from '../../state/todo-list/todo-list.reselectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state, ownProps) => ({
    todos: ownProps.hideCompleted ? selectors.getVisibleTodos(state) : selectors.getTodos(state)
});

const mapDispatchToProps = ({
    toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(toJS(Todos)));
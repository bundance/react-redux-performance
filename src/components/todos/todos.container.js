import { connect } from 'react-redux';
import Todos from './todos.component.js';
import { toggleCompleted } from '../../state/todo-list/todo-list.actions.js';
import selectors from '../../state/todo-list/todo-list.selectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state) => ({
    todos: selectors.getAllTodos(state)
});

const mapDispatchToProps = ({
    toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(Todos));
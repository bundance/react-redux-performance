import { connect } from 'react-redux';
import CompletedTodos from './completed-todos.component';
import { toggleCompleted } from '../../state/todo-list/todo-list.actions.js';
import selectors from '../../state/todo-list/todo-list.selectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state, ownProps) => ({ 
    todos: selectors.getCompletedTodos(state) 
});
    
const mapDispatchToProps = ({
    toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(CompletedTodos));
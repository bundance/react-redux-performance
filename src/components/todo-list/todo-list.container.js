import { connect } from 'react-redux';
import Todos from './todo-list.component';
import { toggleCompleted } from '../../state/todo-list/todo-list.actions';
import selectors from '../../state/todo-list/todo-list.selectors';

const mapStateToProps = (state) => ({
    todos: selectors.getAllTodos(state)
});

const mapDispatchToProps = ({
    toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
import { connect } from 'react-redux';
import ToDoList from './todo-list.component';
import { toJS } from '../../utils/immutable-utils/to-js';
import { 
    onRefreshClick, 
    onTodoChange,
    addTodo 
} from '../../state/todo-list/todo-list.actions';
import selectors from '../../state/todo-list/todo-list.selectors';

const mapStateToProps = (state) => ({
    newTodo: selectors.getNewTodo(state),
    todos: selectors.getTodos(state),
    refreshCount: selectors.getRefreshCount(state)
});

const mapDispatchToProps = ({
    onRefreshClick,
    onTodoChange,
    addTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(ToDoList));
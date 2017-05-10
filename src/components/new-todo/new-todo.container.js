import { connect } from 'react-redux';
import NewTodo from './new-todo.component';
import {
    handleTodoChange,
    handleAddTodo
} from '../../state/todo-list/todo-list.actions';
import { selectNewTodo } from '../../state/new-todo/new-todo.selectors';

const mapStateToProps = state => ({
    text: selectNewTodo(state)
});

const mapDispatchToProps = ({
    onTodoChange: handleTodoChange,
    handleAddTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
import { connect } from 'react-redux';
import NewTodo from './new-todo.component';
import {
    handleTodoChange,
    handleAddTodo
} from '../../state/todo-list/todo-list.actions';
import { selectNewTodo } from '../../state/new-todo/new-todo.selectors';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = state => ({
    text: selectNewTodo(state)
});

const mapDispatchToProps = ({
    handleTodoChange,
    handleAddTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(NewTodo));
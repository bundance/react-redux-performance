import { connect } from 'react-redux';
import NewTodo from './new-todo.component';
import {
    onTodoChange,
    addTodo
} from '../../state/todo-list/todo-list.actions';
import { selectNewTodo } from '../../state/new-todo-input/new-todo-input.selectors';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = state => ({
    text: selectNewTodo(state)
});

const mapDispatchToProps = ({
    onTodoChange,
    addTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(NewTodo));
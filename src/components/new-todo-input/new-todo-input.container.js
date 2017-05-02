import { connect } from 'react-redux';
import NewTodoInput from './new-todo-input.component';
import {
    onTodoChange,
    addTodo
} from '../../state/todo-list/todo-list.actions';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapDispatchToProps = ({
    onTodoChange,
    addTodo
});

export default connect(null, mapDispatchToProps)(WhyDidYouUpdate(NewTodoInput));
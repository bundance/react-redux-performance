import { connect } from 'react-redux';
import NewTodoInput from './new-todo-input.component';
import { toJS } from '../../utils/immutable-utils/to-js';
import {
    onTodoChange,
    addTodo
} from '../../state/todo-list/todo-list.actions';
import selectors from '../../state/todo-list/todo-list.reselectors';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state) => ({
    newTodo: selectors.getNewTodo(state)
});

const mapDispatchToProps = ({
    onTodoChange,
    addTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(toJS(NewTodoInput)));
import { connect } from 'react-redux';
import Todos from './todos.component.js';
import { toJS } from '../../utils/immutable-utils/to-js';
import { toggleCompleted } from '../../state/todo-list/todo-list.actions.js';
import selectors from '../../state/todo-list/todo-list.selectors.js';
import WhyDidYouUpdate from '../../utils/perf/why-did-you-update';

const mapStateToProps = (state) => {
    const mapStateToPropsTodos = {
        todos: selectors.getAllTodos(state)
    };
    console.log({ mapStateToPropsTodos});

    return mapStateToPropsTodos;
};

const mapDispatchToProps = ({
    toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(WhyDidYouUpdate(toJS(Todos)));
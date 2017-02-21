import { connect } from 'react-redux';
import ToDoList from './todo-list.component';
import { 
    onRefreshClick, 
    onTodoChange,
    addTodo 
} from '../../state/todo-list/todo-list.actions';
import selectors from '../../state/todo-list/todo-list.selectors';

const mapStateToProps = (state) => {
    console.log({ state});
    const retVal = {
        newTodo: selectors.getNewTodo(state),
        todos: selectors.getTodos(state),
        refreshCount: selectors.getRefreshCount(state)
    };
    console.log({ retVal });
    
    return retVal;
};

const mapDispatchToProps = ({
    onRefreshClick,
    onTodoChange,
    addTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList); 
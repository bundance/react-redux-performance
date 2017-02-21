import { connect } from 'react-redux';
import ToDoList from './todo-list.component';
import { onRefreshClick } from '../../state/todo-list/todo-list.actions';
import selectors from '../../state/todo-list/todo-list.selectors';
console.log({ selectors });
const mapStateToProps = (state) => {
    console.log({ state});
    const retVal = {
        todos: selectors.getTodos(state),
        refreshCount: selectors.getRefreshCount(state)
    };
    console.log({ retVal });
    
    return retVal;
};

const mapDispatchToProps = ({
    onRefreshClick
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList); 
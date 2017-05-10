import { connect } from 'react-redux';
import { handleTodoChange } from './state/todo-list/todo-list.actions';
import { toggleCompleted } from './state/todo-list/todo-list.actions';
import App from './App';

const mapDispatchToProps = ({
    handleTodoChange,
    toggleCompleted
});
export default connect(null, mapDispatchToProps)(App);

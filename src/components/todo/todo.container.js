import { connect } from 'react-redux';
import { toggleTodo } from '../../state/todo/todo.actions';
import Todo from './todo.component';

const mapStateToProps = ({
    
});

const mapDispatchToProps = ({
    toggleTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
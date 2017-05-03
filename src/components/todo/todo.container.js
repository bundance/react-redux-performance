import { connect } from 'react-redux';
import ToDo from './todo.component';


/**
 * This doesn't do anything beyond pass the props passed to it directly to ToDo.component.
 * However, because connect() memoizes each property in the object returned from mapStateToProps,
 * this prevents the connected component (ToDo) from rendering unnecessarily.
 *
 * If we didn't use todo.container, but used todo.component directly instead, we'd need to
 * use our own shouldComponentUpdate() function in ToDo.component.
 * 
 * @param state
 * @param ownProps
 */
const mapStateToProps = (state, ownProps) => ({
    todo: ownProps.todo
});

export default connect(mapStateToProps)(ToDo);
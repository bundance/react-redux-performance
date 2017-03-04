import React, { PropTypes } from 'react';
import './todo.css' 

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object
    };

    // This stops unnecessary renders of the ToDo component, but only by comparing Todo.text
    shouldComponentUpdate(nextProps, nextState) {
        return !(nextProps.todo.text === this.props.todo.text);
    }

    render() {

        const { todo } = this.props;

        return (
            <span className={todo.completed ? 'completed' : 'uncompleted'}>
                ToDo: {todo.text}
            </span>
        )
    }
}
import React, { PropTypes } from 'react';
import './todo.css' 

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object
    };

    // This stop unnecessary todo renders
    shouldComponentUpdate(nextProps) {
        return !(nextProps.todo.completed === this.props.todo.completed
            && nextProps.todo.id === this.props.todo.id
            && nextProps.todo.text === this.props.todo.text)
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
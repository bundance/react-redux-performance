import React, { PropTypes } from 'react';
import './todo.css'

export default class Todo extends React.PureComponent {
    static propTypes = {
        todo: PropTypes.object,
        toggleCompletedToDo: PropTypes.func.isRequired,
    };

    render() {
        const { todo, toggleCompletedToDo } = this.props;

        const isCompletedClassname = todo.completed ? 'completed' : 'uncompleted';

        console.log('******** ToDo renderered');

        return (
            <div>
                <input type="checkbox"
                       name={todo.id}
                       checked={todo.completed}
                       onChange={toggleCompletedToDo}
                />

                <span className={isCompletedClassname} >
                ToDo: {todo.text}
                </span>
            </div>
        )
    }
}
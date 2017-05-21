import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import './todo.css'

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object,
        toggleCompletedTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // shouldUpdate is true if the component should update (i.e. nextProps or nextState is different from
        // this.props or this.state)
        const shouldUpdate = shallowCompare(this, nextProps, nextState);
        console.log(`Todo ${this.props.todo.id} shouldUpdate is ${ shouldUpdate }`);

        return shouldUpdate;
    }

    render() {
        const { todo, toggleCompletedTodo } = this.props;
        const isCompletedClassname = todo.completed ? 'completed' : 'uncompleted';

        return (
            <div>
                <input type="checkbox"
                       name={todo.id}
                       checked={todo.completed}
                       onChange={toggleCompletedTodo}
                />

                <span className={isCompletedClassname} >
                    ToDo: {todo.text}
                </span>
            </div>
        )
    }
}
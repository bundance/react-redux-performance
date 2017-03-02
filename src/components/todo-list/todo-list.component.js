import React, { PropTypes } from 'react';
import Todos from '../todos/todos.container.js';
import './todo-list.css';
import NewTodoInput from '../new-todo-input/new-todo-input.container';

class ToDoList extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            hideCompleted: false
        }
    }

    onToggleHideCompleted = () => {
        this.setState({ hideCompleted: !this.state.hideCompleted })
    };
    
    render() {
        const { hideCompleted } = this.state;

        return (
            <div className="todo-list">
                <NewTodoInput />
                <Todos hideCompleted={ hideCompleted }/>
                <div>
                    <button onClick={this.onToggleHideCompleted}>
                        {hideCompleted ? 'Unh' : 'H'}ide Completed
                    </button>
                </div>
            </div>
        )
    }
}

export default ToDoList;



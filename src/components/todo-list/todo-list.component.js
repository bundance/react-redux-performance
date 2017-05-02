import React from 'react';
import Todos from '../todos/todos.container.js';
import NewTodoInput from '../new-todo-input/new-todo-input.container';
import './todo-list.css';

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
                <h3>All Todos</h3>
                <Todos hideCompleted={ hideCompleted }/>
                
                <div>
                    <button onClick={this.onToggleHideCompleted}>
                        {hideCompleted ? 'Show' : 'Hide'} Completed
                    </button>
                </div>
            </div>
        )
    }
}

export default ToDoList;



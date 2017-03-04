import React from 'react';
import Todos from '../todos/todos.container.js';
import CompletedTodos from '../completed-todos/completed-todos.container.js';
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
                <h3>All Todos</h3>
                <Todos hideCompleted={ hideCompleted }/>
                
                <h3>Completed Todos</h3>
                {!hideCompleted && <CompletedTodos />}
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



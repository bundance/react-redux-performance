import React, { PropTypes } from 'react';
import Todo from '../todo/todo.component';
import './todo-list.css';
import NewTodoInput from '../new-todo-input/new-todo-input.container';

class ToDoList extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        todos: PropTypes.array,
        onTodoChange: PropTypes.func.isRequired,
        toggleCompleted: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        
        this.state = {
            hideCompleted: false
        }
    }

    onToggleHideCompleted = () => {
        this.setState({ hideCompleted: !this.state.hideCompleted })
    };
    
    onToggleCompleted = (event) => {
        this.props.toggleCompleted(event.target.name, event.target.value === 'on');
    };
    
    render() {
        const { todos } = this.props;
        const { hideCompleted } = this.state;

        return (
            <div className="todo-list">
                <NewTodoInput />
                <ul>
                    {todos && todos.map((todo, index) =>
                    (!hideCompleted || !todo.completed) &&
                        <li key={index}>
                            <input type="checkbox" name={todo.id} checked={todo.completed} onChange={this.onToggleCompleted} />
                            <Todo todo={todo} />
                        </li>)}
                </ul>
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
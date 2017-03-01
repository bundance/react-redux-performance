import React, { PropTypes } from 'react';
import Todo from '../todo/todo.component';
import './todo-list.css';

class ToDoList extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        todos: PropTypes.array,
        onTodoChange: PropTypes.func.isRequired,
        toggleCompleted: PropTypes.func.isRequired,
        newTodo: PropTypes.string
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
    
    render() {
        const { addTodo, newTodo, onTodoChange, todos, toggleCompleted } = this.props;
        const { hideCompleted } = this.state;
        console.log({ todos });
        return (
            <div className="todo-list">
                <input type="text" name="todo" onChange={onTodoChange}/>
                <button onClick={() => addTodo(newTodo)}>Add ToDo</button>
                <ul>
                    {todos && todos.map((todo, index) =>
                    (!hideCompleted || !todo.completed) &&
                        <li key={index}>
                            <input type="checkbox" name={todo.id} checked={todo.completed} onChange={toggleCompleted} />
                            <Todo todo={todo} />
                        </li>)}
                </ul>
                <div>
                    <button onClick={() => this.onToggleHideCompleted()}>
                        {hideCompleted ? 'Unh' : 'H'}ide Completed
                    </button>
                </div>
            </div>
        )
    }
}

export default ToDoList;
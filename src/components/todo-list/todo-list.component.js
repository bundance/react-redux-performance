import React, { PropTypes } from 'react';
import Todo from '../todo/todo.component';
import './todo-list.css';

class ToDoList extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        todos: PropTypes.array,
        refreshCount: PropTypes.number.isRequired,
        onRefreshClick: PropTypes.func.isRequired,
        onTodoChange: PropTypes.func.isRequired,
        newTodo: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { addTodo, refreshCount, onRefreshClick, newTodo, onTodoChange, todos } = this.props;
        
        return (
            <div className="todo-list">
                <input type="text" name="todo" onChange={onTodoChange}/>
                <button onClick={() => addTodo(newTodo)}>Add ToDo</button>
                <ul>
                    {todos && todos.map((todo, index) =>
                        <li key={index}>
                            <Todo todo={todo} />
                        </li>)}
                </ul>
                <div>
                    RefreshCount: {refreshCount}
                </div>
                <div>
                    <button onClick={() => onRefreshClick()}>Refresh</button>
                </div>
            </div>
        )
    }
}

export default ToDoList;
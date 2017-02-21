import React, { PropTypes } from 'react';

class ToDoList extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        todos: PropTypes.object,
        refreshCount: PropTypes.number.isRequired,
        onRefreshClick: PropTypes.func.isRequired,
        onTodoChange: PropTypes.func.isRequired,
        newTodo: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { addTodo, refreshCount, onRefreshClick, newTodo, onTodoChange } = this.props;
        
        return (
            <div>
                <input type="text" name="todo" onChange={onTodoChange}/>
                <button onClick={() => addTodo(newTodo)}>Add ToDo</button>
                <ul>
                    <li>
                        <div>Here be a Todo</div>
                    </li>
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
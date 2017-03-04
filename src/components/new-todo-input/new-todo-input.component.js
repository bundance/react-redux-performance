import React, { PropTypes } from 'react';

export default class NewTodoInput extends React.PureComponent {
    static propTypes = {
        onTodoChange: PropTypes.func.isRequired,
        addTodo: PropTypes.func.isRequired
    };

    onAddTodo = () => {
        this.props.addTodo();
    };

    onToDoChange = (event) => {
        this.props.onTodoChange(event.target.value)
    };

    render() {
        return (
            <div>
                <input type="text" name="todo" onChange={this.onToDoChange}/>
                <button onClick={this.onAddTodo}>Add ToDo</button>
            </div>
        )
    }
}
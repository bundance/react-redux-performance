import React, { PropTypes } from 'react';

export default class NewTodoInput extends React.PureComponent {
    static propTypes = {
        onTodoChange: PropTypes.func.isRequired,
        newTodo: PropTypes.string,
        addTodo: PropTypes.func.isRequired
    };

    onAddTodo = () => {
        this.props.addTodo(this.props.newTodo);
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
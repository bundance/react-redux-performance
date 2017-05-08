import React, { PropTypes } from 'react';

export default class NewTodo extends React.PureComponent {
    static propTypes = {
        handleAddTodo: PropTypes.func.isRequired,
        handleTodoChange: PropTypes.func.isRequired,
        text: PropTypes.string
    };

    handleClick = () => {
        this.props.handleAddTodo(this.props.text);
    };

    handleToDoChange = (event) => {
        this.props.handleTodoChange(event.target.value)
    };

    render() {
        const text = this.props.text;

        return (
            <div>
                <input type="text" value={ text } name="todo" onChange={this.handleToDoChange}/>
                <button onClick={this.handleClick}>Add ToDo</button>
            </div>
        )
    }
}
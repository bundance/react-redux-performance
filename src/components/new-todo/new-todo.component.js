import React, { PropTypes } from 'react';

export default class NewTodo extends React.PureComponent {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        onTodoChange: PropTypes.func.isRequired,
        text: PropTypes.string
    };

    handleClick = () => {
        this.props.addTodo(this.props.text);
    };

    handleToDoChange = (event) => {
        this.props.onTodoChange(event.target.value)
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
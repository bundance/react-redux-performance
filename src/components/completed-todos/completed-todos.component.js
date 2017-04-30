import React, { PropTypes } from 'react';
import Todo from '../todo/todo.container';

export default class CompletedTodos extends React.PureComponent {
    static propTypes = {
        todos: PropTypes.array,
        toggleCompleted: PropTypes.func.isRequired
    };

    onToggleCompleted = (event) => {
        this.props.toggleCompleted(event.target.name, event.target.value === 'on');
    };

    render() {
        const { todos, toggleCompleted } = this.props;
        return(
            <ul>
                {todos && todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" name={todo.id} checked={todo.completed} onChange={this.onToggleCompleted} />
                        <Todo todo={todo} />
                    </li>))
                }
            </ul>
        )
    }
}


// These both cause a re-render
// <Todo todo={todo} onClick={() => console.log('*** click ')}/>

// <input type="checkbox" name={todo.id} checked={todo.completed} onChange={event => toggleCompleted(event.target.name, event.target.value === 'on')} />
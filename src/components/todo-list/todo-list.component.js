import React, { PropTypes } from 'react';

// change this to '../todo/todo.component' and see how many re-renders are triggered!
import Todo from '../todo/todo.container';

export default class TodoList extends React.PureComponent {
    static propTypes = {
        todos: PropTypes.array,
        toggleCompleted: PropTypes.func.isRequired,
        hideCompleted: PropTypes.bool
    };

    handleCheckboxChange = (event) => {
        this.props.toggleCompleted(event.target.name, event.target.value === 'on');
    };

    render() {
        const { todos, hideCompleted } = this.props;

        return (
           <ul>
               {todos && todos.map((todo, index) => (
                   <li key={todo.id} className={hideCompleted && todo.completed ? 'hide' : 'show'}>
                       <input type="checkbox" 
                              name={todo.id} 
                              checked={todo.completed} 
                              onChange={this.handleCheckboxChange}
                       />

                       <Todo todo={todo} />

                   </li>
               ))}
           </ul>
       ) 
    }
}
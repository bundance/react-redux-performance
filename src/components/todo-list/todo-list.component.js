import React, { PropTypes } from 'react';

import Todo from '../todo/todo.component';

export default class TodoList extends React.Component {
    static propTypes = {
        hideCompleted: PropTypes.bool,
        todos: PropTypes.array,
        toggleCompleted: PropTypes.func
    };

    render() {
        const { hideCompleted, toggleCompleted, todos } = this.props;

        return (
           <ul>
               {todos && todos.map((todo, index) => (
                   <li key={todo.id} className={hideCompleted && todo.completed ? 'hide' : 'show'}>

                       <Todo
                           todo={todo}
                           toggleCompletedTodo={event =>
                               toggleCompleted(event.target.name, event.target.value === 'on')}
                       />

                   </li>
               ))}
           </ul>
       ) 
    }
}
import React, { PropTypes } from 'react';

import Todo from '../todo/todo.component';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.array,
        hideCompleted: PropTypes.bool
    };

    handleToggleCompletedTodo = event => this.props.toggleCompleted(event.target.name, event.target.value === 'on');

    render() {
        const { hideCompleted, todos } = this.props;

        return (
           <ul>
               {todos && todos.map((todo, index) => (
                   <li key={todo.id} className={hideCompleted && todo.completed ? 'hide' : 'show'}>

                       <Todo todo={todo} toggleCompletedToDo={this.handleToggleCompletedTodo} />

                   </li>
               ))}
           </ul>
       ) 
    }
}
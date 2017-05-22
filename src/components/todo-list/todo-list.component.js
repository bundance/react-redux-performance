import React, { PropTypes } from 'react';

import Todo from '../todo/todo.component';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.array,
        toggleCompleted: PropTypes.func
    };

    handleToggleCompletedTodo = event =>
        this.props.toggleCompleted(event.target.name, event.target.value === 'on');

    render() {
        const { todos } = this.props;
        console.log(' ++++++ TodoList rendered +++++ ');

        return (
           <ul>
               {todos && todos.map((todo, index) => (
                   <li key={todo.id} >

                       <Todo
                           todo={todo}
                           toggleCompletedTodo={this.handleToggleCompletedTodo}
                       />

                   </li>
               ))}
           </ul>
       ) 
    }
}
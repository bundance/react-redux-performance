import React, { PropTypes } from 'react';
import Todo from '../todo/todo.component';

export default class Todos extends React.PureComponent {
    static propTypes = {
        todos: PropTypes.array,
        toggleCompleted: PropTypes.func.isRequired
    };

    onToggleCompleted = (event) => {
        this.props.toggleCompleted(event.target.name, event.target.value === 'on');
    };

    render() {
        const { todos } = this.props;

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
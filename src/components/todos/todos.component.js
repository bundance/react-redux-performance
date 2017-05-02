import React, { PropTypes } from 'react';
import Todo from '../todo/todo.component';

export default class Todos extends React.PureComponent {
    static propTypes = {
        todos: PropTypes.array,
        toggleCompleted: PropTypes.func.isRequired,
        hideCompleted: PropTypes.bool
    };

    onToggleCompleted = (event) => {
        this.props.toggleCompleted(event.target.name, event.target.value === 'on');
    };

    render() {
        const { todos, hideCompleted } = this.props;

        return(
           <ul>
               {todos && todos.map((todo, index) => (
                   <li key={todo.id} className={hideCompleted && todo.completed ? 'hide' : 'show'}>
                       <input type="checkbox" 
                              name={todo.id} 
                              checked={todo.completed} 
                              onChange={this.onToggleCompleted} />
                       <Todo todo={todo} />
                   </li>))
               }
           </ul>
       ) 
    }
}
import React, { PropTypes } from 'react';
import Todo from '../todo/todo.container';

export default class Todos extends React.PureComponent {
    static propTypes = {
        todos: PropTypes.array,
        // toggleCompleted: PropTypes.func.isRequired
    };

    // onToggleCompleted = (event) => {
    //     this.props.toggleCompleted(event.target.name, event.target.value === 'on');
    // };
    //
    render() {
        const { todos } = this.props;

        return(
           <ul>
               {todos && todos.map((todo, index) => (
                   <li key={index}>
                       <Todo todo={todo} />
                   </li>))
               }
           </ul>
       ) 
    }
}

// <input type="checkbox" name={todo.id} checked={todo.completed} onChange={this.onToggleCompleted} />
                       
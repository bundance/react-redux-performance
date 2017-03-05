import React, { PropTypes } from 'react';
import Todo from '../todo/todo.component';

export default class AllTodos extends React.PureComponent {
    static propTypes = {
        todos: PropTypes.object
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        const { todos } = this.props;
        const todoArray = todos && Object.entries(todos);
        console.log({ todoArray});

        return(
            <ul>
                {todoArray && todoArray.map((todoItem) => (
                    <li key={todoItem[0]}>
                        <Todo todo={todoItem[1]} />
                    </li>))
                }
            </ul>
        )
    }
}

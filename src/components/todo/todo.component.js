import React, { PropTypes } from 'react';
import './todo.css' 

Todo.proptypes = {
    todo: PropTypes.object.isRequired
};

export default function Todo({
    todo
})  {
    return (
        <span className={todo.completed ? 'completed' : 'uncompleted'}>
            ToDo: {todo.text}
        </span>
    )
}
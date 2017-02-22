import React, { PropTypes } from 'react';
import './todo.css' 

Todo.proptypes = {
    todo: PropTypes.object.isRequired
};

export default function Todo({
    todo
})  {
    console.log({ todo });
    return (
        <div className={todo.completed ? 'completed' : 'uncompleted'}>
            ToDo: {todo.text}
        </div>
    )
}
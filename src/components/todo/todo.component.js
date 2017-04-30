import React, { PropTypes } from 'react';
import './todo.css' 

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object
    };

    // This stops unnecessary re-renders of the ToDo component. Note that it must only compare Todo.text, as this
    // is the only property of the todo object that's rendered. If you compare todo.id, the component will both
    // render when it should, and not render when it shouldn't.
    //
    // Note also that this will stop React Perf from reporting a wasteful re-rendering, even if mapStateToProps
    // tries to trigger one, as the whole point of shouldComponentUpdate is to stop wasteful re-renders!  
    //
    // To detect wasteful mapStateToProps, use the WhyDidYouUpdate HoC
    shouldComponentUpdate(nextProps, nextState) {
        return !(nextProps.todo.text === this.props.todo.text);
    }

    render() {
        const { todo } = this.props;
        return (
            <span className={todo.completed ? 'completed' : 'uncompleted'}>
                ToDo: {todo.text}
            </span>
        )
    }
}
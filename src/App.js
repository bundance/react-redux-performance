import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodo from './components/new-todo/new-todo.container';
import TodoList from './components/todo-list/todo-list.container';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { hideCompleted: false }
    }

    onToggleHideCompleted = () => this.setState({ hideCompleted: !this.state.hideCompleted });

    render() {
        const { hideCompleted } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>The Legendary ToDo List</h2>
                </div>
                <div className="App-intro">
                    <div className="todo-list">

                        <NewTodo />

                        <h3>All Todos</h3>

                        <TodoList hideCompleted={ hideCompleted }/>

                        <div>
                            <button onClick={this.onToggleHideCompleted}>
                                {hideCompleted ? 'Show' : 'Hide'} Completed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

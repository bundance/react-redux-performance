import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import TodoList from './components/todo-list1/todo-list1.component.js';
import NewTodoInput from './components/new-todo-input/new-todo-input.container';
import Todos from './components/todos/todos.container';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false
        }
    }

    onToggleHideCompleted = () => {
        this.setState({ hideCompleted: !this.state.hideCompleted })
    };

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

                        <NewTodoInput />

                        <h3>All Todos</h3>

                        <Todos hideCompleted={ hideCompleted }/>

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

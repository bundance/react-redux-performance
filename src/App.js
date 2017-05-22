import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list.container';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoList  />
            </div>
        );
    }
}

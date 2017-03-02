import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list/todo-list.component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>The Legendary ToDo List</h2>
        </div>
        <div className="App-intro">
            <div>
                <TodoList />
            </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list/todo-list.container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          Here be the Perf Test components you want to test:
            
            <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

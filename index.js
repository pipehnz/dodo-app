import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoApp from './components/TodoApp';
import './style.css';

class App extends Component {
  
  render() {
    return (
      <>
      <div className="jumbotron">
        <div className="container">          
          <h1 class="display-3">dodo</h1>
          <p class="lead">This is a simple to-do app</p>
        </div>        
      </div>
      <div className="container">
        <TodoApp></TodoApp>
      </div>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));

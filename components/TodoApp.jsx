import React, { Component }  from 'react'
import TodoAppForm from './TodoAppForm'
import TodoList from './TodoList'

class TodoApp extends Component 
{
  constructor() {
    super();

    this.state = {
      todos: []
    }
  }

  addTodo = (todo) => {

    const newId = this.state.todos.length + 1
    
    // 
    const newTodo = {
      id: newId,
      text: todo.text
    }

    //
    this.setState({
      todos: [newTodo,...this.state.todos]
    })
  }

  render () {
    return (
      <>        
        <TodoAppForm handleAddTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </>      
    )
  }
}

export default TodoApp
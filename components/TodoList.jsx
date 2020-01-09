import React, { Component } from 'react'

import TodoListItem from './TodoListItem'

class TodoList extends Component 
{
  constructor(props) {
    super(props);
  }

  render () {
    return (
      this.props.todos.map(i => {
        return (
          <TodoListItem key={i.id} todo={i} />
        )
      })
    )
  }
}

export default TodoList
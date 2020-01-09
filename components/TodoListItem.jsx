import React, { Component } from 'react'

class TodoListItem extends Component
{
  render () { 
    return (
      <div className="animated fadeIn m-2">
        { this.props.todo.text }  
        <hr />
        <button className="btn btn-sm btn-primary">Mark as read</button>
      </div>
    )
  }
}

export default TodoListItem
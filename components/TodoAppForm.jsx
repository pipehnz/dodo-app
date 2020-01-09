import React, { Component } from 'react'

class TodoAppForm extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleInputText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleButton = (e) => {
    this.props.handleAddTodo(this.state)

    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <div className="input-group mb-4">
        <input 
          value={this.state.text}
          name="todoText"
          type="text" 
          className="form-control" 
          onChange={ this.handleInputText }
          placeholder="Type here ..." />
        <div class="input-group-append">
          <button 
            className="btn btn-sm btn-secondary" 
            type="button" 
            onClick={this.handleButton}>
              Add ToDo
          </button>
        </div>
      </div>
    )
  }
}

export default TodoAppForm
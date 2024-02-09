import React, { Component } from 'react'

export default class TodoAdd extends Component {
  state={
    text:''
  }
  setText=(e)=>{
    this.setState({text:e.target.value})
  }
  render() {
    return (
      <div className='d-flex' >
        <input  type="text" placeholder='Add todo' className='form-control'
        value={this.state.text}
        onChange={this.setText} />
        <button className='btn btn-info' 
        onClick={()=>this.props.onAddtodo(this.state.text) | (this.state.text='')}>Add</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './TodoListItem.css'
export default class TodoListItem  extends Component {
  render(){
    let clazz=''
    if (this.props.important) {
      clazz+=' imp'
    }

    let doneclazz=''
    if (this.props.done) {
      doneclazz+=' done'
      
    }

    const deleteBtn = this.props.deleteBtn
    const onImpTodo= this.props.onImpTodo
    
    return (
      <span className='d-flex justify-content-between'>
        <span onClick={this.props.doneTodo}  className= {`flex-grow-1 ${clazz} ${doneclazz}`} >{this.props.title}</span>
        <button className='btn btn-outline-danger' onClick={deleteBtn}><i className="bi bi-trash-fill"></i></button>
        <button className='btn btn-outline-warning' onClick={onImpTodo}><i className="bi bi-exclamation-circle-fill"></i></button>
        
      </span>
    )
  }
}

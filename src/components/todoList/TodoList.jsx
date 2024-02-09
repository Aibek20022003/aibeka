import React from 'react'
import TodoListItem from '../todoListItem/todoListItem'

const TodoList = (props) => {
  console.log(props.todoData);
  const deletebtn = props.deleteBtn
  const onImpTodo= props.onImpTodo
  const doneTodo=props.doneTodo
  
  if (props.todoData.length === 0) {
    return <p className='soz'>Создор тугонду!</p>
  }
  
  const elementter=props.todoData.map(el=>{
    return(
       <li className='list-group-item' key={el.id}>
         <TodoListItem title={el.title}  deleteBtn={()=>deletebtn(el.id)}
          onImpTodo={()=>onImpTodo(el.id)}
           important={el.important}
            doneTodo={()=>doneTodo(el.id)} 
            done={el.done}/>
         </li>
    )
  })
  return (
    <ul className='list-group'>
      {elementter}
      
     
    </ul>
  )
}

export default TodoList

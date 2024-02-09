import React, { useState } from 'react';
import TodoHeader from './components/todoHeader/TodoHeader';
import TodoSearch from './components/todoSearch/TodoSearch';
import TodoAdd from './components/todoAdd/TodoAdd';
import TodoList from './components/todoList/todoList';

  const App = () => {
  const [todoData, settodoData] = useState([
    { id: 1, title: 'Learn React', important: false, done: false },
    { id: 2, title: 'Learn JS', important: false, done: false },
    { id: 3, title: 'Learn Redux', important: false, done: false },
  ]);

    const deleteBtn = (id) => {
    let del = todoData.filter(el => el.id !== id);
    settodoData(del)
  };
  

  
 const addNewTodo=(text)=>{

  if (text.trim()) {
    const ids = todoData.map(el=>el.id)
    const newTodo= {
      title:text, 
      important:false, 
      done:false, 
      id:ids.at(-1)+1 || 1}
      settodoData([...todoData, newTodo])
  }

    
  }
   const impTodo = (id) => {
    console.log(id);
    const index=todoData.findIndex(el=>el.id===id)
     console.log(index, 'index');
     const todo=todoData[index]
     const updTodo={...todo, important: !todo.important}
     const before=todoData.slice(0, index)
     const after=todoData.slice(index+1)
     settodoData([...before, updTodo, ...after])
     console.log(index);
  }
  const doneTodo = (id) => {
    console.log(id);
    const index=todoData.findIndex(el=>el.id===id)
     console.log(index, 'index');
     const todo=todoData[index]
     const updTodo={...todo, done: !todo.done}
     const before=todoData.slice(0, index)
     const after=todoData.slice(index+1)
     settodoData([...before, updTodo, ...after])
     console.log(index);
  }

  return (
    <div style={{ width: 500 }} className='mx-auto'>
      <TodoHeader />
      <TodoSearch />
      <TodoList todoData={todoData} deleteBtn={deleteBtn}  onImpTodo={impTodo} doneTodo={doneTodo} />
      <TodoAdd onAddtodo={addNewTodo} />
    </div>
  );
};

export default App;



















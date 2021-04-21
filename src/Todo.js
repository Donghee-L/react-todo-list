import React from 'react'


export default function Todo({ todo,toggleTodo }) {  
  function handleTodo() {
    toggleTodo(todo.id)
  }


  return (
    <div>     
      <input type="checkbox" checked={todo.complete} onChange={handleTodo} />
      {todo.name}
    </div>
  )
}

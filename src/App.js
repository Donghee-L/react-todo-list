// import logo from './logo.svg';
import {useState,useRef,useEffect} from 'react'
import TodoList from './TodoList'
import Navbar from './Navbar'

import './main.css'


const LOCAL_STORAGE_KEY = 'todoList.todos'

function App() {

  const [todos, setTodos] = useState([])
  const todoInput = useRef()
  
  useEffect(()=>{
    const savedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (savedTodo) {setTodos(savedTodo)}
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])


  function addTodo(event) {
    const input = todoInput.current.value
    if (!input) { return ;}
    setTodos(prevTodos=>{
      return [...prevTodos, {id:1,name:input,complete:false}]
    })
    todoInput.current.value = ''
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function clearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

  }


  return (
    <>
      <Navbar />

      <div className='todo-list-title'>
        <h2>My TodoList</h2>
      </div>

      <div className='app'>
        <TodoList todos ={todos} toggleTodo={toggleTodo} />
        <input className='todoInput' type="text" ref={todoInput} />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearTodo}>Clear Completed</button>
        <span> {todos.filter(todo => todo.complete).length} /{todos.length}</span>
      </div>
    </>
  )
}

export default App;

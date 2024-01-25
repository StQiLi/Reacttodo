import { useState } from "react";
import { TodoForm } from "./TodoForm";

export default function App() {
  const [newTask, setNewTask] = useState("")
  const [todos, setTodos] = useState([])

  const handleSumbit = (e) => {
    e.preventDefault(); 
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
      { id: crypto.randomUUID(), title: newTask, completed: false },
      ]    
    })
    setNewTask("")
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = completed 
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  const deletetodos = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed}
              onChange={e => {toggleTodo(todo.id, e.target.checked)}}
              />
              {todo.title} 
            </label>
            <button 
              className="btn btn-danger"
              onClick={() => deletetodos(todo.id)}
            >Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  );
}
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTask) => {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
      { id: crypto.randomUUID(), title: newTask, completed: false },
      ]    
    })
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

  const deleteTodos = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
    </>
  )
}
import { useState } from "react";

export function TodoForm() {
  const [newTask, setNewTask] = useState("")

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

  return (
    <form className="new-task-form" onSubmit={handleSumbit}>
        <div className="form-row">
          <label htmlFor="task">New Task</label>
          <input 
            value={newTask} 
            onChange={e => setNewTask(e.target.value)}
            type="text" 
            id="task"
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )


}
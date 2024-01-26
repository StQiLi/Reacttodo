import { useState } from "react";

export function TodoForm({ onSubmit }) {
  const [newTask, setNewTask] = useState("") // useState hook

  const handleSumbit = (e) => {
    e.preventDefault(); // prevents from reloading
    if (newTask === "") return // prevents from empty string task

    onSubmit(newTask) // calls addTask from app.jsx
    setNewTask("") // clearning input field 
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
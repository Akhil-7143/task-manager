import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "../TaskList";
import "./index.css";

const TaskForm = ({ onSubmitTask }) => {
    // hnadle Errors
  const [titleError, setTitleError] = useState(false);
  const [descError,setDescError]=useState(false)
  const [dateError,setDateErr]=useState(false)
  const [priorityErr,setPriorityErr]=useState(false)
  // Handle inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitTask({ title, description, dueDate, priority });
    if (title===""){
        setTitleError(true);
    }else if(description===""){
        setDescError(true)
    }else if(priority===""){
        setPriorityErr(true)
    }else{
        setDateErr(true)
    }
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
  };



  return (
    <>
      <div className="task-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="leble-input-container">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {titleError && <p className="error">*required</p>}
            </div>
            <div className="leble-input-container">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {descError && <p className="error">*required</p>}
            </div>

            <div className="leble-input-container">
              <label htmlFor="priority">Priority</label>
              <input
                type="text"
                placeholder="Task Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
              {priorityErr && <p className="error">*required</p>}
            </div>
            <div className="leble-input-container">
              <label htmlFor="Date">Date</label>
              <input
                type="date"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              {dateError && <p className="error">*required</p>}
            </div>
          </div>

          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;

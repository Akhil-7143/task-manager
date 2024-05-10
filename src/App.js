import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    const initialTasks = [
      {
        id:uuidv4(),
        title: "Title 1",
        description: "Title 1 Description",
        priority: "High",
        dueDate: "2021/12/21",
        isSelected: false,
      },
      {
        id:uuidv4(),
        title: "Title 2",
        description: "title 2 decription",
        priority: "Medium",
        dueDate: "2021/12/21",
        isSelected: false,
      },
    ];
    setTasks(initialTasks);
  }, []);

  // Function to add a new task
  const addTask = (newTask) => {
    const insertTask = {
      ...newTask,
      id: uuidv4(),
      isSelected: false,
    };
    const updatedTasks = [...tasks, insertTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Function to toggle task completion
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Function to edit a task
  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Function to sort tasks by due date
  const sortByDate = () => {
    const sortedTasks = [...tasks].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
    setTasks(sortedTasks);
  };

  // Function to sort tasks by priority
  const sortByPriority = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    setTasks(sortedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onSubmitTask={addTask} />
      {isEmpty ? (
        <div className="empty">
          <img
            src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1715329098~exp=1715332698~hmac=c79e97a778629e05c39dcbfdbfea4aed8227fef0b86611f1f25a4855c55f64ea&w=826"
            alt="empty"
            className="empty-image"
          />
          <h1 className="empty-text">No Tasks Here</h1>
        </div>
      ) : (
        <TaskList
          TaskLists={tasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      )}
    </div>
  );
}

export default App;

import React from "react";
import Task from "../Task";
import './index.css'

const TaskList = ({ TaskLists, onDelete, onToggle, onEdit }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {TaskLists.map((task) => (
          <Task
            taskDetails={task}
            key={task.id}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

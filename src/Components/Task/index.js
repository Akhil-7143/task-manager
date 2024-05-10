import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

import "./index.css";

const Task = ({ taskDetails, onDelete, onToggle, onEdit }) => {
  const { id, title, description, dueDate, priority } = taskDetails;

  const onDeleteTask = () => {
    onDelete(id);
  };

  const onEditTask = () => {
    onEdit(id);
  };

  return (
    <li>
      <input type="checkbox" className="checkbox" />
      <div className="title-description-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div>
        <p className="date">{dueDate}</p>
        <p className="priority">{priority}</p>
      </div>
      <div className="edit-delete-container">
        <button type="button" className="button1" onClick={onEditTask}>
          <CiEdit />
        </button>
        <button type="button" className="button1" onClick={onDeleteTask}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export default Task;

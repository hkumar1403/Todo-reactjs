import { useState } from "react";

export const TaskItem = ({ task, onClick, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return !isEditing ? (
    <li
      className={`task-item task-item--${task.completed ? "completed" : "pending"}`}
      onClick={() => onClick(task.id)}
    >
      <span className="task-item__text">{title}</span>
      <span className="task-item__badge">
        {task.completed ? "Done" : "Pending"}
      </span>
      <div className="task-item__actions" onClick={(e) => e.stopPropagation()}>
        <button onClick={(e) => onDelete(e, task.id)}>Delete</button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
    </li>
  ) : (
    <li>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEdit(task.id, title);
            setIsEditing(false);
          }
          if (e.key === "Escape") {
            setTitle(task.title);
            setIsEditing(false);
          }
        }}
      />
      <button
        onClick={() => {
          onEdit(task.id, title);
          setIsEditing(!isEditing);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setTitle(task.title);
          setIsEditing(!isEditing);
        }}
      >
        Cancel
      </button>
    </li>
  );
};

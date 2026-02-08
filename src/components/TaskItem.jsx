export const TaskItem = ({ task, onClick, onDelete, onEdit }) => {
  return (
    <li
      className={`task-item task-item--${task.completed ? "completed" : "pending"}`}
      onClick={() => onClick(task.id)}
    >
      <span className="task-item__text">{task.title}</span>
      <span className="task-item__badge">{task.completed ? "Done" : "Pending"}</span>
      <div className="task-item__actions" onClick={(e) => e.stopPropagation()}>
        <button onClick={(e) => onDelete(e, task.id)}>Delete</button>
        <button onClick={(e) => onEdit(e, task.id)}>Edit</button>
      </div>
    </li>
  );
};

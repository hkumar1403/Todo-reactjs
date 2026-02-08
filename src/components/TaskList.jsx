import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onClick, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li className="task-list-empty">No tasks to show</li>
      ) : (
        tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onClick={onClick}
          onDelete={onDelete}
        />
        ))
      )}
    </ul>
  );
};

export const TaskInput = ({ value, onChange, onSubmit }) => {
  return (
    <div className="task-input-row">
      <input type="text" value={value} onChange={onChange} placeholder="Add a task..." />
      <button onClick={onSubmit}>Add task</button>
    </div>
  );
};

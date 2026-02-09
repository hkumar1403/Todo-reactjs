export const TaskInput = ({ value, onChange, onSubmit }) => {
  return (
    <div className="task-input-row">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add a task..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      />
      <button onClick={onSubmit}>Add task</button>
    </div>
  );
};

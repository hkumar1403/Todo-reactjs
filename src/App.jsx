import "./App.css";
import { useState, useEffect } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { Select } from "./components/Select";

function App() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  // const initialTasks = [];
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit() {
    if (input === "") return;

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: input,
        completed: false,
      },
    ]);
    setInput("");
  }

  function handleClick(idToUpdate) {
    setTasks(
      tasks.map((task) =>
        task.id === idToUpdate ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function handleDelete(e, idToDelete) {
    e.stopPropagation();
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }
  function handleFilter(e) {
    setFilter(e);
  }
  function handleEdit(id, title) {
    if (title === "") return;
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, title: title } : task)),
    );
  }

  let visibleTasks = [];

  if (filter === "all") {
    visibleTasks = tasks;
  } else if (filter === "completed") {
    visibleTasks = tasks.filter((task) => task.completed);
  } else if (filter === "pending") {
    visibleTasks = tasks.filter((task) => !task.completed);
  }

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Task Dashboard</h1>
        <Select onClick={handleFilter} />
      </header>
      <TaskInput
        value={input}
        onChange={(e) => handleChange(e)}
        onSubmit={handleSubmit}
      />
      <TaskList
        tasks={visibleTasks}
        onClick={handleClick}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <p className="dashboard__stats">
        Total tasks: {total} | Tasks completed: {completed} | Tasks pending:
        {pending}
      </p>
    </div>
  );
}

export default App;

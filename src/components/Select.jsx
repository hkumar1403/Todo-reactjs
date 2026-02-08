export const Select = ({ onClick }) => {
  return (
    <select
      className="filter-select"
      name="filter"
      id="filter"
      onChange={(e) => onClick(e.target.value)}
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

const TaskItem = () => {
  return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
      <div className="flex gap-2 items-center">
        <input type="checkbox" />
        Task name
      </div>
      <button className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;

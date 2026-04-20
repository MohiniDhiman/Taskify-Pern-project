import React, { useState } from "react";

const TaskModal = ({ showTaskModal, setShowTaskModal, todos, setTodos }) => {
  if (!showTaskModal) return null;

  const [task, setTask] = useState({
    title: "",
    description: "",
    assigned: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !task.title.trim() ||
      !task.description.trim() ||
      !task.assigned.trim() ||
      !task.deadline
    ) {
      alert("Please fill all fields");
      return;
    }
    setTodos([...todos, task]);
    console.log("task", task);
    setTask({
      title: "",
      description: "",
      assigned: "",
      deadline: "",
    });
    setShowTaskModal(false);
  };
  return (
    <>
      <div className=" inset-0 fixed flex justify-center items-center backdrop-blur-sm">
        <form
          className="bg-white p-6 rounded w-96 shadow-lg flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-purple-400 mb-6">
            Create Task
          </h1>
          <input
            type="text"
            placeholder="Title"
            className="border border-purple-200 rounded-2xl p-2 mb-4 w-70 text-md outline-none"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Descritpion"
            className="border border-purple-200 rounded-2xl  p-2 mb-4 w-70 text-md outline-none "
            name="description"
            value={task.description}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Assigned by"
            className="border border-purple-200 rounded-2xl  p-2 mb-4 w-70 text-md outline-none"
            name="assigned"
            value={task.assigned}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Deadline"
            className="border border-purple-200 rounded-2xl p-2 mb-4 w-70 text-md outline-none"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
          />
          <div className="flex justify-between w-60 mt-5">
            <button
              className="bg-green-700 text-white rounded-sm p-1 w-20"
              type="submit"
            >
              Add
            </button>
            <button
              className="bg-red-700 text-white rounded-sm p-1 w-20"
              type="button"
              onClick={() => setShowTaskModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskModal;

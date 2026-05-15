import React, { useState } from "react";
import Task from "../../components/task/Task";
import { FaPlus } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import TaskModal from "../../components/modal/TaskModal";

const TeacherDashboard = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className="m-10 w-3/4">
        <div className="flex justify-between mb-10">
          <h1 className="text-2xl font-bold ml-4">Tasks</h1>
          <button
            className="inline-flex items-center gap-2  text-xl font-bold"
            onClick={() => setShowTaskModal(true)}
          >
            <p className="text-white bg-purple-800 rounded-full p-2 text-xl">
              <FaPlus />
            </p>
            Create Task
          </button>
          <TaskModal
            showTaskModal={showTaskModal}
            setShowTaskModal={setShowTaskModal}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div className="flex flex-row justify-center gap-8 text-black font-semibold text-md">
          <button className="bg-green-100 border-2 border-green-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-green-700/30 rounded-full ">
              <FaRegCheckCircle className="text-3xl p-1.5" />
            </p>{" "}
            Completed
          </button>
          <button className="bg-red-100 border-2 border-red-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-red-600/30 rounded-full">
              <MdOutlineAccessTime className="text-3xl p-1.5" />
            </p>{" "}
            Pending
          </button>
          <button className="bg-pink-100 border-2 border-pink-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-pink-600/30 rounded-full">
              <FaChartLine className=" text-3xl p-1.5" />
            </p>
            Performance
          </button>
          <button className="bg-yellow-100 border-2 border-yellow-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-yellow-500/30 rounded-full">
              <FaTrophy className="text-3xl p-1.5" />
            </p>{" "}
            Top Ranks
          </button>
        </div>
        <Task todos={todos} />
      </div>
    </>
  );
};

export default TeacherDashboard;

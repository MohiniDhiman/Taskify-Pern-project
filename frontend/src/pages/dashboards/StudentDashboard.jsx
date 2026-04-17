import React from "react";
import images from "../../assets/images";
import Task from "../../components/task/Task";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
const StudentDashboard = () => {
  return (
    <>
      <div className="m-10 mx-20 ">
        <div className="bg-purple-100 h-40 rounded-2xl mb-10 flex justify-between">
          <div className="mx-10 my-10">
            <h1 className="text-4xl font-bold mb-2">hi , dear</h1>
            <p className="text-gray-500">
              ready to start your day with some tasks ?
            </p>
          </div>
          <img src={images.woman} className="h-40 mt-2" />
        </div>
        <div className="flex flex-row justify-center gap-8 text-white font-semibold text-md">
          <button className="bg-green-700 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-white/30 rounded-full">
              <FaRegCheckCircle className="text-3xl p-1.5" />
            </p>{" "}
            completed tasks
          </button>
          <button className="bg-red-600 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-white/30 rounded-full">
              <MdOutlineAccessTime className="text-3xl p-1.5" />
            </p>{" "}
            pending tasks
          </button>
          <button className="bg-pink-300 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-white/30 rounded-full">
              <FaChartLine className=" text-3xl p-1.5" />
            </p>
            monthy performace
          </button>
          <button className="bg-yellow-400 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-white/30 rounded-full">
              <FaTrophy className="text-3xl p-1.5" />
            </p>{" "}
            rewards
          </button>
        </div>
        <div>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;

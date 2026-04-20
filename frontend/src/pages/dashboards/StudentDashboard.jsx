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
      <div className="m-10 mx-15 ">
        <div className="bg-purple-100 h-40 rounded-2xl mb-10 flex justify-between">
          <div className="mx-10 my-10">
            <h1 className="text-4xl font-bold mb-2">hi , dear</h1>
            <p className="text-gray-500">
              ready to start your day with some tasks ?
            </p>
          </div>
          <img src={images.woman} className="h-40 mt-2" />
        </div>
        <div className="flex flex-row justify-center gap-8 text-black font-semibold text-md">
          <button className="bg-green-100 border-2 border-green-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-green-700/30 rounded-full">
              <FaRegCheckCircle className="text-3xl p-1.5" />
            </p>{" "}
            completed tasks
          </button>
          <button className="bg-red-100 border-2 border-red-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-red-600/30 rounded-full">
              <MdOutlineAccessTime className="text-3xl p-1.5" />
            </p>{" "}
            pending tasks
          </button>
          <button className="bg-pink-100 border-2 border-pink-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-pink-600/30 rounded-full">
              <FaChartLine className=" text-3xl p-1.5" />
            </p>
            monthy performace
          </button>
          <button className="bg-yellow-100 border-2 border-yellow-200 rounded-md w-50 h-20 inline-flex items-center justify-center gap-2">
            {" "}
            <p className="bg-yellow-500/30 rounded-full">
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

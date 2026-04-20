import React, { useState } from "react";
import { FaCheck, FaEdit, FaUpload } from "react-icons/fa";

const Task = ({todos}) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
    { todos?.map ((todos,idx)=>(
      <div key={idx} className="bg-yellow-50 rounded-2xl flex justify-between p-4 mt-10">

        <div className="flex flex-col gap-1">
          <p className="text-blue-500 font-bold">{todos.title}</p>

          <p className="text-sm">
          {todos.description}
          </p>

          <p className="text-sm font-bold">{todos.assigned}</p>
        </div>


        <div className="flex flex-col gap-3 items-end">
          <div className="text-sm text-red-600">{todos.deadline}</div>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              className="bg-green-600 text-white px-3 py-2 rounded-xl flex items-center gap-2"
            >
              <FaUpload />
              Upload Work
            </button>
          ) : (
            <div className="flex gap-2">
  
              <button className="bg-green-600 text-white rounded-full p-2">
                <FaCheck />
              </button>

              
              <button className="bg-green-600 text-white rounded-full p-2">
                <FaEdit />
              </button>
            </div>
          )}
        </div>
      </div>
))}
    </>
  );
};

export default Task;

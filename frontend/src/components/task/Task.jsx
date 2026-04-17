import React, { useState } from "react";
import { FaCheck, FaEdit, FaUpload } from "react-icons/fa";

const Task = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="bg-yellow-50 rounded-2xl flex justify-between p-4 mt-10">

        <div className="flex flex-col gap-1">
          <p className="text-blue-500 font-bold">complete the homework</p>

          <p className="text-sm">
            read 2 and 3 chapter and find the answers give in back exercise
          </p>

          <p className="text-sm font-bold">Assigned By : mrs.neha</p>
        </div>


        <div className="flex flex-col gap-3 items-end">
          <div className="text-sm text-red-600">Deadline : 2-05-2026</div>

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
    </>
  );
};

export default Task;

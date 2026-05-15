import React from "react";
import { IoIosTrash } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const DeleteModal = ({ onClose, onConfirm }) => {
  return (
    <>
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <div
          className="absolute inset-0 bg-secdondary"
          onClick={() => setNewModal(false)}
        ></div>

        <div
          className="relative bg-light rounded-2xl shadow-lg w-[75%] sm:w-[400px] p-6 text-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            onClick={() => onClose(false)}
          >
            <RxCross2 size={20} />
          </button>

          <div className="flex justify-center mb-4">
            <IoIosTrash className="text-red-500 text-4xl" />
          </div>

          <p className="text-gray-300 text-lg font-medium mb-6">
            Are you sure you want to delete this?<br></br>This action cannot be undone.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => onClose(false)}
              className="px-5 py-2 rounded-lg border bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

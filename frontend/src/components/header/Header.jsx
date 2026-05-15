import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import SearchInput from "../search/SearchInput";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white">
        <h1 className="text-xl font-bold text-purple-800">TASKIFY</h1>
        <h1 className="text-lg font-semibold absolute left-1/6">
         Student Dashboard
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString()} -{" "}
            {new Date().toLocaleDateString("en-US", { weekday: "long" })}
          </p>
        </h1>
        <SearchInput/>
        <div className="flex gap-6 text-2xl">
          <p>
            <IoNotifications />
          </p>
          <p> 
            <FaUserGraduate />
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default Header;

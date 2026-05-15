import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={handleBack} className="bg-secondary p-1 rounded-full">
        <IoIosArrowBack className="text-primary " size={18} />
      </button>
    </>
  );
};

export default BackButton;

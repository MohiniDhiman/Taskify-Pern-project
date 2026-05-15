import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = ({
  placeholder = "Search...",
  onSearch = () => {},
  delay = 5000,
  className = ""
}) => {
  const [value, setValue] = useState("");

  // Debounce handler
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value.trim());
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, onSearch]);

  return (
    <div className={`relative max-w-96 flex items-center ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-2 py-1 rounded-xl border border-gray-600"
      />

      <span className="absolute right-3 text-gray-500">
        <IoSearchOutline />
      </span>
    </div>
  );
};

export default SearchInput;

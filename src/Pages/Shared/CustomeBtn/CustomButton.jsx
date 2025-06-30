import React from "react";

const CustomButton = ({ children, onClick, className = "", border }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-[10px]
        py-[3px]
        ${
          border
            ? "bg-black rounded-sm hover:outline-1"
            : "border border-dashed rounded-[8px]"
        }
        
        border-[rgb(115,115,115)]
        hover:text-white
        hover:border-[rgb(212,212,216)]
        text-[#b0b0b8]
        transition duration-200
        cursor-pointer
        hover:border-solid
        ${className}
      `}>
      {children}
    </button>
  );
};

export default CustomButton;

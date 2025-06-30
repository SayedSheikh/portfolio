import React from "react";

const CustomButtonSkills = ({ name, icon, className = "" }) => {
  return (
    <button
      className={`
        px-[10px]
        py-[3px]
        border border-dashed rounded-[8px]
        border-[rgb(115,115,115)]
        hover:text-white
        hover:border-[rgb(212,212,216)]
        text-[#b0b0b8]
        transition duration-200
        cursor-pointer
        hover:border-solid
        hover:-translate-y-2
        
        ${className}
      `}>
      <div className="flex items-center py-[6px] pl-[6px] gap-3">
        <img className="size-7" src={icon} alt="" />
        {name}
      </div>
    </button>
  );
};

export default CustomButtonSkills;

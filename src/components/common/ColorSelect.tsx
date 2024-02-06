import React from "react";
import { FaCheck } from "react-icons/fa6";

interface IColorSelect {
  isSelect?: boolean;
  color?: string;
}

const ColorSelect: React.FC<IColorSelect> = ({
  isSelect = false,
  color = "bg-cyan-500",
}) => {
  const isInlineStyle = color.slice(0, 1) === "#";
  return (
    <div
      style={{ backgroundColor: isInlineStyle ? color : "null" }}
      className={` ${color} w-12 h-12 rounded-full  cursor-pointer flex justify-center items-center`}>
      {isSelect ? <FaCheck className=" text-lg text-white" /> : null}
    </div>
  );
};

export default ColorSelect;

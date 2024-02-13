import React from "react";
import { FaCheck, FaLock } from "react-icons/fa6";

interface IColorSelect {
  isSelect?: boolean;
  lock?: boolean;
  color?: string;
  onClick?: () => void;
}

const ColorSelect: React.FC<IColorSelect> = ({
  isSelect = false,
  lock = false,
  color = "bg-cyan-500",
  onClick = () => {},
}) => {
  const isInlineStyle = color.slice(0, 1) === "#";
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isInlineStyle ? color : "null",
      }}
      className={` ${color} w-12 h-12 rounded-full  cursor-pointer flex justify-center items-center`}>
      {isSelect ? (
        <FaCheck className=" text-lg text-white" />
      ) : lock ? (
        <FaLock className=" text-lg text-white" />
      ) : null}
    </div>
  );
};

export default ColorSelect;

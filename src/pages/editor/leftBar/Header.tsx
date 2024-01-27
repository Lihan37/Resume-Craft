import React from "react";
import { motion } from "framer-motion";

interface IHeader {
  isActive: string;
  setIsActive: (value: string) => void;
}

const Header: React.FC<IHeader> = ({ isActive, setIsActive }) => {
  return (
    <div className="py-5  px-5 border-r-2 w-full">
      <div className="p-2 flex justify-between bg-neutral-100 rounded-md">
        <button
          onClick={() => setIsActive("create")}
          className=" w-full bg-transparent py-1 rounded-md text-lg font-semibold relative ">
          <span className=" relative z-50 text-c-dark">Create</span>
          {isActive === "create" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute  inset-0 z-0 bg-white rounded-lg"></motion.span>
          )}
        </button>
        <button
          onClick={() => setIsActive("template")}
          className=" w-full bg-transparent py-1 rounded-md text-lg font-semibold relative ">
          <span className=" relative z-50 text-c-dark">Template</span>
          {isActive === "template" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute  inset-0 z-0 bg-white rounded-lg"></motion.span>
          )}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);

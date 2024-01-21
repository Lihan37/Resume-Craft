import React from "react";
import { motion } from "framer-motion";

interface ITab {
  isActive: boolean;
  setActive: () => void;
  icon: React.ReactNode;
  label: string;
}

const Tab: React.FC<ITab> = ({ isActive, setActive, icon, label }) => {
  return (
    <div
      onClick={setActive}
      className={` ${
        isActive
          ? ""
          : "  hover:border-[#fbbe2447] duration-300 transition-colors"
      } border-transparent py-2  md:px-1 lg:px-2 cursor-pointer  border-b-2 md:border-b-4 flex justify-start items-center gap-1 md:gap-3 relative z-50 transition-colors`}>
      <span className="text-c-primary text-base md:text-xl lg:text-3xl relative z-10">
        {icon}
      </span>
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute border-c-primary border-b-2 md:border-b-4 inset-0 z-0 bg-gradient-to-r  from-[#e2ebe8] to-[#f1eedd]"></motion.span>
      )}
    </div>
  );
};

export default Tab;

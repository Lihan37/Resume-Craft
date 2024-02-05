import React, { useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { useResumeEditor } from "../../../hooks/useResumeEditor";

const PersonaData: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const { personalInfo, handleInput } = useResumeEditor();

  return (
    <div className=" space-y-3 py-5 px-5 ">
      <InputText
        value={personalInfo?.jobTitle || ""}
        placeholder="Job Title"
        onChange={(e) => {
          if (handleInput) {
            handleInput("jobTitle", e.target.value || "");
          }
        }}
      />
      <InputText
        value={personalInfo?.firstName || ""}
        placeholder="First Name"
        onChange={(e) => {
          if (handleInput) {
            handleInput("firstName", e.target.value || "");
          }
        }}
      />
      <InputText
        value={personalInfo?.lastName || ""}
        placeholder="Last Name"
        onChange={(e) => {
          if (handleInput) {
            handleInput("lastName", e.target.value || "");
          }
        }}
      />
      <InputText placeholder="Email Address" />
      <InputText placeholder="Phone Number" />
      <InputText placeholder="Your Country" />

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
            <div className="space-y-3 ">
              <InputText placeholder="Your City" />
              <InputText placeholder="Your Address" />
              <InputText placeholder="Postal Code" />
              <InputText placeholder="Driving License" />
              <InputText placeholder="Nationality" />
              <InputText placeholder="Place Of Birth" />
              <InputText placeholder="Date Of Birth" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsActive((prev) => !prev)}
        className=" hover:text-blue-800 duration-300 transition-colors font-semibold text-base text-c-primary cursor-pointer flex justify-start items-center gap-3">
        Edit additional details{" "}
        {!isActive ? (
          <IoIosArrowDown className=" text-xl" />
        ) : (
          <IoIosArrowUp className=" text-xl" />
        )}
      </button>
    </div>
  );
};

export default PersonaData;

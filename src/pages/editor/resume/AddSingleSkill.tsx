import React, { useEffect, useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TypeOfSkill } from "../../../types/resumeEditor";
import SkillLevel from "./SkillLevel";
import { MdDelete } from "react-icons/md";

interface IAddSingleSkill {
  id: string | number;
  getValue?: (data: TypeOfSkill) => void;
  initialValue?: TypeOfSkill;
  getFocusedInputValue?: (data: string) => void;
  getDelete?: (data: string | number) => void;
  initialFocusedValue?: string;
  skillLevel?: boolean;
}

const initialState = {
  _id: "",
  label: "",
  level: 0,
};

const AddSingleSkill: React.FC<IAddSingleSkill> = ({
  id,
  getValue = () => {},
  getFocusedInputValue = () => {},
  getDelete = () => {},
  initialValue,
  initialFocusedValue,
  skillLevel = false,
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfSkill>(
    initialValue && initialValue._id ? initialValue : initialState
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [focusedInput, setFocusedInput] = useState<string>(
    initialFocusedValue || ""
  );

  useEffect(() => {
    if (
      getFocusedInputValue &&
      typeof getFocusedInputValue === "function" &&
      focusedInput !== initialFocusedValue
    ) {
      getFocusedInputValue(focusedInput);
    }
  }, [focusedInput]);

  const handleInputFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  useLayoutEffect(() => {
    if (typeof getValue === "function") {
      getValue({ ...state, _id: id });
    }
  }, [state]);

  useLayoutEffect(() => {
    if (state.label?.length > 0) {
      setTitle(state.label);
    } else {
      setTitle("(Not specified)");
    }
  }, [state]);

  const handleSkillLevel = (data: number) => {
    setState((prev) => ({ ...prev, _id: id, level: data }));
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    getDelete(state._id);
  };

  return (
    <div className="mx-2 border-[1.8px] rounded-md text-c-dark overflow-hidden">
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-3 px-3 cursor-pointer font-semibold flex justify-between items-center">
        <span> {title}</span>
        <div className=" flex justify-between gap-2 items-center">
          <button onClick={handleDelete}>
            <MdDelete className=" text-2xl text-red-400 hover:text-red-500 duration-300" />
          </button>
          {!isOpen ? (
            <IoIosArrowDown className=" text-xl" />
          ) : (
            <IoIosArrowUp className=" text-xl" />
          )}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
            <div className="space-y-5 px-3 pb-4 pt-2 bg-white ">
              <InputText
                onFocus={() => handleInputFocus("label")}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, label: e.target.value }))
                }
                value={state.label}
                name="label"
                placeholder="Label"
              />
              <SkillLevel
                disable={skillLevel}
                value={state?.level}
                getValue={handleSkillLevel}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingleSkill);

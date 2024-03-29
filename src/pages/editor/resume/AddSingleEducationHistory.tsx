import React, { useEffect, useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import InputMonthYear from "../../../components/common/InputMonthYear";
import { TypeOfSingleEducationHistory } from "../../../types/resumeEditor";
import { MdDelete } from "react-icons/md";

interface IAddSingleEducationHistory {
  id: string | number;
  getValue?: (data: TypeOfSingleEducationHistory) => void;
  initialValue?: TypeOfSingleEducationHistory;
  getFocusedInputValue?: (data: string) => void;
  getDelete?: (data: string | number) => void;
  initialFocusedValue?: string;
}

const initialState = {
  _id: "",
  school: "",
  degree: "",
  startMontYear: "",
  endMontYear: "",
  city: "",
  description: "",
};

const AddSingleEducationHistory: React.FC<IAddSingleEducationHistory> = ({
  id,
  getValue = () => {},
  initialValue,
  getFocusedInputValue = () => {},
  getDelete = () => {},
  initialFocusedValue,
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfSingleEducationHistory>(
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

  const handleStartMontYear = (data: string) => {
    setState((prev) => ({ ...prev, startMontYear: data }));
  };
  const handleEndMontYear = (data: string) => {
    setState((prev) => ({ ...prev, endMontYear: data }));
  };

  useLayoutEffect(() => {
    if (typeof getValue === "function") {
      getValue({ ...state, _id: id });
    }
  }, [state]);

  useLayoutEffect(() => {
    if (state.school?.length > 0) {
      setTitle(state.school);
    } else {
      setTitle("(Not specified)");
    }
  }, [state]);

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
                onChange={(e) =>
                  setState((prev) => ({ ...prev, school: e.target.value }))
                }
                value={state.school}
                name="school"
                placeholder="School"
                onFocus={() => handleInputFocus("school")}
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, degree: e.target.value }))
                }
                value={state.degree}
                name="degree"
                placeholder="Degree"
                onFocus={() => handleInputFocus("degree")}
              />
              <div className="flex justify-between items-center gap-1">
                <InputMonthYear
                  onFocus={() => handleInputFocus("startMontYear")}
                  initialValue={state.startMontYear}
                  getValue={handleStartMontYear}
                />
                <InputMonthYear
                  onFocus={() => handleInputFocus("endMontYear")}
                  initialValue={state.endMontYear}
                  getValue={handleEndMontYear}
                  dropdownLef="-50%"
                />
              </div>
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, city: e.target.value }))
                }
                value={state.city}
                name="city"
                placeholder="City"
                onFocus={() => handleInputFocus("city")}
              />
              <InputText
                textarea={true}
                onFocus={() => handleInputFocus("description")}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, description: e.target.value }))
                }
                value={state.description}
                name="description"
                placeholder="Descriptions.."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingleEducationHistory);

import React, { useEffect, useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import InputMonthYear from "../../../components/common/InputMonthYear";
import { TypeOfSingleEmploymentHistory } from "../../../types/resumeEditor";

interface IAddSingleEmploymentHistory {
  id: string | number;
  getValue?: (data: TypeOfSingleEmploymentHistory) => void;
  initialValue?: TypeOfSingleEmploymentHistory;
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const initialState = {
  _id: "",
  jobTitle: "",
  employer: "",
  startMontYear: "",
  endMontYear: "",
  city: "",
  description: "",
};

const AddSingleEmploymentHistory: React.FC<IAddSingleEmploymentHistory> = ({
  id,
  getValue = () => {},
  getFocusedInputValue = () => {},
  initialValue,
  initialFocusedValue,
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfSingleEmploymentHistory>(
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
    if (state.jobTitle?.length > 0) {
      setTitle(state.jobTitle);
    } else {
      setTitle("(Not specified)");
    }
  }, [state]);

  return (
    <div className="mx-2 border-[1.8px] rounded-md text-c-dark overflow-hidden">
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-3 px-3 cursor-pointer font-semibold flex justify-between items-center">
        <span> {title}</span>
        {!isOpen ? (
          <IoIosArrowDown className=" text-xl" />
        ) : (
          <IoIosArrowUp className=" text-xl" />
        )}
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
                  setState((prev) => ({ ...prev, jobTitle: e.target.value }))
                }
                value={state.jobTitle}
                name="jobTitle"
                placeholder="Job Title"
                onFocus={() => handleInputFocus("jobTitle")}
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, employer: e.target.value }))
                }
                value={state.employer}
                name="employer"
                placeholder="Employer"
                onFocus={() => handleInputFocus("employer")}
              />
              <div className="flex justify-between items-center gap-1">
                <InputMonthYear
                  initialValue={state.startMontYear}
                  getValue={handleStartMontYear}
                  onFocus={() => handleInputFocus("startMontYear")}
                />
                <InputMonthYear
                  initialValue={state.endMontYear}
                  getValue={handleEndMontYear}
                  dropdownLef="-50%"
                  onFocus={() => handleInputFocus("endMontYear")}
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

export default React.memo(AddSingleEmploymentHistory);

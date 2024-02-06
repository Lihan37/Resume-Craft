import React, { useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import InputTextEditor from "../../../components/common/InputTextEditor";
import InputMonthYear from "../../../components/common/InputMonthYear";
import { TypeOfSingleEducationHistory } from "../../../types";

interface IAddSingleEducationHistory {
  id: string | number;
  getValue?: (data: TypeOfSingleEducationHistory) => void;
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
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] =
    useState<TypeOfSingleEducationHistory>(initialState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStartMontYear = (data: string) => {
    setState((prev) => ({ ...prev, startMontYear: data }));
  };
  const handleEndMontYear = (data: string) => {
    setState((prev) => ({ ...prev, endMontYear: data }));
  };
  const handleDescription = (data: string) => {
    setState((prev) => ({ ...prev, description: data }));
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
                  setState((prev) => ({ ...prev, school: e.target.value }))
                }
                value={state.school}
                name="school"
                placeholder="School"
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, degree: e.target.value }))
                }
                value={state.degree}
                name="degree"
                placeholder="Degree"
              />
              <div className="flex justify-between items-center gap-1">
                <InputMonthYear getValue={handleStartMontYear} />
                <InputMonthYear
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
              />
              <InputTextEditor
                getValue={handleDescription}
                placeholder="Descriptions.."
                height="160px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingleEducationHistory);

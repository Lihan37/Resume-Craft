import React, { useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TypeOfLanguage } from "../../../types";

interface IAddSingleLanguage {
  id: string | number;
  getValue?: (data: TypeOfLanguage) => void;
  value?: TypeOfLanguage;
}

const initialState = {
  _id: "",
  language: "",
  level: "",
};

const AddSingleLanguage: React.FC<IAddSingleLanguage> = ({
  id,
  getValue = () => {},
  value,
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfLanguage>(initialState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (value && value._id) {
      setState(value);
    }
  }, []);

  useLayoutEffect(() => {
    if (typeof getValue === "function") {
      getValue({ ...state, _id: id });
    }
  }, [state]);

  useLayoutEffect(() => {
    if (state.language?.length > 0) {
      setTitle(state.language);
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
                  setState((prev) => ({ ...prev, language: e.target.value }))
                }
                value={state.language}
                name="language"
                placeholder="Language"
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, level: e.target.value }))
                }
                value={state.level}
                name="level"
                placeholder="Level"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingleLanguage);

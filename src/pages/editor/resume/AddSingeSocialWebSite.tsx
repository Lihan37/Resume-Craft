import React, { useEffect, useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TypeOfSingleSocialWebSite } from "../../../types/resumeEditor";
import { MdDelete } from "react-icons/md";

interface IAddSingeSocialWebSite {
  id: string | number;
  getValue?: (data: TypeOfSingleSocialWebSite) => void;
  initialValue?: TypeOfSingleSocialWebSite;
  getFocusedInputValue?: (data: string) => void;
  getDelete?: (data: string | number) => void;
  initialFocusedValue?: string;
}

const initialState = {
  _id: "",
  label: "",
  link: "",
};

const AddSingeSocialWebSite: React.FC<IAddSingeSocialWebSite> = ({
  id,
  getValue = () => {},
  getFocusedInputValue = () => {},
  getDelete = () => {},
  initialValue,
  initialFocusedValue,
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfSingleSocialWebSite>(
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
                  setState((prev) => ({ ...prev, label: e.target.value }))
                }
                value={state.label}
                name="label"
                placeholder="Label"
                onFocus={() => handleInputFocus("label")}
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, link: e.target.value }))
                }
                value={state.link}
                name="link"
                placeholder="Link"
                onFocus={() => handleInputFocus("link")}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingeSocialWebSite);

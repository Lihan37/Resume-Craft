import React, { useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TypeOfSingleSocialWebSite } from "../../../types";

interface IAddSingeSocialWebSite {
  id: string | number;
  getValue?: (data: TypeOfSingleSocialWebSite) => void;
}

const initialState = {
  _id: "",
  label: "",
  link: "",
};

const AddSingeSocialWebSite: React.FC<IAddSingeSocialWebSite> = ({
  id,
  getValue = () => {},
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfSingleSocialWebSite>(initialState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return (
    <div className="mx-2 border-2 rounded-md text-c-dark overflow-hidden">
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
                  setState((prev) => ({ ...prev, label: e.target.value }))
                }
                value={state.label}
                name="label"
                placeholder="Label"
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, link: e.target.value }))
                }
                value={state.link}
                name="link"
                placeholder="Link"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingeSocialWebSite);

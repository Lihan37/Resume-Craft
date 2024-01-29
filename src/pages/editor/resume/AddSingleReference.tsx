import React, { useLayoutEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TypeOfReference } from "../../../types";

interface IAddSingleReference {
  id: string | number;
  getValue?: (data: TypeOfReference) => void;
  value?: TypeOfReference;
}

const initialState = {
  _id: "",
  name: "",
  company: "",
  phone: "",
  email: "",
};

const AddSingleReference: React.FC<IAddSingleReference> = ({
  id,
  getValue = () => {},
  value,
}) => {
  const [title, setTitle] = useState<string>("(Not specified)");
  const [state, setState] = useState<TypeOfReference>(initialState);
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
    if (state.name?.length > 0) {
      setTitle(state.name);
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
                  setState((prev) => ({ ...prev, name: e.target.value }))
                }
                value={state.name}
                name="name"
                placeholder="Name"
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, company: e.target.value }))
                }
                value={state.company}
                name="company"
                placeholder="Company"
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={state.phone}
                name="phone"
                placeholder="Phone"
              />
              <InputText
                onChange={(e) =>
                  setState((prev) => ({ ...prev, email: e.target.value }))
                }
                value={state.email}
                name="email"
                placeholder="Email"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AddSingleReference);

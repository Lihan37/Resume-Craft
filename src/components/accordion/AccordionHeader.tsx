import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useAccordion } from "../../hooks/useAccordion";

interface AccordionHeaderProps {
  children: ReactNode;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ children }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`px-5 cursor-pointer border-t-2 p-2 py-3 flex justify-between items-center w-full`}
      onClick={() => onChangeIndex(index)}>
      <h1 className=" font-semibold text-lg text-c-dark">{children} </h1>
      {isActive ? <FaMinus /> : <FaPlus />}
    </motion.div>
  );
};

export default AccordionHeader;

import { FC } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveId,
  setActiveId,
} from "../../services/accordion/accordionSlice";
import { RootState } from "../../app/store";
import { selectActiveAccordion } from "../../services/accordion/accordionSelector";

interface AccordionHeaderProps {
  id: number;
  tittle?: string;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ id, tittle }) => {
  const dispatch = useDispatch();

  const isActive = useSelector((state: RootState) =>
    selectActiveAccordion(state, id)
  );

  const onChangeIndex = () => {
    if (!isActive) {
      dispatch(setActiveId(id));
      return;
    }
    dispatch(removeActiveId(id));
  };

  return (
    <motion.div
      className={`px-5 cursor-pointer border-t-[1.8px] p-2 py-3 flex justify-between items-center w-full`}
      onClick={onChangeIndex}>
      <h1 className=" font-semibold text-lg text-c-dark">{tittle} </h1>
      {isActive ? <FaMinus /> : <FaPlus />}
    </motion.div>
  );
};

export default AccordionHeader;

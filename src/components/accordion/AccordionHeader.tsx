import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveId,
  setActiveId,
} from "../../services/accordion/accordionSlice";
import { RootState } from "../../app/store";
import { selectActiveAccordion } from "../../services/accordion/accordionSelector";
import Title from "../editor/Title";

interface AccordionHeaderProps {
  id: number;
  title?: string;
  getValue?: (data: string) => void;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({
  id,
  title,
  getValue = () => {},
}) => {
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

  const onTitleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <motion.div
      className={`px-5 cursor-pointer border-t-[1.8px] p-2 py-3 flex justify-between items-center w-full`}
      onClick={onChangeIndex}>
      <Title getValue={getValue} initialValue={title} onClick={onTitleClick} />
      {isActive ? <FaMinus /> : <FaPlus />}
    </motion.div>
  );
};

export default React.memo(AccordionHeader);

import { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectActiveAccordion } from "../../services/accordion/accordionSelector";
import { RootState } from "../../app/store";
// import { useAccordion } from "../../hooks/useAccordion";

interface AccordionPanelProps {
  children: ReactNode;
  id: number;
}

const AccordionPanel: FC<AccordionPanelProps> = ({ children, id }) => {
  const isActive = useSelector((state: RootState) =>
    selectActiveAccordion(state, id)
  );

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
          <div className="bg-white ">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionPanel;

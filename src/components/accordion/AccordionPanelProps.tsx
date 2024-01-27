import { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAccordion } from "../../hooks/useAccordion";

interface AccordionPanelProps {
  children: ReactNode;
}

const AccordionPanel: FC<AccordionPanelProps> = ({ children }) => {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
          <div className="bg-white px-5">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionPanel;

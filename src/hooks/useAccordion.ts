import { createContext, useContext } from "react";

interface AccordionContextProps {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
}

export const AccordionContext = createContext<
  AccordionContextProps | undefined
>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
};

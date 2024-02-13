import { FC, ReactNode } from "react";

interface AccordionItemProps {
  children: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ children }) => {
  return <div className="bg-white overflow-hidden">{children}</div>;
};

export default AccordionItem;

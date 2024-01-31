import { FC, useState, Children, ReactNode } from "react";
import { AccordionContext } from "../../hooks/useAccordion";

interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
  defaultIndex?: number | number[];
}

const Accordion: FC<AccordionProps> = ({
  children,
  multiple,
  defaultIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | number[]>(
    multiple ? [defaultIndex as number] : (defaultIndex as number)
  );

  console.log(activeIndex);

  function onChangeIndex(index: number) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (
        Array.isArray(currentActiveIndex) &&
        currentActiveIndex.includes(index)
      ) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return [
        ...(Array.isArray(currentActiveIndex) ? currentActiveIndex : []),
        index,
      ];
    });
  }

  return (
    <>
      {Children.map(children, (child, index) => {
        const isActive = multiple
          ? Array.isArray(activeIndex) && activeIndex.includes(index)
          : activeIndex === index;

        return (
          <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
            {child}
          </AccordionContext.Provider>
        );
      })}
    </>
  );
};

export default Accordion;

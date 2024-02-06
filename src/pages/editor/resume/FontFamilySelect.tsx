import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useOutsideClick from "../../../hooks/useOutsideClick";

const fontFamily = [
  { value: "font-sans", label: "Sans" },
  { value: "font-serif", label: "Serif" },
  { value: "font-f-mono", label: "Mono" },
  { value: "font-thin", label: "Thin" },
  { value: "font-f-mono", label: "F-mono" },
  { value: "font-f-poppins", label: "Poppins" },
  { value: "font-f-roboto", label: "Roboto" },
  { value: "font-f-inter", label: "Inter" },
];

interface IValue {
  value: string;
  label: string;
}

interface IFontFamilySelect {
  isSelectedValue: IValue;
  getValue?: (data: IValue) => void;
}

const FontFamilySelect: React.FC<IFontFamilySelect> = ({
  isSelectedValue,
  getValue = () => {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<IValue>(isSelectedValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getValue(select);
  }, [select]);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen((prev) => !prev)}
      className="cursor-pointer relative select-none flex justify-between items-center p-2 border-[1.8px] rounded-md px-4">
      <span className=" font-semibold text-lg">{select.label}</span>
      {isOpen ? (
        <IoIosArrowUp className="text-xl" />
      ) : (
        <IoIosArrowDown className="text-xl" />
      )}
      {isOpen && (
        <div className=" z-50 rounded-md absolute w-full left-0 right-0 bg-white top-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold">
          {fontFamily.map((item) => (
            <h1
              onClick={() => setSelect(item)}
              className={` ${item.value} p-2 px-4 hover:text-c-primary duration-300 transition-colors`}>
              {item.label}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontFamilySelect;
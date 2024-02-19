import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useOutsideClick from "../../../hooks/useOutsideClick";

const fontFamily = [
  { value: "Advent Pro", label: "Advent Pro" },
  { value: "Roboto", label: "Roboto" },
  { value: "Poppins", label: "Poppins" },
  { value: "Nunito", label: "Nunito" },
  { value: "Nunito Sans", label: "Nunito Sans" },
  { value: "Open Sans", label: "Open Sans" },
  { value: "Palanquin", label: "Palanquin" },
  { value: "Playfair Display", label: "Playfair Display" },
];

interface IFontFamilySelect {
  isSelectedValue?: string;
  getValue?: (data: string) => void;
}

const FontFamilySelect: React.FC<IFontFamilySelect> = ({
  isSelectedValue = "'Lato', sans-serif",
  getValue = () => {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>(isSelectedValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelect(isSelectedValue);
  }, [isSelectedValue]);

  useEffect(() => {
    if (typeof getValue === "function" && isSelectedValue !== select) {
      getValue(select);
    }
  }, [select]);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const selected = fontFamily.find((i) => i.value === select);
  return (
    <div
      ref={ref}
      onClick={() => setIsOpen((prev) => !prev)}
      className="cursor-pointer relative select-none flex justify-between items-center p-2 border-[1.8px] rounded-md px-4">
      <span style={{ fontFamily: select }} className=" font-semibold text-lg">
        {selected?.label}
      </span>
      {isOpen ? (
        <IoIosArrowUp className="text-xl" />
      ) : (
        <IoIosArrowDown className="text-xl" />
      )}
      {isOpen && (
        <div className=" z-50 rounded-md absolute w-full left-0 right-0 bg-white top-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold">
          {fontFamily.map((item) => {
            const isActive = item.value === select;
            return (
              <h1
                key={item.value}
                style={{ fontFamily: item.value }}
                onClick={() => setSelect(item.value)}
                className={`${
                  isActive && "text-c-primary"
                }  p-2 px-4 hover:text-c-primary duration-300 transition-colors`}>
                {item.label}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(FontFamilySelect);

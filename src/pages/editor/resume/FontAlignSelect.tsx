import React, { useEffect, useState } from "react";
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
} from "react-icons/fa6";

interface IFontAlignSelect {
  isSelectedValue: string;
  getValue?: (data: string) => void;
}

const FontAlignSelect: React.FC<IFontAlignSelect> = ({
  isSelectedValue,
  getValue = () => {},
}) => {
  const [fontAlign, setFontAlign] = useState<string>(isSelectedValue);

  useEffect(() => {
    getValue(fontAlign);
  }, []);
  return (
    <div className="font-semibold px-4 border-[1.8px] rounded-md flex justify-between items-center text-xl">
      <div
        onClick={() => setFontAlign("text-start")}
        className="w-full cursor-pointer border-r-[1.8px] p-3 flex justify-center">
        <FaAlignLeft />
      </div>
      <div
        onClick={() => setFontAlign("text-end")}
        className="w-full cursor-pointer border-r-[1.8px] p-3 flex justify-center">
        <FaAlignRight />
      </div>
      <div
        onClick={() => setFontAlign("text-center")}
        className="w-full cursor-pointer border-r-[1.8px] p-3 flex justify-center">
        <FaAlignCenter />
      </div>
      <div
        onClick={() => setFontAlign("text-justify")}
        className="w-full cursor-pointer p-3  flex justify-center">
        <FaAlignJustify />
      </div>
    </div>
  );
};

export default FontAlignSelect;

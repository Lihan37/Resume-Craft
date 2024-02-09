import React, { useEffect, useState } from "react";
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
} from "react-icons/fa6";

interface IFontAlignSelect {
  isSelectedValue?: string;
  getValue?: (data: string) => void;
}

const FontAlignSelect: React.FC<IFontAlignSelect> = ({
  isSelectedValue = "start",
  getValue = () => {},
}) => {
  const [fontAlign, setFontAlign] = useState<string>(isSelectedValue);

  useEffect(() => {
    setFontAlign(isSelectedValue);
  }, [isSelectedValue]);

  useEffect(() => {
    if (typeof getValue === "function" && isSelectedValue !== fontAlign) {
      getValue(fontAlign);
    }
  }, [fontAlign]);

  return (
    <div className="font-semibold px-4 border-[1.8px] rounded-md flex justify-between items-center text-xl">
      <div
        onClick={() => setFontAlign("start")}
        className={` ${
          fontAlign === "start" && "text-c-primary"
        } w-full cursor-pointer border-r-[1.8px] p-3 flex justify-center`}>
        <FaAlignLeft />
      </div>
      <div
        onClick={() => setFontAlign("end")}
        className={` ${
          fontAlign === "end" && "text-c-primary"
        } w-full cursor-pointer border-r-[1.8px] p-3 flex justify-center`}>
        <FaAlignRight />
      </div>
      <div
        onClick={() => setFontAlign("center")}
        className={` ${
          fontAlign === "center" && "text-c-primary"
        } w-full cursor-pointer border-r-[1.8px] p-3 flex justify-center`}>
        <FaAlignCenter />
      </div>
      <div
        onClick={() => setFontAlign("justify")}
        className={` ${
          fontAlign === "justify" && "text-c-primary"
        } w-full cursor-pointer  p-3 flex justify-center`}>
        <FaAlignJustify />
      </div>
    </div>
  );
};

export default FontAlignSelect;

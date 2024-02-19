import React, { useEffect, useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

interface IFontSizeSelect {
  isSelectedValue?: string;
  getValue?: (data: string) => void;
}

const FontSizeSelect: React.FC<IFontSizeSelect> = ({
  isSelectedValue = "18px",
  getValue = () => {},
}) => {
  const [size, setSize] = useState<string>(isSelectedValue);

  useEffect(() => {
    setSize(isSelectedValue);
  }, [isSelectedValue]);

  useEffect(() => {
    if (typeof getValue === "function" && isSelectedValue !== size) {
      getValue(size);
    }
  }, [size]);

  const lastCharacter = size.slice(size?.length - 2, size?.length);

  const handleIncrement = () => {
    if (lastCharacter === "px") {
      setSize((prev) => parseInt(prev.slice(0, -2)) + 1 + "px");
      return;
    }
    if (size) {
      setSize((prev) => parseInt(prev) + 1 + "px");
      return;
    }
    setSize("1px");
  };

  const handleDecrement = () => {
    if (lastCharacter === "px" && parseInt(size.slice(0, -2)) > 0) {
      setSize((prev) => parseInt(prev.slice(0, -2)) - 1 + "px");
      return;
    }
    if (size && parseInt(size) > 0) {
      setSize((prev) => parseInt(prev) - 1 + "px");
      return;
    }
    setSize("0px");
  };
  return (
    <div className="font-semibold  text-lg  p-2 px-4 border-[1.8px] rounded-md flex justify-between items-center">
      <div className="flex gap-5 justify-start items-center">
        <span className="select-none text-neutral-500">Aa</span>
        <input
          onChange={(e) => {
            setSize(e.target.value);
          }}
          value={size}
          className=" outline-none w-32"
          type="text"
          placeholder="15px"
        />
      </div>
      <div className=" flex justify-start items-center gap-3">
        <LuMinus
          onClick={handleDecrement}
          className=" cursor-pointer hover:text-c-primary duration-300 transition-colors text-xl"
        />
        <LuPlus
          onClick={handleIncrement}
          className=" cursor-pointer hover:text-c-primary duration-300 transition-colors text-xl"
        />
      </div>
    </div>
  );
};

export default FontSizeSelect;

import React, { useEffect, useState } from "react";

interface IFontDecorationSelect {
  isSelectedValue: string;
  getValue?: (data: string) => void;
}

const FontDecorationSelect: React.FC<IFontDecorationSelect> = ({
  isSelectedValue,
  getValue = () => {},
}) => {
  const [state, setState] = useState<string>(isSelectedValue);

  useEffect(() => {
    getValue(state);
  }, [state]);

  return (
    <div className="font-normal font-f-mono px-4 border-[1.8px] rounded-md flex justify-between items-center text-2xl">
      <div
        onClick={() => setState(`${isSelectedValue}`)}
        className="w-full cursor-pointer border-r-[1.8px] p-2 flex justify-center">
        B
      </div>
      <div
        onClick={() => setState(`<u>${isSelectedValue}</u>`)}
        className="w-full cursor-pointer border-r-[1.8px] p-2 flex justify-center">
        <u>U</u>
      </div>
      <div
        onClick={() => setState(`<i>${isSelectedValue}</i>`)}
        className="w-full  cursor-pointer border-r-[1.8px] p-2 flex justify-center">
        <i>I</i>
      </div>
      <div
        onClick={() => setState(`<del>${isSelectedValue}</del>`)}
        className="w-full cursor-pointer p-2  flex justify-center">
        <del>S</del>
      </div>
    </div>
  );
};

export default FontDecorationSelect;

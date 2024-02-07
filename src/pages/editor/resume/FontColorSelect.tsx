import React, { useEffect, useState } from "react";

interface IFontColorSelect {
  isSelectedValue: string;
  getValue?: (data: string) => void;
}

const FontColorSelect: React.FC<IFontColorSelect> = ({
  isSelectedValue = "#00000",
  getValue = () => {},
}) => {
  const [color, setColor] = useState<string>(isSelectedValue);

  useEffect(() => {
    getValue(color);
  }, [color]);
  return (
    <div className="font-semibold text-lg gap-5 p-2 px-4 border-[1.8px] rounded-md flex justify-start items-center">
      <input
        className="w-7 h-7 rounded-md border-none outline-none cursor-pointer "
        type="color"
        onChange={(e) => setColor(e.target.value)}
        name="color"
        id="color"
        value={color}
      />
      <input
        onChange={(e) => setColor(e.target.value)}
        className=" outline-none w-36"
        type="text"
        placeholder="#00000"
        value={color}
      />
    </div>
  );
};

export default FontColorSelect;

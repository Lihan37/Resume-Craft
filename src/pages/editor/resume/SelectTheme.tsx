import React from "react";
import ColorSelect from "../../../components/common/ColorSelect";

const SelectTheme: React.FC = () => {
  return (
    <div className=" border-b pb-5">
      <div className="w-full gap-2 flex justify-between items-center">
        <ColorSelect color="bg-amber-600" isSelect={true} />
        <ColorSelect color="bg-lime-600" />
        <ColorSelect color="bg-teal-600" />
        <ColorSelect color="bg-emerald-600" />
        <ColorSelect color="bg-cyan-600" />
      </div>
    </div>
  );
};

export default SelectTheme;

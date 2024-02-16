import React from "react";
import SelectTheme from "../resume/SelectTheme";
import FontFamilySelect from "../common/FontFamilySelect";
import FontWeightSelect from "../common/FontWeightSelect";
import FontColorSelect from "../common/FontColorSelect";
import FontSizeSelect from "../common/FontSizeSelect";
import FontAlignSelect from "../common/FontAlignSelect";
import ContentHightWidth from "../common/ContentHightWidth";

const RightSideBarOptions: React.FC = () => {
  return (
    <div className="space-y-10 text-c-dark ">
      <SelectTheme />
      <ContentHightWidth
        isSelectedValue={{ height: "100px", width: "600px" }}
      />
      <div className=" space-y-2">
        <h1 className=" font-semibold text-2xl capitalize ">Text</h1>
        <div className=" space-y-5">
          <FontFamilySelect />
          <FontWeightSelect />
          <FontColorSelect />
          <FontSizeSelect />
          <FontAlignSelect />
        </div>
      </div>
    </div>
  );
};

export default RightSideBarOptions;

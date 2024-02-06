import React from "react";
import SelectTheme from "./SelectTheme";
import FontFamilySelect from "./FontFamilySelect";
import FontWeightSelect from "./FontWeightSelect";
import FontColorSelect from "./FontColorSelect";
import FontSizeSelect from "./FontSizeSelect";
import FontAlignSelect from "./FontAlignSelect";
import FontDecorationSelect from "./FontDecorationSelect";
import ResumeHightWidth from "./ResumeHightWidth";

const RightSideBarOptions: React.FC = () => {
  return (
    <div className=" space-y-10 text-c-dark ">
      <SelectTheme />
      {/* <AlignSelect isSelect="center" /> */}
      <ResumeHightWidth
        isSelectedValue={{ height: "1190.14px", width: "852px" }}
      />
      <div className=" space-y-2">
        <h1 className=" font-semibold text-2xl">Text</h1>
        <div className=" space-y-5">
          <FontFamilySelect
            isSelectedValue={{ value: "font-sans", label: "Sans" }}
          />
          <FontWeightSelect
            isSelectedValue={{ value: "font-semibold", label: "Semibold" }}
          />
          <FontColorSelect isSelectedValue="#0D9488" />
          <FontSizeSelect isSelectedValue="18px" />
          <FontAlignSelect isSelectedValue="text-center" />
          <FontDecorationSelect isSelectedValue="This is new" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBarOptions;
// weight;

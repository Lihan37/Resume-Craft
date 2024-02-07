import React from "react";
import SelectTheme from "./SelectTheme";
import FontFamilySelect from "./FontFamilySelect";
import FontWeightSelect from "./FontWeightSelect";
import FontColorSelect from "./FontColorSelect";
import FontSizeSelect from "./FontSizeSelect";
import FontAlignSelect from "./FontAlignSelect";
import FontDecorationSelect from "./FontDecorationSelect";
import ResumeHightWidth from "./ResumeHightWidth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResumeSize,
  selectTheme,
  selectThemeOptions,
} from "../../../services/resumeEditor/resumeEditorSelector";
import {
  ISetResumeSize,
  setResumeSize,
  setResumeTheme,
} from "../../../services/resumeEditor/resumeEditorSlice";

const RightSideBarOptions: React.FC = () => {
  const dispatch = useDispatch();
  const themeOptions = useSelector(selectThemeOptions);
  const theme = useSelector(selectTheme);
  const size = useSelector(selectResumeSize);

  return (
    <div className=" space-y-10 text-c-dark ">
      <SelectTheme
        selectedValue={theme}
        values={themeOptions}
        getValue={(data: string) => {
          dispatch(setResumeTheme(data));
        }}
      />

      <ResumeHightWidth
        isSelectedValue={size}
        getValue={(data: ISetResumeSize) => {
          dispatch(setResumeSize(data));
        }}
      />
      <div className=" space-y-2">
        <h1 className=" font-semibold text-2xl">Text</h1>
        <div className=" space-y-5">
          <FontFamilySelect
            isSelectedValue={{ value: "'Lato', sans-serif", label: "Lato" }}
          />
          <FontWeightSelect
            isSelectedValue={{ value: 200, label: "Extralight" }}
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

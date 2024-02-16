import React from "react";
import SelectTheme from "./SelectTheme";
// import FontDecorationSelect from "./FontDecorationSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResumeSize,
  selectTheme,
  selectThemeOptions,
} from "../../../services/resumeEditor/resumeEditorSelector";
import {
  ISetResumeSize,
  changeStyleResume,
  setResumeSize,
  setResumeTheme,
} from "../../../services/resumeEditor/resumeEditorSlice";
import {
  selectFocusInput,
  selectFocusSection,
} from "../../../services/generalEditor/generalEditorSelector";
import { selectStyleResumeEditor } from "../../../services/resumeEditor/styleSelector";
import { RootState } from "../../../app/store";
import {
  IEducations,
  ILanguages,
  IPersonalInfo,
  IReferences,
  ISectionTitles,
  ISkills,
  ISocialProfiles,
  IWorkExperience,
  TypeOfResumeStyle,
  TypeOfStyleText,
} from "../../../types/resumeEditor";
import { addSpaceAfterCapitalLetters } from "../../../utils/addSpaceAfterCapitalLetters";
import ContentHightWidth from "../common/ContentHightWidth";
import FontFamilySelect from "../common/FontFamilySelect";
import FontWeightSelect from "../common/FontWeightSelect";
import FontColorSelect from "../common/FontColorSelect";
import FontSizeSelect from "../common/FontSizeSelect";
import FontAlignSelect from "../common/FontAlignSelect";

type focusInput =
  | keyof IPersonalInfo
  | keyof IWorkExperience
  | keyof ISkills
  | keyof ILanguages
  | keyof IReferences
  | keyof IEducations
  | keyof ISocialProfiles
  | keyof ISectionTitles;

const RightSideBarOptions: React.FC = () => {
  const dispatch = useDispatch();
  const themeOptions = useSelector(selectThemeOptions);
  const theme = useSelector(selectTheme);
  const size = useSelector(selectResumeSize);
  const focusInput = useSelector(selectFocusInput);
  const focusSectionName = useSelector(selectFocusSection);

  const style = useSelector((state: RootState) =>
    selectStyleResumeEditor(
      state,
      focusSectionName as keyof TypeOfResumeStyle,
      focusInput as focusInput
    )
  );

  return (
    <div className=" space-y-10 text-c-dark ">
      <SelectTheme
        selectedValue={theme}
        values={themeOptions}
        getValue={(data: string) => {
          dispatch(setResumeTheme(data));
        }}
      />

      <ContentHightWidth
        isSelectedValue={size}
        getValue={(data: ISetResumeSize) => {
          dispatch(setResumeSize(data));
        }}
      />
      {focusInput && (
        <div className=" space-y-2">
          <h1 className=" font-semibold text-2xl capitalize ">
            Text {addSpaceAfterCapitalLetters(focusInput)}
          </h1>
          <div className=" space-y-5">
            <FontFamilySelect
              getValue={(data: string) => {
                dispatch(
                  changeStyleResume({
                    sectionTitle: focusSectionName as keyof TypeOfResumeStyle,
                    fieldName: focusInput as focusInput,
                    value: {
                      ...style,
                      fontFamily: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
              isSelectedValue={style?.fontFamily}
            />
            <FontWeightSelect
              getValue={(data: number) => {
                dispatch(
                  changeStyleResume({
                    sectionTitle: focusSectionName as keyof TypeOfResumeStyle,
                    fieldName: focusInput as focusInput,
                    value: {
                      ...style,
                      fontWeight: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
              isSelectedValue={style?.fontWeight}
            />
            <FontColorSelect
              getValue={(data: string) => {
                dispatch(
                  changeStyleResume({
                    sectionTitle: focusSectionName as keyof TypeOfResumeStyle,
                    fieldName: focusInput as focusInput,
                    value: {
                      ...style,
                      color: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
              isSelectedValue={style?.color}
            />
            <FontSizeSelect
              getValue={(data: string) => {
                dispatch(
                  changeStyleResume({
                    sectionTitle: focusSectionName as keyof TypeOfResumeStyle,
                    fieldName: focusInput as focusInput,
                    value: {
                      ...style,
                      size: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
              isSelectedValue={style?.fontSize}
            />
            <FontAlignSelect
              getValue={(data: string) => {
                dispatch(
                  changeStyleResume({
                    sectionTitle: focusSectionName as keyof TypeOfResumeStyle,
                    fieldName: focusInput as focusInput,
                    value: {
                      ...style,
                      textAlign: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
              isSelectedValue={style?.textAlign}
            />
            {/* TODO  */}
            {/* <FontDecorationSelect isSelectedValue="This is new" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBarOptions;
// weight;

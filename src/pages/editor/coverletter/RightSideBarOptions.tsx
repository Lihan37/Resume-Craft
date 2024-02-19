import React from "react";
import SelectTheme from "../resume/SelectTheme";
import FontFamilySelect from "../common/FontFamilySelect";
import FontWeightSelect from "../common/FontWeightSelect";
import FontColorSelect from "../common/FontColorSelect";
import FontSizeSelect from "../common/FontSizeSelect";
import FontAlignSelect from "../common/FontAlignSelect";
import ContentHightWidth from "../common/ContentHightWidth";
import { useDispatch, useSelector } from "react-redux";
import { selectFocusInput } from "../../../services/generalEditor/generalEditorSelector";
import { RootState } from "../../../app/store";
import { selectStyleCoverLetter } from "../../../services/coverletterEditor/styleSelector";
import {
  ICoverLetterStyle,
  changeSize,
  changeStyleCovetLetter,
  changeTheme,
} from "../../../services/coverletterEditor/coverletterEditorSlice";
import { TypeOfStyleText } from "../../../types/editor";
import {
  selectCoverLetterSize,
  selectCoverLetterTheme,
  selectCoverLetterThemeOption,
} from "../../../services/coverletterEditor/coverletterEditorSelector";

const RightSideBarOptions: React.FC = () => {
  const focusInput = useSelector(selectFocusInput);
  const size = useSelector(selectCoverLetterSize);
  const theme = useSelector(selectCoverLetterTheme);
  const themeOptions = useSelector(selectCoverLetterThemeOption);
  const dispatch = useDispatch();

  const style = useSelector((state: RootState) =>
    selectStyleCoverLetter(state, focusInput as keyof ICoverLetterStyle)
  );

  return (
    <div className="space-y-10 text-c-dark ">
      <SelectTheme
        selectedValue={theme}
        values={themeOptions}
        getValue={(data: string) => {
          dispatch(changeTheme(data));
        }}
      />
      <ContentHightWidth
        isSelectedValue={size}
        getValue={(data) => {
          dispatch(changeSize(data));
        }}
      />
      {focusInput && (
        <div className=" space-y-2">
          <h1 className=" font-semibold text-2xl capitalize ">Text</h1>
          <div className=" space-y-5">
            <FontFamilySelect
              isSelectedValue={style?.fontFamily}
              getValue={(data: string) => {
                dispatch(
                  changeStyleCovetLetter({
                    fieldName: focusInput as keyof ICoverLetterStyle,
                    value: {
                      ...style,
                      fontFamily: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
            />
            <FontWeightSelect
              isSelectedValue={style?.fontWeight}
              getValue={(data: number) => {
                dispatch(
                  changeStyleCovetLetter({
                    fieldName: focusInput as keyof ICoverLetterStyle,
                    value: {
                      ...style,
                      fontWeight: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
            />
            <FontColorSelect
              isSelectedValue={style?.color}
              getValue={(data: string) => {
                dispatch(
                  changeStyleCovetLetter({
                    fieldName: focusInput as keyof ICoverLetterStyle,
                    value: {
                      ...style,
                      color: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
            />
            <FontSizeSelect
              isSelectedValue={style?.fontSize}
              getValue={(data: string) => {
                dispatch(
                  changeStyleCovetLetter({
                    fieldName: focusInput as keyof ICoverLetterStyle,
                    value: {
                      ...style,
                      fontSize: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
            />
            <FontAlignSelect
              isSelectedValue={style?.textAlign}
              getValue={(data: string) => {
                dispatch(
                  changeStyleCovetLetter({
                    fieldName: focusInput as keyof ICoverLetterStyle,
                    value: {
                      ...style,
                      textAlign: data,
                    } as TypeOfStyleText,
                  })
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBarOptions;

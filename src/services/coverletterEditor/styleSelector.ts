import { RootState } from "../../app/store";
import { TypeOfStyleText } from "../../types/editor";
import { ICoverLetterStyle } from "./coverletterEditorSlice";

export const selectStyle = (state: RootState) =>
  state.coverLetterEditor.coverLetter.style;

export const selectStyleCoverLetter = (
  state: RootState,
  inputFieldName: keyof ICoverLetterStyle
): TypeOfStyleText | undefined => {
  const inputStyle = state.coverLetterEditor.coverLetter.style[
    inputFieldName
  ] as keyof ICoverLetterStyle;

  if (inputStyle && typeof inputStyle === "object") {
    return inputStyle;
  }

  return undefined;
};

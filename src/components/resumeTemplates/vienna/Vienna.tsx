/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
import { resume } from "../resume";
import styleVienna from "./ViennaStyle";
export interface IVienna {
  resume?: IResumeData;
}

const Vienna: React.ForwardRefRenderFunction<HTMLDivElement> = ({ _ }, ref) => {
  const style = styleVienna.require;
  return (
    <div
      ref={ref}
      style={{
        // transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}>
      <div className="">
        {resume.personalInfo.firstName && (
          <div
            style={{
              fontFamily: style.personalInfo.firstName.fontFamily,
              fontWeight: style.personalInfo.firstName.fontWeight,
              color: style.personalInfo.firstName.color,
              fontSize: style.personalInfo.firstName.size,
              textAlign: style.personalInfo.firstName.textAlign as any,
            }}>
            {resume.personalInfo.firstName}
          </div>
        )}
        {resume.personalInfo.lastName && (
          <div
            style={{
              fontFamily: style.personalInfo.lastName.fontFamily,
              fontWeight: style.personalInfo.lastName.fontWeight,
              color: style.personalInfo.lastName.color,
              fontSize: style.personalInfo.lastName.size,
              textAlign: style.personalInfo.lastName.textAlign as any,
            }}>
            {resume.personalInfo.lastName}
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Vienna);

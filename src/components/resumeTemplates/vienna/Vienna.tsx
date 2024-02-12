import React, { forwardRef } from "react";
import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";

export interface IVienna {
  resume: IResumeData;
}

const Vienna: React.ForwardRefRenderFunction<HTMLDivElement, IVienna> = (
  { resume },
  ref
) => {
  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${resume.zoom})`,
        height: resume.size.height,
        width: resume.size.width,
        transformOrigin:
          parseFloat(resume.size.height.slice(0, -2)) > 1190.14 ? "bottom" : "",
        transition: "transform 0.5s",
      }}>
      <div className=""></div>
    </div>
  );
};

export default forwardRef(Vienna);

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { ICoverLetter } from "../../../services/coverletterEditor/coverletterEditorSlice";
import styleSydney from "./SydneyStyle";
import useDisplay from "../../../hooks/useDisplay";

export interface ISydney {
  coverLetter: ICoverLetter;
}

const Sydney: React.ForwardRefRenderFunction<HTMLDivElement, ISydney> = (
  { coverLetter },
  ref
) => {
  const commonStyle = styleSydney.common;
  const style = coverLetter.style;
  const [windowWidth] = useDisplay();

  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${windowWidth < 768 ? 0.6 : coverLetter.zoom})`,
        minHeight: coverLetter?.size.height,
        maxHeight: coverLetter?.size.height,
        minWidth: coverLetter?.size.width,
        maxWidth: coverLetter?.size.width,
        transformOrigin:
          parseFloat(coverLetter.size.height.slice(0, -2)) > 792
            ? "bottom"
            : "",
        transition: "transform 0.5s",
        backgroundColor: "#fff",
      }}>
      <div style={commonStyle.container}>
        <div style={commonStyle.header}>
          <div
            style={{
              ...style.fullName,
              textAlign: style.fullName.textAlign as any,
              lineHeight: "38px",
              maxWidth: "140.2px",
            }}>
            {coverLetter.fullName}
          </div>
          <div style={{ width: "fit" }}>
            <h1
              style={{
                ...style.JobTitle,
                textAlign: style.JobTitle.textAlign as any,
              }}>
              {coverLetter.JobTitle}
            </h1>
            <h1
              style={{
                ...style.email,
                textAlign: style.email.textAlign as any,
              }}>
              {coverLetter.email}
            </h1>
            <h1
              style={{
                ...style.phoneNumber,
                textAlign: style.phoneNumber.textAlign as any,
              }}>
              {coverLetter.phoneNumber}
            </h1>
            <h1
              style={{
                ...style.address,
                textAlign: style.address.textAlign as any,
              }}>
              {coverLetter.address}
            </h1>
          </div>
        </div>
        <h1
          style={{
            ...commonStyle.nameAndCompany,
            backgroundColor: style.theme,
          }}>
          TO :{" "}
          <span
            style={{
              ...style.managerName,
              textAlign: style.managerName.textAlign as any,
              // lineHeight: "20px",
            }}>
            {coverLetter.managerName}
          </span>{" "}
          <span
            style={{
              ...style.companyName,
              textAlign: style.companyName.textAlign as any,
              // lineHeight: "20px",
            }}>
            {coverLetter.companyName}
          </span>
        </h1>
        <div
          style={{
            ...style.details,
            textAlign: style.details.textAlign as any,
            marginTop: "10px",
            paddingTop: "10px",
            borderTopWidth: "4px",
            borderColor: style.theme,
          }}>
          {coverLetter.details}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Sydney);

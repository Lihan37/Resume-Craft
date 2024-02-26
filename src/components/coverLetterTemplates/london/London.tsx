/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { ICoverLetter } from "../../../services/coverletterEditor/coverletterEditorSlice";
import styleLondon from "./LondonStyle";
import useDisplay from "../../../hooks/useDisplay";

export interface ILondon {
  coverLetter: ICoverLetter;
}

const London: React.ForwardRefRenderFunction<HTMLDivElement, ILondon> = (
  { coverLetter },
  ref
) => {
  const commonStyle = styleLondon.common;
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
        <h1
          style={{
            ...style.fullName,
            textAlign: style.fullName.textAlign as any,
            lineHeight: "40px",
            maxWidth: "140.2px",
            textTransform: "uppercase",
          }}>
          {coverLetter.fullName}
        </h1>

        <h1
          style={{
            ...style.JobTitle,
            textAlign: style.JobTitle.textAlign as any,
            marginTop: "2px",
          }}>
          {coverLetter.JobTitle}
        </h1>

        <div
          style={{
            marginTop: "15px",
            borderTopWidth: "2px",
            borderColor: "#cbd5e1",
            display: "flex",
          }}>
          <div
            style={{
              width: "180px",
              paddingTop: "10px",
              paddingRight: "10px",
            }}>
            {(coverLetter.managerName || coverLetter.companyName) && (
              <div
                style={{
                  color: "#71717a",
                  fontSize: "18px",
                  fontWeight: 400,
                  marginTop: "20px",
                }}>
                To
              </div>
            )}
            <div
              style={{
                ...style.managerName,
                textAlign: style.managerName.textAlign as any,
                textTransform: "uppercase",
                marginTop: "15px",
              }}>
              {coverLetter.managerName}
            </div>
            <div
              style={{
                ...style.companyName,
                textAlign: style.companyName.textAlign as any,
              }}>
              {coverLetter.companyName}
            </div>
            {coverLetter.fullName && (
              <>
                <div
                  style={{
                    color: "#71717a",
                    fontSize: "18px",
                    fontWeight: 400,
                    marginTop: "24px",
                  }}>
                  From
                </div>
                <div
                  style={{
                    color: "#262626",
                    fontFamily: "Nunito Sans",
                    fontWeight: 700,
                    fontSize: "18px",
                    textTransform: "uppercase",
                    marginTop: "12px",
                  }}>
                  {coverLetter.fullName}
                </div>
              </>
            )}
            <a
              href={`mailto:${coverLetter.email}`}
              style={{
                ...style.email,
                textAlign: style.email.textAlign as any,
              }}>
              {coverLetter.email}
            </a>
            <a
              href={`tel:+${coverLetter.phoneNumber}`}
              style={{
                ...style.phoneNumber,
                textAlign: style.phoneNumber.textAlign as any,
                marginTop: "12px",
                display: "block",
              }}>
              {coverLetter.phoneNumber}
            </a>
            <h1
              style={{
                ...style.address,
                textAlign: style.address.textAlign as any,
                marginTop: "12px",
              }}>
              {coverLetter.address}
            </h1>
          </div>
          {coverLetter.details && (
            <div
              style={{
                ...style.details,
                textAlign: style.details.textAlign as any,
                borderLeftWidth: "2px",
                paddingLeft: "20px",
                paddingTop: "10px",
                borderColor: "#cbd5e1",
                lineHeight: "20px",
              }}>
              {coverLetter.details}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(London);

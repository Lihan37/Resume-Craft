import React from "react";
import "quill/dist/quill.snow.css";

interface HTMLRendererProps {
  htmlContent: string;
}

const HTMLRenderer: React.FC<HTMLRendererProps> = ({ htmlContent }) => {
  return (
    <div
      className=" ql-editor"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HTMLRenderer;

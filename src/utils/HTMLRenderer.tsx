import React from "react";
import "quill/dist/quill.snow.css";

interface HTMLRendererProps {
  htmlContent: string;
}

const HTMLRenderer: React.FC<HTMLRendererProps> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HTMLRenderer;

import React from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

interface ITextEditor {
  placeholder?: string;
  height?: string;
  getValue?: (data: string) => void;
}

const InputTextEditor: React.FC<ITextEditor> = ({
  placeholder,
  height = "200px",
  getValue = () => {},
}) => {
  const modules = {
    toolbar: [
      //   [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      //   [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [
        // { list: "ordered" },
        // { list: "bullet" },
        // { indent: "-1" },
        // { indent: "+1" },
        // { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleProcedureContentChange = (content: string) => {
    getValue(content);
  };

  return (
    <ReactQuill
      //   theme="snow"
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      onChange={handleProcedureContentChange}
      style={{
        height: height,
        fontSize: "16px",
        border: "2px solid #f5f5f5",
        borderBottom: "2px solid #c3bebe",
        borderRadius: "0.375rem",
        overflow: "hidden",
      }}></ReactQuill>
  );
};

export default InputTextEditor;

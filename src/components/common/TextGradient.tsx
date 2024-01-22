import React from "react";

interface ITextGradient {
  children: React.ReactNode;
}

const TextGradient: React.FC<ITextGradient> = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
      {children}
    </span>
  );
};

export default TextGradient;

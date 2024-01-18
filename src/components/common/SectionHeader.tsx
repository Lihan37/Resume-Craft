import React from "react";

interface ISectionHeader {
  children: React.ReactNode;
}
const SectionHeader: React.FC<ISectionHeader> = ({ children }) => {
  return (
    <h2 className="text-5xl text-center font-semibold mt-3">{children}</h2>
  );
};

export default SectionHeader;

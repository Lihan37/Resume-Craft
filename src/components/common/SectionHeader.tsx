import React from "react";

interface ISectionHeader {
  children: React.ReactNode;
  label?: string;
}
const SectionHeader: React.FC<ISectionHeader> = ({ children, label }) => {
  return (
    <>
      {label && (
        <h1 className="uppercase text-xl text-center font-mono text-c-primary font-bold">
          {label}
        </h1>
      )}
      <h2 className="mt-5 text-center md:mt-8 lg:mt-10 text-c-dark font-semibold text-xl md:text-5xl lg:text-6xl xl:text-7xl">
        {children}
      </h2>
    </>
  );
};

export default SectionHeader;

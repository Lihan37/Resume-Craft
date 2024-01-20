import React from "react";

interface IContainer {
  children: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {
  return <div className=" container mx-auto px-5 lg:px-14">{children}</div>;
};

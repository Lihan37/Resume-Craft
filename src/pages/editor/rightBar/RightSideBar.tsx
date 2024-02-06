import React from "react";
import useDisplay from "../../../hooks/useDisplay";

interface IRightSideBar {
  children: React.ReactNode;
}
const RightSideBar: React.FC<IRightSideBar> = ({ children }) => {
  const [windowWidth] = useDisplay();

  const sideBarHight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";
  return (
    <div
      style={{ height: sideBarHight }}
      className="h-full  bg-white z-50  min-w-80  max-w-80 p-5  border-r-2">
      {children}
    </div>
  );
};

export default RightSideBar;

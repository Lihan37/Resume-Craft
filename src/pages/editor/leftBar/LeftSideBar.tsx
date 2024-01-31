import React, { useState } from "react";
import useDisplay from "../../../hooks/useDisplay";
import { useSelector } from "react-redux";
import { selectIsActive } from "../../../services/resume/resumeSelector";
import Header from "./Header";

interface ILeftSideBar {
  editor: React.ReactNode;
  templates: React.ReactNode;
}

const LeftSideBar: React.FC<ILeftSideBar> = ({ editor, templates }) => {
  const [isActive, setIsActive] = useState<string>("create");
  const [windowWidth] = useDisplay();

  const x = useSelector(selectIsActive);
  console.log("selectIsActive", x);
  console.log("isActive", isActive);

  const sideBarWidth =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";

  return (
    <div
      style={{ maxHeight: sideBarWidth }}
      id="sidebarEditor"
      className=" max-w-96 overflow-y-scroll border-l-2 border-r-2">
      <Header isActive={isActive} setIsActive={setIsActive} />
      {isActive === "create" && editor}
      {isActive === "template" && templates}
    </div>
  );
};

export default React.memo(LeftSideBar);

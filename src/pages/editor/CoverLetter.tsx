import React, { useRef, useState } from "react";
import useDisplay from "../../hooks/useDisplay";
import LeftSideBar from "./leftBar/LeftSideBar";
import LeftSideBarOptions from "./coverletter/LeftSideBarOptions";
import CoverLetterTemplates from "./coverletter/CoverLetterTemplates";

const CoverLetter: React.FC = () => {
  const [rightSideBarIsOpen, setRightSideBarIsOpen] = useState<boolean>(false);
  const [editorDashboardIsOpen, setEditorDashboardIsOpen] =
    useState<boolean>(false);
  const [windowWidth] = useDisplay();
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);
  const hight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";
  return (
    <div>
      <div
        style={{ minHeight: hight }}
        className="flex justify-start items-start relative">
        <div
          ref={leftSideRef}
          className={`${
            !editorDashboardIsOpen ? "block" : " hidden"
          } h-full w-full xl:min-w-[400px] xl:max-w-[400px]  `}>
          <LeftSideBar
            editor={<LeftSideBarOptions />}
            templates={<CoverLetterTemplates />}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CoverLetter);

import React, { useRef, useState } from "react";
import useDisplay from "../../hooks/useDisplay";
import LeftSideBar from "./leftBar/LeftSideBar";
import LeftSideBarOptions from "./coverletter/LeftSideBarOptions";
import CoverLetterTemplates from "./coverletter/CoverLetterTemplates";
import RightSideBar from "./rightBar/RightSideBar";
import RightSideBarOptions from "./coverletter/RightSideBarOptions";
import { useParams } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../components/common/Button";

const CoverLetter: React.FC = () => {
  const [rightSideBarIsOpen, setRightSideBarIsOpen] = useState<boolean>(false);
  const [editorDashboardIsOpen, setEditorDashboardIsOpen] =
    useState<boolean>(false);
  const [windowWidth] = useDisplay();
  const param = useParams();
  const templateRef = useRef(null);
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);

  const rightSideBarOpenButtonRef = useRef(null);
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

        <div
          style={{ height: hight }}
          id="resumeEditorDashboard"
          className={`${
            editorDashboardIsOpen ? "block" : " hidden"
          } w-full xl:flex overflow-auto justify-center items-center bg-zinc-100 `}></div>

        <div
          ref={rightSideBarOpenButtonRef}
          onClick={() => setRightSideBarIsOpen(true)}
          className="2xl:hidden fixed right-0 top-56 py-2 px-6 hover:bg-white hover:text-c-primary duration-300 transition-colors cursor-pointer text-white rounded-l-full bg-c-primary">
          <IoSettingsOutline className="animate-spin text-4xl" />
        </div>

        {/* /// Right Side Bar  */}
        <div
          ref={rightSideRef}
          className={`${
            windowWidth < 1590
              ? `fixed top-[88px] xl:top-[98px] z-50 ${
                  rightSideBarIsOpen ? "-right-[0%]" : "-right-[1000%]"
                }`
              : null
          }`}>
          <RightSideBar>
            <div className="">
              <RightSideBarOptions />
              <div className="2xl:hidden mt-10 flex justify-center items-center">
                <button
                  onClick={() => setRightSideBarIsOpen(false)}
                  className="w-fit rounded-md text-white  px-3 py-1 text-base font-semibold bg-red-400">
                  Close
                </button>
              </div>
            </div>
          </RightSideBar>
        </div>

        {editorDashboardIsOpen ? (
          <div className=" xl:hidden absolute top-0 left-2 z-50">
            <FaArrowLeftLong
              onClick={() => setEditorDashboardIsOpen(false)}
              className=" text-5xl hover:text-c-primary text-c-dark duration-300 cursor-pointer"
            />
          </div>
        ) : (
          <div className=" xl:hidden absolute bottom-5 right-0">
            <Button onClick={() => setEditorDashboardIsOpen(true)}>
              Preview
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(CoverLetter);

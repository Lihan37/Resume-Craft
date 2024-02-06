import React from "react";
import LeftSideBar from "./leftBar/LeftSideBar";
import useTitleSet from "../../hooks/useTitleSet";
import ResumeTemplates from "./resume/ResumeTemplates";
import LeftSideBarOptions from "./resume/LeftSideBarOptions";
import useDisplay from "../../hooks/useDisplay";
import RightSideBar from "./rightBar/RightSideBar";
import RightSideBarOptions from "./resume/RightSideBarOptions";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectPersonalInfo } from "../../services/resumeEditor/resumeEditorSelector";

const Editor: React.FC = () => {
  useTitleSet("Resume Builder");
  const [windowWidth] = useDisplay();
  const personalInfo = useSelector(selectPersonalInfo);

  const hight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";

  return (
    <div
      style={{ minHeight: hight }}
      className="flex justify-start items-start">
      <div className="h-full min-w-[400px] max-w-[400px]  ">
        <LeftSideBar
          editor={<LeftSideBarOptions />}
          templates={<ResumeTemplates />}
        />
      </div>
      <div
        style={{ height: hight }}
        className="w-full flex justify-center items-center bg-zinc-100 ">
        <div
          style={{ transform: `scale(${0.7})` }}
          className=" h-[1190.14px] w-[845px] flex justify-start items-start rounded-lg overflow-hidden">
          <div className=" w-4/12 h-full bg-[#084c41] text-white p-10 ">
            <h1 className=" text-xl text-center font-semibold ">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <span className=" mx-auto my-2 w-10 h-[1px] block bg-white"></span>
            <h3 className=" uppercase text-xs font-semibold text-center text-gray-200">
              {personalInfo.jobTitle}
            </h3>
            <div className=" my-4">
              <h1 className=" font-semibold text-lg">Details</h1>
              <p></p>
            </div>
          </div>
          <div className=" w-8/12 h-full bg-white "></div>
        </div>
      </div>

      <div className="2xl:hidden fixed right-0 top-56 py-2 px-6 hover:bg-white hover:text-c-primary duration-300 transition-colors cursor-pointer text-white rounded-l-full bg-c-primary">
        <IoSettingsOutline className="animate-spin text-4xl" />
      </div>
      <div
        className={`${
          windowWidth < 1590
            ? "fixed top-[88px] xl:top-[98px] z-50 -right-[50%]"
            : null
        }`}>
        <RightSideBar>
          <RightSideBarOptions />
        </RightSideBar>
      </div>
    </div>
  );
};

export default React.memo(Editor);

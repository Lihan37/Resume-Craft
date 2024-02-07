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
import { selectResume } from "../../services/resumeEditor/resumeEditorSelector";
// import Toronto from "../../components/resumeTemplates/Toronto";
import resumes from "../../components/resumeTemplates";

const Editor: React.FC = () => {
  useTitleSet("Resume Builder");
  const [windowWidth] = useDisplay();
  const resume = useSelector(selectResume);

  const hight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";

  const Template = resumes["stockholm01"].template;

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
        id="resumeEditorDashboard"
        className="w-full flex overflow-auto justify-center items-center bg-zinc-100 ">
        {/* <Toronto resume={resume} /> */}
        <Template resume={resume} />
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

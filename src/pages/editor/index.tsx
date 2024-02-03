import React from "react";
import LeftSideBar from "./leftBar/LeftSideBar";
import useTitleSet from "../../hooks/useTitleSet";
import ResumeTemplates from "./resume/ResumeTemplates";
import LeftSideBarOptions from "./resume/LeftSideBarOptions";
import useDisplay from "../../hooks/useDisplay";
import { useResumeEditor } from "../../hooks/useResumeEditor";

const Editor: React.FC = () => {
  useTitleSet("Resume Builder");
  const [windowWidth] = useDisplay();
  const { personalInfo } = useResumeEditor();

  const hight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";

  const resumeHight =
    windowWidth > 1024
      ? window.innerHeight - 123 + "px"
      : window.innerHeight - 113 + "px";

  return (
    <div
      style={{ minHeight: hight }}
      className="flex justify-start items-start">
      <div className="h-full min-w-96 max-w-96 ">
        <LeftSideBar
          editor={<LeftSideBarOptions />}
          templates={<ResumeTemplates />}
        />
      </div>
      <div className="w-full h-full p-3 bg-slate-500 ">
        <div
          style={{ minHeight: resumeHight }}
          className=" max-w-[700px] mx-auto flex justify-start items-start rounded-lg overflow-hidden">
          <div
            style={{ minHeight: resumeHight }}
            className=" w-4/12 h-full bg-[#084c41] text-white p-10">
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
          <div
            style={{ minHeight: resumeHight }}
            className=" w-8/12 h-full bg-white "></div>
        </div>
      </div>
      <div className="h-full min-w-96 ">
        {/* <LeftSideBar
          editor={<LeftSideBarOptions />}
          templates={<ResumeTemplates />}
        /> */}
      </div>
    </div>
  );
};

export default React.memo(Editor);

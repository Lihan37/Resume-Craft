import React from "react";
import LeftSideBar from "./leftBar/LeftSideBar";
import useTitleSet from "../../hooks/useTitleSet";
import ResumeTemplates from "./resume/ResumeTemplates";
import LeftSideBarOptions from "./resume/LeftSideBarOptions";
import useDisplay from "../../hooks/useDisplay";
import { useResumeEditor } from "../../hooks/useResumeEditor";

// import { FaCheck } from "react-icons/fa6";

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
      <div className="h-full xl:min-w-[540px] 2xl:min-w-[640px] xl:max-w-[540px] 2xl:max-w-[640px] ">
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
          <div
            style={{ minHeight: resumeHight }}
            className=" w-8/12 h-full bg-white "></div>
        </div>
      </div>

      {/* <div className="h-full space-y-4 p-5 w-80 border-r-2">
        <div className=" space-y-1">
          <h1 className=" font-semibold text-2xl">Theme</h1>
          <div className="w-full gap-5 flex justify-between items-center">
            <div className="w-10 h-10 rounded-full bg-amber-600 cursor-pointer flex justify-center items-center">
              <FaCheck className=" text-lg text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-lime-600 cursor-pointer flex justify-center items-center">
              <FaCheck className=" text-lg text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-teal-600 cursor-pointer flex justify-center items-center">
              <FaCheck className=" text-lg text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-600 cursor-pointer flex justify-center items-center">
              <FaCheck className=" text-lg text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-cyan-600 cursor-pointer flex justify-center items-center">
              <FaCheck className=" text-lg text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="font-semibold text-2xl">Text</h1>
          <div className=""></div>
        </div>
      </div> */}
    </div>
  );
};

export default React.memo(Editor);

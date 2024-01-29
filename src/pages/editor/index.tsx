import React from "react";
import LeftSideBar from "./leftBar/LeftSideBar";
import useTitleSet from "../../hooks/useTitleSet";
import ResumeTemplates from "./resume/ResumeTemplates";
import ResumeEditor from "./resume/ResumeEditor";

const Editor: React.FC = () => {
  useTitleSet("Resume Builder");
  return (
    <>
      <LeftSideBar editor={<ResumeEditor />} templates={<ResumeTemplates />} />
    </>
  );
};

export default React.memo(Editor);

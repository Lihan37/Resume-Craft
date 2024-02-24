import React from "react";
import NavbarResume from "../components/editor/NavbarResume";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavbarCoverLetter from "../components/editor/NavbarCoverLetter";
import { useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";
import { selectResumeEditorError } from "../services/resumeEditor/resumeEditorSelector";
import { selectCoverLetterEditorError } from "../services/coverletterEditor/coverletterEditorSelector";

const EditorWrapper: React.FC = () => {
  const { pathname } = useLocation();
  const user = useSelector(selectUser);
  const error = useSelector(selectResumeEditorError);
  const errorCoverLetter = useSelector(selectCoverLetterEditorError);
  console.log(error);

  if (error || errorCoverLetter) {
    return <Navigate to="/notfound" />;
  }
  return !user._id ? (
    <Navigate to="/auth/login" />
  ) : (
    <>
      {pathname.includes("/edit/resume/") ? (
        <NavbarResume />
      ) : (
        <NavbarCoverLetter />
      )}
      <div className="max-w-[1800px] mx-auto ">
        <Outlet />
      </div>
    </>
  );
};

export default EditorWrapper;

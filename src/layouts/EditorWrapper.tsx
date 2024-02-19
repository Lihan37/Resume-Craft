import React from "react";
import NavbarResume from "../components/editor/NavbarResume";
import { Outlet, useLocation } from "react-router-dom";
import NavbarCoverLetter from "../components/editor/NavbarCoverLetter";

const EditorWrapper: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname.includes("/edit/resume/"));
  return (
    <div>
      <>
        {pathname.includes("/edit/resume/") ? (
          <NavbarResume />
        ) : (
          <NavbarCoverLetter />
        )}
        <div className="2xl:max-w-[1800px] mx-auto px-10 2xl:px-0">
          <Outlet />
        </div>
      </>
    </div>
  );
};

export default EditorWrapper;

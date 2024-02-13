import React from "react";
import EditorNavbar from "../components/editor/Navbar";
import { Outlet } from "react-router-dom";

const EditorWrapper: React.FC = () => {
  return (
    <div>
      <>
        <EditorNavbar />
        <div className="2xl:max-w-[1800px] mx-auto px-10 2xl:px-0">
          <Outlet />
        </div>
      </>
    </div>
  );
};

export default EditorWrapper;

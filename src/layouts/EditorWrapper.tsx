import React from "react";
import EditorNavbar from "../components/editor/Navbar";
import { Outlet } from "react-router-dom";

const EditorWrapper: React.FC = () => {
  return (
    <div>
      <>
        <EditorNavbar />
        <Outlet />
      </>
    </div>
  );
};

export default EditorWrapper;

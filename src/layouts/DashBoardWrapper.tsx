import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

export const DashBoardWrapper: React.FC = () => {
  return (
    <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row">
      <Sidebar />
      <div className=" w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
};

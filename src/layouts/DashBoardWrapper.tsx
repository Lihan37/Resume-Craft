import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

export const DashBoardWrapper: React.FC = () => {
  return (
    <div className=" flex justify-start items-start ">
      <Sidebar />
      <div className=" w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
};

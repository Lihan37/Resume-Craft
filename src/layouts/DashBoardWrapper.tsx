import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

export const DashBoardWrapper: React.FC = () => {
  return (
    <div className=" flex justify-start items-start bg-[#1A1C1E]">
      <Sidebar />
      <div className=" w-full h-full p-4">
        <Outlet />
      </div>
    </div>
  );
};

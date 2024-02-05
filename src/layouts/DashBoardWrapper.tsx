import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";

export const DashBoardWrapper: React.FC = () => {
  console.log(window.innerHeight);
  return (
    <>
      <Navbar />
      <div className=" flex justify-start items-start">
        <Sidebar />
        <div className=" mt-24 p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

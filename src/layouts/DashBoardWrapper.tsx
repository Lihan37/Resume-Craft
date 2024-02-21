import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";

export const DashBoardWrapper: React.FC = () => {
  const user = useSelector(selectUser);

  return !user ? (
    <Navigate to="/auth/login" />
  ) : user?._id && user.role === "admin" ? (
    <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row">
      <Sidebar />
      <div className=" w-full h-full ">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/dashboard" />
  );
};

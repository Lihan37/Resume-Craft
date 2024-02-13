import React from "react";
import DashBoardStats from "./home/DashBoardStats";
import DashBoardChart from "./home/DashBoardChart";

const AdminDashboard: React.FC = () => {
  return (
    <div className=" w-full">
      <p className="text-4xl text-c-dark-light font-bold px-5 py-10">Dashboard</p>
      <DashBoardStats></DashBoardStats>
      <DashBoardChart></DashBoardChart>
    </div>
  );
};

export default AdminDashboard;

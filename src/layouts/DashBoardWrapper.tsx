import React from "react";
import { Outlet } from "react-router-dom";

export const DashBoardWrapper: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

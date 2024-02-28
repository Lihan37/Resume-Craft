import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";
import { Navigate } from "react-router-dom";

interface IPrivateRoutes {
  children: React.ReactNode;
}
const PrivateRoutes: React.FC<IPrivateRoutes> = ({ children }) => {
  const user = useSelector(selectUser);

  return user?._id ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;

import React, { ReactNode } from "react";
import { FiSettings, FiUsers, FiBook } from "react-icons/fi";
import logoSvg from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";


const AdminDashboard: React.FC = () => {
  const userProfile = {
    name: "Eanur Rahman",
    email: "eanurlihan10@gmail.com",
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side navbar */}
      <div className="w-full lg:w-1/4 bg-white shadow-xl text-white p-6 flex flex-col items-center">
        {/*Logo*/}
        <Link to="/">
        <div className="mb-2 flex items-center justify-center">
          <img
            src={logoSvg}
            alt="Resumecraft Logo"
            className="w-12 h-12 object-contain"
          />
          <span className=" text-c-dark text-xl font-bold">Resume<span className="text-c-primary">Craft</span></span>
        </div>
        </Link>

        {/* Navigation links */}
        <div className="border-t border-white mt-4 pt-4 w-full">
          <NavLink icon={<FiUsers />} to="/users" text="Users" />
          <NavLink icon={<FiBook />} to="/blog" text="Blogs" />
          <NavLink icon={<FiSettings />} to="/settings" text="Settings" />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-4 lg:p-10">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl text-c-dark font-semibold">Hello, {userProfile.name}!</h1>
      </div>
    </div>
  );
};

interface NavLinkProps {
  icon: ReactNode;
  to: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, to, text }) => {
  const isActive = window.location.pathname === to;

  return (
    <button
      onClick={() => window.location.href = to}
      className={`flex items-center py-2 px-4 ${isActive ? 'text-c-primary' : 'text-c-dark'}`}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default AdminDashboard;

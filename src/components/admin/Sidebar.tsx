import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdArticle, MdOutlinePriceChange } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { images } from "../../constant";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  interface SideMenuItem {
    icon: JSX.Element;
    link: string;
    label: string;
  }

  const sideMenu: SideMenuItem[] = [
    {
      icon: <FaHome />,
      label: "Home",
      link: "/admin",
    },
    {
      icon: <MdOutlinePriceChange />,
      label: "Pricing",
      link: "/admin/payment-add",
    },
    {
      icon: <MdArticle />,
      label: "Blogs",
      link: "/admin/blog",
    },
    {
      icon: <IoIosCreate />,
      label: "Create Blog",
      link: "/admin/create-blog",
    },
  ];

  return (
    <div className="w-full md:w-20 lg:w-80 lg:min-h-screen border-r-2">
      <Link to="/" className="flex items-center p-4 mb-6">
        <img
          className="w-10 h-10 xl:w-12 xl:h-12"
          src={images.logo}
          alt="logo"
        />
        <h1 className="block md:hidden lg:block font-bold text-2xl xl:text-3xl  text-c-dark">
          Resume<span className=" text-c-primary">Craft</span>
        </h1>
      </Link>
      <ul className="p-4">
        {sideMenu.map((item) => (
          <li key={item.link} className="mt-3 text-c-dark rounded-lg">
            <NavLink
              key={item.link}
              to={item.link}
              className={`flex gap-2 items-center text-lg font-semibold hover:bg-c-primary hover:text-white transition-colors duration-300 rounded-lg p-2 ${
                activeRoute === item.link
                  ? "bg-c-primary text-white rounded-lg p-2"
                  : ""
              }`}>
              <p className="mx-0 md:mx-auto lg:mx-0">{item.icon}</p>
              <p className="block md:hidden lg:block">{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

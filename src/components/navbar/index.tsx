import React, { useLayoutEffect, useRef, useState } from "react";
import { Container } from "../common/Container";
import Logo from "../common/Logo";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useDisplay from "../../hooks/useDisplay";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useOutsideClick from "../../hooks/useOutsideClick";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../services/auth/authSlice";
import { selectUser } from "../../services/auth/authSelector";

interface MenuItem {
  link: string;
  label: string;
}

const menu: MenuItem[] = [
  { link: "/resumes-template", label: "Resume" },
  { link: "/cover-latter-template", label: "Cover letter" },
  { link: "/pricing", label: "Pricing" },
  { link: "/blog", label: "Blog" },
  { link: "/dashboard", label: "Dashboard" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenAccount, setIsOpenAccount] = useState<boolean>(false);
  const [windowWidth] = useDisplay();
  const { pathname } = useLocation();
  const accountRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useOutsideClick(accountRef, () => {
    setIsOpenAccount(false);
  });

  const handleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (windowWidth > 769) {
      setIsOpen(true);
      return;
    }
    if (windowWidth < 770) {
      setIsOpen(false);
      return;
    }
  }, [windowWidth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await fetch(`${import.meta.env.VITE_BASE_URL_API}/auth/v1/logout`, {
        method: "GET",
        credentials: "include",
      });
      dispatch(removeUser());
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-6">
      <Container>
        <div className=" flex justify-between items-center">
          <Logo />
          {isOpen && (
            <div
              className={`${
                windowWidth < 769 &&
                "absolute  bg-gradient-to-r  from-blue-50 to-violet-100 "
              } ${
                (pathname === "/dashboard" || pathname === "/account") &&
                "hidden"
              } top-20 right-10 py-5 rounded-xl lg:rounded-none w-72 lg:w-fit  uppercase flex flex-col lg:flex-row z-50 justify-start items-center gap-4 xl:gap-12 font-semibold text-lg text-c-dark font-mono`}>
              <div className="lg:hidden px-5 text-3xl w-full ">
                <button onClick={handleMobileMenu} className="w-fit">
                  <IoMdClose />
                </button>
              </div>
              {menu.map((item) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  onClick={() => setIsOpen(windowWidth < 769 ? false : true)}
                  className={({ isActive }) =>
                    isActive
                      ? `text-c-primary ${
                          item.link === "/dashboard" && "lg:hidden"
                        }`
                      : `inactive ${item.link === "/dashboard" && "lg:hidden"}`
                  }>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}

          {pathname === "/dashboard" || pathname === "/account" ? (
            <div ref={accountRef} className="relative">
              <div
                onClick={() => setIsOpenAccount((prev) => !prev)}
                className=" cursor-pointer w-10 h-10 rounded-full border-2 border-c-primary overflow-hidden">
                <img
                  className=" w-full h-full "
                  src={
                    user?.avatar.url || "https://i.ibb.co/hssB5Gs/profile-1.png"
                  }
                  alt="avatar"
                />
              </div>
              {isOpenAccount && (
                <div className=" rounded-md overflow-hidden min-w-56 max-w-80 bg-white text-c-dark absolute  border-[1.4px] right-8 top-10">
                  <NavLink
                    to="/account"
                    className="border-b-2 text-start w-full p-4 group flex justify-center items-center">
                    <div className="w-full">
                      <h1 className=" group-hover:text-c-primary duration-300 font-semibold text-lg w-fit">
                        {user?.name.slice(0, 15)}
                        {user?.name && user?.name?.length > 15 && ".."}
                      </h1>
                      <h1 className="-mt-1 text-c-dark-light ">
                        Account Settings
                      </h1>
                    </div>
                    <IoIosArrowForward className=" text-2xl group-hover:text-c-primary duration-300 " />
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    className=" text-lg p-4 py-2 block text-neutral-500 hover:text-c-primary duration-300 font-semibold">
                    Dashboard
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className=" text-lg p-4 py-2 text-neutral-500 hover:text-red-500 duration-300 font-semibold">
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to={`${user?._id ? "/dashboard" : "/auth/login"}`}>
              <button className=" hidden lg:flex font-mono justify-start items-center gap-2 xl:gap-5  uppercase  rounded-full text-c-dark font-semibold text-lg">
                <span> {user?._id ? "Dashboard" : "Login"}</span>
                <span className=" border-2 rounded-full p-2 xl:p-3 border-c-primary">
                  <FaArrowRightLong />
                </span>
              </button>
            </NavLink>
          )}

          <button
            className={`text-3xl lg:hidden w-fit ${
              (pathname === "/dashboard" || pathname === "/account") && "hidden"
            }`}
            onClick={handleMobileMenu}>
            {isOpen ? <IoMdClose /> : <HiMiniBars3CenterLeft />}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

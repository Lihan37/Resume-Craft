import React, { useLayoutEffect, useState } from "react";
import { Container } from "../common/Container";
import Logo from "../common/Logo";
import { NavLink } from "react-router-dom";
import useDisplay from "../../hooks/useDisplay";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

interface MenuItem {
  link: string;
  label: string;
}

const menu: MenuItem[] = [
  { link: "/resumes-template", label: "Resume" },
  { link: "/cover-latter-template", label: "Cover letter" },
  { link: "/pricing", label: "Pricing" },
  { link: "/blog", label: "Blog" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth] = useDisplay();

  const handleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (windowWidth > 769) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }, [isOpen]);

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
                  className={({ isActive }) =>
                    isActive ? " text-c-primary" : "inactive"
                  }>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
          <NavLink to="/login">
            <button className=" hidden lg:flex font-mono justify-start items-center gap-2 xl:gap-5  uppercase  rounded-full text-c-dark font-semibold text-lg">
              <span> Login</span>
              <span className=" border-2 rounded-full p-2 xl:p-3 border-c-primary">
                <FaArrowRightLong />
              </span>
            </button>
          </NavLink>
          <button
            className="text-3xl lg:hidden w-fit"
            onClick={handleMobileMenu}>
            {isOpen ? <IoMdClose /> : <HiMiniBars3CenterLeft />}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

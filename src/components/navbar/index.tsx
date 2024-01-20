import React from "react";
import { Container } from "../common/Container";
import Logo from "../common/Logo";
import Button, { ButtonSize } from "../common/Button";
import { Link } from "react-router-dom";
import useDisplay from "../../hooks/useDisplay";
import { FaArrowRightLong } from "react-icons/fa6";

interface MenuItem {
  link: string;
  label: string;
}

const menu: MenuItem[] = [
  { link: "/resumes-template", label: "Resume" },
  { link: "/cover-latter-template", label: "Cover letter" },
  { link: "/blog", label: "Pricing" },
  { link: "/blog", label: "Blog" },
  { link: "/faq", label: "FAQ" },
];

const Navbar: React.FC = () => {
  const [windowWidth] = useDisplay();

  return (
    <div className="py-6">
      <Container>
        <div className=" flex justify-between items-center">
          <Logo />
          <div className="hidden uppercase flex justify-start items-center gap-8 xl:gap-16 font-semibold text-lg text-c-dark">
            {menu.map((item) => (
              <Link to={item.link}>{item.label}</Link>
            ))}
          </div>
          {/* <Link to="/login">
            <Button size={windowWidth > 1025 ? ButtonSize.LG : ButtonSize.MD}>
              Start Free
            </Button>
          </Link> */}
          <button className="flex justify-start items-center gap-5 uppercase px-10 py-3 rounded-full text-c-dark font-semibold text-lg">
            <span> GET START</span>
            <span className=" border-2 rounded-full p-3 border-c-primary">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

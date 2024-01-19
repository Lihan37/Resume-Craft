import React from "react";
import { Container } from "../common/Container";
import Logo from "../common/Logo";
import Button, { ButtonSize } from "../common/Button";
import { Link } from "react-router-dom";
import useDisplay from "../../hooks/useDisplay";

interface MenuItem {
  link: string;
  label: string;
}

const menu: MenuItem[] = [
  { link: "/", label: "Resume" },
  { link: "/", label: "Cover" },
  { link: "/", label: "Blog" },
  { link: "/", label: "FAQ" },
];

const Navbar: React.FC = () => {
  const [windowWidth] = useDisplay();

  return (
    <div className="py-6">
      <Container>
        <div className=" flex justify-between items-center">
          <Logo />
          <div className=" flex justify-start items-center gap-8 xl:gap-16 font-semibold text-xl text-c-dark">
            {menu.map((item) => (
              <Link to={item.link}>{item.label}</Link>
            ))}
          </div>
          <Button size={windowWidth > 1025 ? ButtonSize.LG : ButtonSize.MD}>
            Start Free
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

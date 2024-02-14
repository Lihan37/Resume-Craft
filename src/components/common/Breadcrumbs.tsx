import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

interface IBreadcrumbs {
  back: string;
  label: string;
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ back, label }) => {
  return (
    <Link
      to={back}
      className={` hidden lg:flex justify-start items-center gap-1 lg:gap-3 font-semibold text-base lg:text-xl text-c-dark-light`}>
      <span>{label}</span>
      <MdOutlineArrowForwardIos className="text-base lg:text-xl mt-1" />
    </Link>
  );
};

export default Breadcrumbs;

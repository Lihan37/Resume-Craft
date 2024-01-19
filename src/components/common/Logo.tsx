import React from "react";
import { images } from "../../constant";

const Logo: React.FC = () => {
  return (
    <div className=" flex justify-start items-center gap-2">
      <img className="w-12 h-12 xl:w-14 xl:h-14" src={images.logo} alt="logo" />
      <h1 className=" font-bold text-3xl xl:text-4xl  text-c-dark">
        Resume<span className=" text-c-primary">Craft</span>
      </h1>
    </div>
  );
};

export default Logo;

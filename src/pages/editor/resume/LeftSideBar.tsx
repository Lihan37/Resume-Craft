import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import useDisplay from "../../../hooks/useDisplay";

const LeftSideBar: React.FC = () => {
  useTitleSet("Resume Builder");
  const [windowWidth] = useDisplay();

  const sideBarWidth =
    windowWidth > 1024
      ? window.innerHeight - 96 + "px"
      : window.innerHeight - 88 + "px";

  return (
    <div
      style={{ maxHeight: sideBarWidth }}
      className=" max-w-72 overflow-y-scroll py-5 px-5 border-r-2">
      <div className="p-2 flex justify-between bg-neutral-100 rounded-md">
        <button className=" w-full bg-white py-1 rounded-md text-lg font-semibold">
          Create
        </button>
        <button className=" w-full bg-transparent py-1 rounded-md text-lg font-semibold">
          Create
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default LeftSideBar;

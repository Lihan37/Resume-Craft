import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const DashBoardStats: React.FC = () => {
  interface DashboardStatsItem {
    icon: JSX.Element;
    title: string;
    number: number;
  }

  const dashboardStats: DashboardStatsItem[] = [
    {
      icon: <FaUsers />,
      title: "Total Users",
      number: 324,
    },
    {
      icon: <FaRegFileAlt />,
      title: "Total Resume",
      number: 288,
    },
    {
      icon: <AiOutlineFilePdf />,
      title: "Cover Letter",
      number: 136,
    },
    {
      icon: <CgWebsite />,
      title: "Total Portfolio",
      number: 67,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-between mt-10 px-5">
      {dashboardStats.map((item, i) => (
        <div
          key={i}
          className="flex gap-3 md:gap-5 items-center py-3 md:py-5 px-4 md:px-8 mx-auto md:mx-0  rounded-2xl border-2">
          <p className="text-white bg-c-primary text-lg p-3 rounded-full">
            {item.icon}
          </p>
          <div className="text-c-dark">
            <p className="">{item.title}</p>
            <p className="text-2xl font-bold">{item.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardStats;

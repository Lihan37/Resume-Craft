import React, { useEffect } from "react";
import DashBoardStats from "./home/DashBoardStats";
import DashBoardChart from "./home/DashBoardChart";
import useTitleSet from "../../../hooks/useTitleSet";
import { useGetAllPriceQuery } from "../../../services/api/api";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { selectBlogs } from "../../../services/blogs/blogSelector";
import { getAllBlogs } from "../../../services/blogs/blogApi";

const AdminDashboard: React.FC = () => {
  useTitleSet("AdminDashboard");
  useGetAllPriceQuery();
  const { blogs } = useSelector(selectBlogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(getAllBlogs({ page: 1 }));
    }
  }, []);

  return (
    <div className=" w-full">
      <p className="text-4xl text-c-dark-light font-bold px-5 py-10">
        Dashboard
      </p>
      <DashBoardStats />
      <DashBoardChart />
    </div>
  );
};

export default AdminDashboard;

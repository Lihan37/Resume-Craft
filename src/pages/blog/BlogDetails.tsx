import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitleSet from "../../hooks/useTitleSet";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { Container } from "../../components/common/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectSingleBlog } from "../../services/blogs/blogSelector";
import { IBlog } from "../../services/blogs/blogSlice";
import BlogDetailsSkeleton from "../../components/skeleton/BlogDetailsSkeleton";
import formatDateToDayMonth from "../../utils/formatDateToDayMonth";
import HTMLRenderer from "../../utils/HTMLRenderer";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const BlogDetails: React.FC = () => {
  const [state, setState] = useState<IBlog>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const data = useSelector((state: RootState) =>
    selectSingleBlog(state, id || "")
  );
  useTitleSet("Blog Details");

  useEffect(() => {
    setState(data);
  }, [data]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/blog/v1/single/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        setLoading(false);
        setState(data.blog);
      }
      if (!data.success) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!data?._id) {
      getData();
    }
  }, []);
  return loading ? (
    <BlogDetailsSkeleton />
  ) : (
    state?._id && (
      <Container>
        <div className="max-w-screen-xl mx-auto mt-12">
          <img src={state.image?.url} alt="" className=" w-full rounded-md" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <img
                  src={state.user.avatar?.url}
                  className="w-[45px] rounded-full"
                  alt=""
                />
                <p className="text-xl my-8">
                  by <span className="font-semibold">{state.user.name}</span>
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <MdOutlineCalendarMonth className="text-2xl" />
                <p className="text-xl my-8">
                  {formatDateToDayMonth(state.createdAt)}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <FaEye className="text-2xl" />
              <p className="text-xl my-8">0</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold my-5">{state.title}</h1>
          <div className="text-xl my-5 text-justify">
            <HTMLRenderer htmlContent={state.content} />
          </div>
        </div>
      </Container>
    )
  );
};

export default BlogDetails;

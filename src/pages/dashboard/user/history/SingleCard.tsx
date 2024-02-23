// import { FaCloudDownloadAlt, FaCopy, FaEdit } from "react-icons/fa";
import Title from "../../../../components/editor/Title";
import { useNavigate } from "react-router-dom";
import { ISingleUserHistory } from "../../../../services/history/historySlice";
import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../app/store";
import {
  deleteUserHistory,
  updateUserHistory,
} from "../../../../services/history/historyApi";
import formatDateToDayMonth from "../../../../utils/formatDateToDayMonth";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectHistoryError } from "../../../../services/history/historySelector";
// import Download from "./Download";

interface IButtonOption extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
interface ISingleCard {
  history: ISingleUserHistory;
  buttonLabel?: string;
}

export const ButtonOption: React.FC<IButtonOption> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="flex justify-start items-center gap-2 font-semibold text-base hover:text-c-primary duration-300 transition-colors">
      {children}
    </button>
  );
};

const SingleCard: React.FC<ISingleCard> = ({ history, buttonLabel }) => {
  const [title, setTitle] = useState<string>(history.title);
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const error = useSelector(selectHistoryError);

  const handleNavigate = () => {
    if (buttonLabel === "resume") {
      navigate(`/edit/resume/${history.templateId}`);
      return;
    }
    if (buttonLabel === "coverletter") {
      navigate(`/edit/coverletter/${history.templateId}`);
      return;
    }
  };

  const onTitleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleCreateHistory = async () => {
    const data: ISingleUserHistory = {
      ...history,
      title: title,
    };

    try {
      await appDispatch(updateUserHistory(data));
    } catch (error) {
      console.error("Error creating history:", error);
    }
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (title !== "Untitled" && history.title !== title) {
        handleCreateHistory();
      }
    }, 600);

    return () => clearTimeout(timerId);
  }, [title]);

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await appDispatch(deleteUserHistory(history._id));

        console.log(error);

        if (error !== null) {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          Swal.fire({
            title: "Deleted!",
            text: "Your history has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
    });
  };

  return (
    <div className="cursor-pointer flex justify-start items-start gap-5">
      <div
        onClick={handleNavigate}
        className="h-56 lg:h-72 xl:h-56 2xl:h-72 w-full  border-[1px] rounded-md overflow-hidden">
        <img
          className=" h-full w-full"
          src={history.thumbnail.url}
          alt="image"
        />
      </div>
      <div className="text-c-dark flex flex-col gap-2 justify-start items-start w-full">
        <Title
          initialValue={title}
          getValue={(data: string) => setTitle(data)}
          onClick={onTitleClick}
          maxWidth="80px"
        />
        <p className=" text-c-dark-light text-sm">
          Updated {formatDateToDayMonth(history.updatedAt)}
        </p>
        <ButtonOption onClick={handleNavigate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-c-primary">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit
        </ButtonOption>
        <ButtonOption onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0  24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-400">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <span className="hover:text-red-500 duration-300">Delete</span>
        </ButtonOption>

        {/* <Download templateId={history.templateId} type={buttonLabel || ""} /> */}
      </div>
    </div>
  );
};

export default React.memo(SingleCard);

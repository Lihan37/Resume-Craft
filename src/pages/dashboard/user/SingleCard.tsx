import { FaCloudDownloadAlt, FaCopy, FaEdit } from "react-icons/fa";
import Title from "../../../components/editor/Title";
import { useNavigate } from "react-router-dom";
import { ISingleUserHistory } from "../../../services/history/historySlice";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/store";
import { updateUserHistory } from "../../../services/history/historyApi";
import formatDateToDayMonth from "../../../utils/formatDateToDayMonth";

interface IButtonOption {
  children: React.ReactNode;
}

interface ISingleCard {
  history: ISingleUserHistory;
  buttonLabel?: string;
}

const ButtonOption: React.FC<IButtonOption> = ({ children }) => {
  return (
    <button className="flex justify-start items-center gap-2 font-semibold text-base hover:text-c-primary duration-300 transition-colors">
      {children}
    </button>
  );
};

const SingleCard: React.FC<ISingleCard> = ({ history, buttonLabel }) => {
  const [title, setTitle] = useState<string>(history.title);
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();

  const handleNavigate = () => {
    console.log(buttonLabel);
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

  return (
    <div onClick={handleNavigate} className=" cursor-pointer">
      <div className=" flex justify-start items-start gap-5">
        <div className="h-56 lg:h-72 xl:h-56 2xl:h-72 w-full  border-[1px] rounded-md overflow-hidden">
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
          <ButtonOption>
            <FaEdit className=" text-xl text-c-primary" /> Edit
          </ButtonOption>
          <ButtonOption>
            <FaCopy className=" text-xl text-c-primary" /> Make a copy
          </ButtonOption>
          <ButtonOption>
            <FaCloudDownloadAlt className=" text-xl text-c-primary" /> Download
            PDF
          </ButtonOption>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleCard);

import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import Breadcrumbs from "../common/Breadcrumbs";
import Title from "./Title";
import { IoIosCloudy } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import ZoomIn from "./ZoomIn";
import { useDispatch, useSelector } from "react-redux";
import { setZoomIn } from "../../services/resumeEditor/resumeEditorSlice";
import {
  selectResume,
  selectResumeEditor,
  selectZoomIn,
} from "../../services/resumeEditor/resumeEditorSelector";
import { TbLoader2 } from "react-icons/tb";
import { ISingleUserHistory } from "../../services/history/historySlice";
import {
  updateUserHistory,
  userHistory,
} from "../../services/history/historyApi";
import { RootState, useAppDispatch } from "../../app/store";
import {
  selectAllHistory,
  selectSingleHistory,
} from "../../services/history/historySelector";

const EditorNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const editor = useSelector(selectResumeEditor);
  const zoom = useSelector(selectZoomIn);
  const resume = useSelector(selectResume);

  const history = useSelector((state: RootState) =>
    selectSingleHistory(state, resume._id)
  );

  const allHistory = useSelector(selectAllHistory);

  useEffect(() => {
    if (!(allHistory.length > 0)) {
      appDispatch(userHistory());
    }
  }, []);

  const [title, setTitle] = useState<string>(history?.title || "");

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (title !== "Untitled" && history?.title !== title) {
        if (history?._id) {
          const data: ISingleUserHistory = {
            ...history,
            title: title,
          };
          try {
            await appDispatch(updateUserHistory(data));
          } catch (error) {
            console.error("Error creating history:", error);
          }
        }
      }
    }, 600);

    return () => clearTimeout(timerId);
  }, [title]);

  return (
    <div className="border-b-2">
      <div className=" 2xl:max-w-[1800px] mx-auto px-10 2xl:px-0 py-5 ">
        <div className="flex justify-between items-center">
          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <Logo name={false} />
            <div className=" flex justify-start items-center gap-5 xl:gap-10">
              <Breadcrumbs back="/" label="Home" />
              <Breadcrumbs back="/dashboard" label="Resumes" />

              {history?._id && (
                <Title
                  initialValue={history?.title}
                  getValue={(data: string) => setTitle(data)}
                />
              )}

              <div className="flex justify-start items-center gap-2 mt-1 w-28">
                {editor?.isSyncing ? (
                  <TbLoader2 className="animate-spin text-c-primary text-2xl lg:text-2xl" />
                ) : (
                  <IoIosCloudy className=" text-c-primary text-2xl lg:text-3xl" />
                )}

                {editor?.isSyncing ? (
                  <span className=" font-semibold text-c-primary text-base lg:text-xl">
                    Saving..
                  </span>
                ) : (
                  <span className=" font-semibold text-c-dark text-base lg:text-xl">
                    Saved
                  </span>
                )}
              </div>
            </div>
          </div>
          {!editor.isLoading && (
            <ZoomIn
              initialValue={zoom}
              getValue={(data: number) => {
                dispatch(setZoomIn(data));
              }}
            />
          )}

          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <button className=" text-c-dark font-semibold flex justify-start items-center gap-2 px-4 py-1 lg:py-2 bg-gray-100 rounded-full text-base lg:text-xl">
              <FiDownload />
              <span>Download</span>
            </button>
            <button className=" flex justify-start items-center gap-2 px-4 py-1 lg:py-2 bg-c-primary text-white rounded-full text-base lg:text-xl">
              <FiSend />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EditorNavbar);

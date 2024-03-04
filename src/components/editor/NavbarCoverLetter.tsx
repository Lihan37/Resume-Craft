import React, { useEffect, useRef, useState } from "react";
import Logo from "../common/Logo";
import Breadcrumbs from "../common/Breadcrumbs";
import Title from "./Title";
import { IoIosCloudy } from "react-icons/io";
import { TbLoader2 } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import ZoomIn from "./ZoomIn";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../services/resumeEditor/resumeEditorSelector";
import {
  updateUserHistory,
  userHistory,
} from "../../services/history/historyApi";
import { RootState, useAppDispatch } from "../../app/store";
import {
  selectAllHistory,
  selectSingleHistory,
} from "../../services/history/historySelector";
import {
  selectCoverLetter,
  selectCoverLetterEditor,
  selectCoverLetterZoom,
} from "../../services/coverletterEditor/coverletterEditorSelector";
import { setZoomIn } from "../../services/coverletterEditor/coverletterEditorSlice";
import { ISingleUserHistory } from "../../services/history/historySlice";
import coverLetterPDF from "../coverLetterTemplates/coverLetterPDF";
import { CoverLettersTemplatesType } from "../coverLetterTemplates/template";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Share from "./Share";
import useOutsideClick from "../../hooks/useOutsideClick";

const NavbarCoverLetter: React.FC = () => {
  const appDispatch = useAppDispatch();
  const editor = useSelector(selectCoverLetterEditor);
  const allHistory = useSelector(selectAllHistory);
  const dispatch = useDispatch();
  const zoom = useSelector(selectCoverLetterZoom);
  const coverLetter = useSelector(selectCoverLetter);
  const [isShare, setIsShare] = useState<boolean>(false);
  const shareRef = useRef(null);
  useOutsideClick(
    shareRef,
    () => {
      setIsShare(false);
    },
    []
  );

  const Template =
    !editor.isLoading &&
    coverLetterPDF[
      editor.coverLetter.templateId as keyof CoverLettersTemplatesType
    ]
      ? coverLetterPDF[
          editor.coverLetter.templateId as keyof CoverLettersTemplatesType
        ].template
      : null;

  useEffect(() => {
    if (!allHistory) {
      appDispatch(userHistory());
    }
  }, []);

  const history = useSelector((state: RootState) =>
    selectSingleHistory(state, coverLetter._id)
  );

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
      <div className=" max-w-[1800px] mx-auto  py-5 pr-3">
        <div className="flex justify-between items-center">
          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <Logo name={false} />
            <div className=" flex justify-start items-center gap-5 xl:gap-10">
              <Breadcrumbs back="/" label="Home" />
              <Breadcrumbs back="/dashboard" label="Dashboard" />

              {history?._id && (
                <Title
                  initialValue={history?.title}
                  getValue={(data: string) => setTitle(data)}
                />
              )}

              <div className="hidden md:flex justify-start items-center gap-2 mt-1 md:w-28">
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
          <div className="hidden md:block">
            <ZoomIn
              initialValue={zoom}
              getValue={(data: number) => {
                dispatch(setZoomIn(data));
              }}
            />
          </div>

          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            {Template && (
              <PDFDownloadLink
                className="text-c-dark font-semibold flex justify-start  items-center lg:gap-2 lg:px-4 p-2 lg:py-2 bg-gray-100 rounded-full text-base lg:text-xl"
                document={<Template coverLetter={coverLetter} />}
                fileName="resumeCraft.pdf">
                <FiDownload />
                <span className=" hidden lg:block">Download</span>
              </PDFDownloadLink>
            )}
            <div ref={shareRef} className="relative">
              <button
                onClick={() => setIsShare((pre) => !pre)}
                className=" flex justify-start items-center lg:gap-2 lg:px-4 p-2  lg:py-2 bg-c-primary text-white rounded-full text-base lg:text-xl">
                <FiSend />
                <span className=" hidden lg:block">Share</span>
              </button>
              {isShare && (
                <div className="absolute   bg-white border-[1.3px] rounded-md top-14 z-50 right-12">
                  <Share templateId={coverLetter._id} type="coverletter" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavbarCoverLetter);

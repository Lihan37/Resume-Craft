import React, { useEffect, useRef, useState } from "react";
import useDisplay from "../../hooks/useDisplay";
import LeftSideBar from "./leftBar/LeftSideBar";
import LeftSideBarOptions from "./coverletter/LeftSideBarOptions";
import CoverLetterTemplates from "./coverletter/CoverLetterTemplates";
import RightSideBar from "./rightBar/RightSideBar";
import RightSideBarOptions from "./coverletter/RightSideBarOptions";
import { useParams } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../components/common/Button";
import { useSelector } from "react-redux";
import {
  selectCoverLetter,
  selectCoverLetterEditor,
  selectCoverLetterZoom,
} from "../../services/coverletterEditor/coverletterEditorSelector";
import coverLetters, {
  CoverLettersTemplatesType,
} from "../../components/coverLetterTemplates/template";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  createCoverLetterAndUpdate,
  getSingleCoverLetterData,
} from "../../services/coverletterEditor/coverletterEditorApi";
import { useAppDispatch } from "../../app/store";
import { updateHistoryThumbnail } from "../../services/history/historyApi";
import html2canvas from "html2canvas";

const CoverLetter: React.FC = () => {
  const [rightSideBarIsOpen, setRightSideBarIsOpen] = useState<boolean>(false);
  const [editorDashboardIsOpen, setEditorDashboardIsOpen] =
    useState<boolean>(false);
  const [windowWidth] = useDisplay();
  const editor = useSelector(selectCoverLetterEditor);
  const coverLetter = useSelector(selectCoverLetter);
  const param = useParams();
  const templateRef = useRef(null);
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideBarOpenButtonRef = useRef(null);
  const dispatch = useAppDispatch();
  const zoom = useSelector(selectCoverLetterZoom);

  useEffect(() => {
    if (param.id && param.id !== coverLetter._id) {
      dispatch(getSingleCoverLetterData(param.id));
    }
  }, [param.id, coverLetter._id]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (param.id === coverLetter._id) {
        dispatch(createCoverLetterAndUpdate(coverLetter));
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [coverLetter, dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!editor.isLoading) {
        if (templateRef.current && param.id) {
          const divToCapture = templateRef.current;
          const canvas = await html2canvas(divToCapture);

          // Convert canvas to blob
          const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob(resolve, "image/png");
          });

          if (!blob) {
            console.error("Failed to convert canvas to blob.");
            return;
          }

          const formData = new FormData();
          formData.append("Thumbnail", blob, "coverLetterThumbnail.png");

          if (coverLetter.historyId) {
            try {
              await dispatch(
                updateHistoryThumbnail({
                  id: coverLetter.historyId,
                  fileData: formData,
                })
              );
            } catch (error) {
              console.error("Error updating thumbnail:", error);
            }
          }
        }
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [coverLetter]);

  const hight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";

  const Template =
    !editor.isLoading &&
    coverLetters[
      editor.coverLetter.templateId as keyof CoverLettersTemplatesType
    ]
      ? coverLetters[
          editor.coverLetter.templateId as keyof CoverLettersTemplatesType
        ].template
      : null;

  useOutsideClick(
    rightSideRef,
    () => {
      console.log("click outSide");
      setRightSideBarIsOpen(false);
    },
    [rightSideBarOpenButtonRef, leftSideRef]
  );
  return (
    !editor.isLoading && (
      <div>
        <div
          style={{ minHeight: hight }}
          className="flex justify-start items-start relative">
          <div
            ref={leftSideRef}
            className={`${
              !editorDashboardIsOpen ? "block" : " hidden"
            } h-full w-full xl:min-w-[400px] xl:max-w-[400px]`}>
            <LeftSideBar
              editor={<LeftSideBarOptions />}
              templates={<CoverLetterTemplates />}
            />
          </div>

          {/* Editor Dashboard  */}
          <div
            style={{ height: hight }}
            id="resumeEditorDashboard"
            className={`${
              editorDashboardIsOpen ? "block" : " hidden"
            } w-full xl:flex overflow-auto justify-center items-center bg-zinc-100 `}>
            <div
              className={`${
                zoom > 1 && "w-[1600px] h-[1300px] pt-[250px] "
              }  flex justify-center items-center`}>
              {Template && (
                <Template ref={templateRef} coverLetter={editor.coverLetter} />
              )}
            </div>
          </div>
          <div
            ref={rightSideBarOpenButtonRef}
            onClick={() => setRightSideBarIsOpen(true)}
            className="2xl:hidden fixed right-0 top-56 py-2 px-6 hover:bg-white hover:text-c-primary duration-300 transition-colors cursor-pointer text-white rounded-l-full bg-c-primary">
            <IoSettingsOutline className="animate-spin text-4xl" />
          </div>

          {/* /// Right Side Bar  */}
          <div
            ref={rightSideRef}
            className={`${
              windowWidth < 1590
                ? `fixed top-[88px] xl:top-[98px] z-50 ${
                    rightSideBarIsOpen ? "-right-[0%]" : "-right-[1000%]"
                  }`
                : null
            }`}>
            <RightSideBar>
              <div className="">
                <RightSideBarOptions />
                <div className="2xl:hidden mt-10 flex justify-center items-center">
                  <button
                    onClick={() => setRightSideBarIsOpen(false)}
                    className="w-fit rounded-md text-white  px-3 py-1 text-base font-semibold bg-red-400">
                    Close
                  </button>
                </div>
              </div>
            </RightSideBar>
          </div>

          {editorDashboardIsOpen ? (
            <div className=" xl:hidden absolute top-0 left-2 z-50">
              <FaArrowLeftLong
                onClick={() => setEditorDashboardIsOpen(false)}
                className=" text-5xl hover:text-c-primary text-c-dark duration-300 cursor-pointer"
              />
            </div>
          ) : (
            <div className=" xl:hidden absolute bottom-5 right-0">
              <Button onClick={() => setEditorDashboardIsOpen(true)}>
                Preview
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default React.memo(CoverLetter);

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import LeftSideBar from "./leftBar/LeftSideBar";
import useTitleSet from "../../hooks/useTitleSet";
import ResumeTemplates from "./resume/ResumeTemplates";
import LeftSideBarOptions from "./resume/LeftSideBarOptions";
import useDisplay from "../../hooks/useDisplay";
import RightSideBar from "./rightBar/RightSideBar";
import RightSideBarOptions from "./resume/RightSideBarOptions";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  selectResume,
  selectResumeEditor,
  selectZoomIn,
} from "../../services/resumeEditor/resumeEditorSelector";
import resumes, {
  ResumeTemplatesType,
} from "../../components/resumeTemplates/template";
import {
  createResumeAndUpdate,
  getSingleResumeData,
} from "../../services/resumeEditor/resumeEditorApi";
import { useAppDispatch } from "../../app/store";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { updateHistoryThumbnail } from "../../services/history/historyApi";
import useOutsideClick from "../../hooks/useOutsideClick";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const ResumeEditor: React.FC = () => {
  useTitleSet("Resume Builder");
  const [windowWidth] = useDisplay();
  const resume = useSelector(selectResume);
  const editor = useSelector(selectResumeEditor);
  const dispatch = useAppDispatch();
  const param = useParams();
  const templateRef = useRef(null);
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideBarOpenButtonRef = useRef(null);
  const [rightSideBarIsOpen, setRightSideBarIsOpen] = useState<boolean>(false);
  const [editorDashboardIsOpen, setEditorDashboardIsOpen] =
    useState<boolean>(false);
  const zoom = useSelector(selectZoomIn);

  useEffect(() => {
    if (param.id && param.id !== resume._id) {
      dispatch(getSingleResumeData(param.id));
    }
  }, [param.id, resume._id]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (param.id === resume._id) {
        dispatch(createResumeAndUpdate(resume));
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [resume, dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!editor.isLoading) {
        if (templateRef.current && param.id) {
          const divToCapture = templateRef.current;
          const canvas = await html2canvas(divToCapture, { useCORS: true });

          // Convert canvas to blob
          const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob(resolve, "image/png");
          });

          if (!blob) {
            console.error("Failed to convert canvas to blob.");
            return;
          }

          const formData = new FormData();
          formData.append("Thumbnail", blob, "resumeThumbnail.png");

          if (resume.historyId) {
            try {
              await dispatch(
                updateHistoryThumbnail({
                  id: resume.historyId,
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
  }, [resume]);

  const hight =
    windowWidth > 1024
      ? window.innerHeight - 98 + "px"
      : window.innerHeight - 88 + "px";

  const Template =
    !editor.isLoading && resumes[resume.templateId as keyof ResumeTemplatesType]
      ? resumes[resume.templateId as keyof ResumeTemplatesType].template
      : null;

  useOutsideClick(
    rightSideRef,
    () => {
      setRightSideBarIsOpen(false);
    },
    [rightSideBarOpenButtonRef, leftSideRef]
  );

  return (
    !editor.isLoading && (
      <div
        style={{ minHeight: hight }}
        className="flex justify-start items-start relative">
        <div
          ref={leftSideRef}
          className={`${
            !editorDashboardIsOpen ? "block" : " hidden"
          } h-full w-full lg:min-w-[400px] lg:max-w-[400px]  `}>
          <LeftSideBar
            editor={<LeftSideBarOptions />}
            templates={<ResumeTemplates />}
          />
        </div>

        {/* Editor Dashboard  */}
        <div
          style={{ height: hight }}
          id="resumeEditorDashboard"
          className={`${
            editorDashboardIsOpen ? "block" : " hidden"
          } w-full lg:flex  justify-center items-center bg-zinc-100 overflow-auto  `}>
          <div
            className={`${
              zoom > 1 && "w-[1600px] h-[1300px] pt-[250px] "
            }  flex justify-center items-center`}>
            {Template && <Template ref={templateRef} resume={resume} />}
          </div>
        </div>

        <div
          ref={rightSideBarOpenButtonRef}
          onClick={() => setRightSideBarIsOpen(true)}
          className="xl:hidden fixed right-0 top-56 py-2 px-6 hover:bg-white hover:text-c-primary duration-300 transition-colors cursor-pointer text-white rounded-l-full bg-c-primary">
          <IoSettingsOutline className="animate-spin text-4xl" />
        </div>

        <div
          ref={rightSideRef}
          className={`${
            windowWidth < 1280
              ? `fixed top-[88px] xl:top-[98px] z-50 ${
                  rightSideBarIsOpen ? "-right-[0%]" : "-right-[1000%]"
                }`
              : null
          }`}>
          <RightSideBar>
            <div className="">
              <RightSideBarOptions />
              <div className="xl:hidden mt-10 flex justify-center items-center">
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
          <div className=" lg:hidden absolute top-0 left-2 z-50">
            <FaArrowLeftLong
              onClick={() => setEditorDashboardIsOpen(false)}
              className=" text-5xl hover:text-c-primary text-c-dark duration-300 cursor-pointer"
            />
          </div>
        ) : (
          <div className=" lg:hidden absolute bottom-5 right-0">
            <Button onClick={() => setEditorDashboardIsOpen(true)}>
              Preview
            </Button>
          </div>
        )}
      </div>
    )
  );
};

export default React.memo(ResumeEditor);

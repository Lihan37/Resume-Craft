/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
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

const Editor: React.FC = () => {
  useTitleSet("Resume Builder");
  const [windowWidth] = useDisplay();
  const resume = useSelector(selectResume);
  const editor = useSelector(selectResumeEditor);
  const dispatch = useAppDispatch();
  const param = useParams();
  const templateRef = useRef(null);

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
          formData.append(
            "resumeCraftResumeThumbnail",
            blob,
            "resumeThumbnail.png"
          );

          if (resume.templateId) {
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

  return (
    !editor.isLoading && (
      <div
        style={{ minHeight: hight }}
        className="flex justify-start items-start">
        <div className="h-full min-w-[400px] max-w-[400px]  ">
          <LeftSideBar
            editor={<LeftSideBarOptions />}
            templates={<ResumeTemplates />}
          />
        </div>

        {/* Editor Dashboard  */}
        <div
          style={{ height: hight }}
          id="resumeEditorDashboard"
          className="w-full flex overflow-auto justify-center items-center bg-zinc-100 ">
          {Template && <Template ref={templateRef} resume={resume} />}
        </div>

        <div className="2xl:hidden fixed right-0 top-56 py-2 px-6 hover:bg-white hover:text-c-primary duration-300 transition-colors cursor-pointer text-white rounded-l-full bg-c-primary">
          <IoSettingsOutline className="animate-spin text-4xl" />
        </div>
        <div
          className={`${
            windowWidth < 1590
              ? "fixed top-[88px] xl:top-[98px] z-50 -right-[50%]"
              : null
          }`}>
          <RightSideBar>
            <RightSideBarOptions />
          </RightSideBar>
        </div>
      </div>
    )
  );
};

export default React.memo(Editor);

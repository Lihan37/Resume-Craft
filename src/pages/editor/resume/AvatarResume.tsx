import React, { useEffect, useRef, useState } from "react";
import { ImUser } from "react-icons/im";
import { useAppDispatch } from "../../../app/store";
import { updateResumeAvatar } from "../../../services/resumeEditor/resumeEditorApi";
import { useSelector } from "react-redux";
import {
  selectResumeAvatar,
  selectResumeID,
} from "../../../services/resumeEditor/resumeEditorSelector";

const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];

const AvatarResume: React.FC = () => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const avatarResume = useSelector(selectResumeAvatar);
  const resumeID = useSelector(selectResumeID);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAvatarSelect = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleUpload = async (id: string | number, formData: FormData) => {
    try {
      await dispatch(
        updateResumeAvatar({
          id: id,
          fileData: formData,
        })
      );
    } catch (error) {
      console.error("Error updating Resume Avatar:", error);
    }
  };

  useEffect(() => {
    if (avatarFile && allowedFileTypes.includes(avatarFile?.type) && resumeID) {
      const formData = new FormData();
      formData.append("resumeCraftResumeAvatar", avatarFile);
      handleUpload(resumeID, formData);
    }
    if (avatarFile && !allowedFileTypes.includes(avatarFile?.type)) {
      console.log("not allow");
    }
  }, [avatarFile]);

  return (
    <div
      onClick={handleAvatarSelect}
      className="cursor-pointer flex justify-start items-center gap-2 font-semibold group">
      <div className="h-20 w-20 bg-blue-50 flex justify-center items-center text-neutral-400">
        {avatarFile ? (
          <img
            className="w-full h-full"
            src={URL.createObjectURL(avatarFile)}
            alt="Selected"
          />
        ) : avatarResume.url ? (
          <img className="w-full h-full" src={avatarResume.url} alt="avatar" />
        ) : (
          <ImUser className="text-5xl duration-300 group-hover:text-c-primary" />
        )}
      </div>
      <h1 className="group-hover:text-c-primary duration-300">Upload photo</h1>
      <input
        type="file"
        accept="image/jpeg, image/jpg, image/png"
        ref={inputRef}
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            setAvatarFile(files[0]);
          }
        }}
        className="hidden"
      />
    </div>
  );
};

export default AvatarResume;

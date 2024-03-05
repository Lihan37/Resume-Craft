import React, { useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { selectUser } from "../../../../services/auth/authSelector";
import { setUser } from "../../../../services/auth/authSlice";
const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const Avatar: React.FC = () => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleAvatarSelect = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleUpload = async () => {
    if (avatarFile && !allowedFileTypes.includes(avatarFile?.type)) {
      Swal.fire({
        icon: "error",
        text: `Not allowed ${avatarFile?.type} format image`,
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    if (avatarFile && allowedFileTypes.includes(avatarFile?.type)) {
      const formData = new FormData();
      formData.append("resumeCraftProfilePic", avatarFile);
      try {
        setLoading(true);
        const response = await fetch(
          `${baseUrl}/user/v1/upload-profile-picture`,
          {
            method: "PATCH",
            credentials: "include",
            body: formData,
          }
        );
        const data = await response.json();
        if (!data.success) {
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: data.message,
            showConfirmButton: false,
            timer: 1000,
          });
        }
        if (data.success) {
          setLoading(false);
          dispatch(setUser({ accessToken: "", user: data.user }));
          setAvatarFile(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className=" flex justify-start items-center gap-5">
      <div className="overflow-hidden rounded-md w-40 h-40 mt-5 relative group">
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
        {avatarFile ? (
          <img
            src={URL.createObjectURL(avatarFile)}
            alt="avatar"
            className="w-full h-full"
          />
        ) : (
          <img
            className="w-full h-full"
            src={user?.avatar.url || "https://i.ibb.co/BPxsMH9/profile-2.png"}
            alt="avatar"
          />
        )}

        <div
          onClick={handleAvatarSelect}
          className=" absolute w-full h-full top-100 group-hover:top-0 duration-300 cursor-pointer  bg-[#54545469] flex justify-center items-center">
          <FaImage className=" text-6xl text-gray-500" />
        </div>
      </div>
      {avatarFile ? (
        <button
          onClick={handleUpload}
          className=" text-xl font-semibold bg-c-primary hover:bg-c-primary-light duration-300 text-white px-6 py-1 rounded-md ">
          Save{loading && "..."}
        </button>
      ) : (
        <button
          onClick={handleAvatarSelect}
          className=" text-xl font-semibold bg-c-primary hover:bg-c-primary-light duration-300 text-white px-6 py-1 rounded-md ">
          Change
        </button>
      )}
    </div>
  );
};

export default Avatar;

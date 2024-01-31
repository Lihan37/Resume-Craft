import React from "react";
import { FaFacebookF } from "react-icons/fa6";

const SocialLogin: React.FC = () => {
  return (
    <div className="flex justify-center mb-4 items-center gap-5">
      <button className="bg-white border w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center items-center text-sm hover:scale-105 duration-300 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-6 h-6"
          viewBox="0 0 48 48">
          <defs>
            <path
              id="a"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
          </defs>
          <clipPath id="b">
            <use xlinkHref="#a" overflow="visible" />
          </clipPath>
          <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
          <path
            clip-path="url(#b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
          />
          <path
            clip-path="url(#b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
          />
          <path
            clip-path="url(#b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
          />
        </svg>
      </button>
      <button className="bg-white border w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center items-center text-sm hover:scale-105 duration-300 ">
        <FaFacebookF className=" text-xl md:text-2xl text-blue-500" />
      </button>
    </div>
  );
};

export default SocialLogin;

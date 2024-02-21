import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/auth/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const SocialLogin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleSign = async () => {
    await signInWithPopup(auth, provider)
      .then(async (res) => {
        const user = res?.user.providerData[0];
        if (user.displayName && user.email) {
          const response = await fetch(`${baseUrl}/auth/v1/google/login`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              name: user.displayName,
              avatar: user.photoURL,
            }),
          });
          const data = await response.json();
          dispatch(setUser({ user: data.user, accessToken: data.accessToken }));
          Swal.fire({
            icon: "success",
            text: "Login Successfully !",
            showConfirmButton: false,
          });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col space-y-5 mt-10">
      <span className="flex items-center justify-center space-x-2">
        <span className="h-px bg-gray-400 w-14"></span>
        <span className="font-normal text-gray-500">or login with</span>
        <span className="h-px bg-gray-400 w-14"></span>
      </span>
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleGoogleSign}
          className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group ">
          <span>
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
              <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path
                clipPath="url(#b)"
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                clipPath="url(#b)"
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                clipPath="url(#b)"
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
          </span>
          <span className="text-sm font-medium text-blue-500 ">Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

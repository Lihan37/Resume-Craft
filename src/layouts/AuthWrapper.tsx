import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../components/common/Logo";
import Button from "../components/common/Button";
import SocialLogin from "../pages/auth/SocialLogin";

const AuthWrapper: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col md:flex-row md:justify-between  bg-white  w-full h-[800px] md:h-screen ">
      <div className=" w-full md:w-2/3 p-8 text-center h-full flex justify-center items-center relative">
        <div className=" min-w-full md:min-w-[500px] mt-20">
          <div className="w-full text-center">
            <h2 className="text-xl md:text-3xl text-c-primary font-bold mb-4 capitalize">
              {pathname === "/auth/sign-up"
                ? " Create Your Account"
                : "Log In To Your Account"}
            </h2>

            <SocialLogin />

            <p className="my-4 text-c-dark-light text-xs md:text-base">
              {pathname === "/auth/sign-up"
                ? "Or, create using your email and password"
                : "If you are already a member, easily log in"}
            </p>

            <Outlet />
            {pathname === "/auth/login" && (
              <div className=" text-blue-500 my-10">
                <Link className=" underline" to="/">
                  Forgot password?
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className=" absolute top-10 left-20">
          <Logo />
        </div>
      </div>

      <div className=" w-full md:w-1/3 p-8  space-y-5 bg-c-primary flex flex-col items-center justify-center text-center text-white">
        <p className=" font-semibold font-mono text-xl lg:text-3xl xl:text-5xl max-w-lg">
          {pathname === "/auth/sign-up"
            ? "Already have an account?"
            : "Don't have an account ?"}
        </p>
        <Link
          to={pathname === "/auth/sign-up" ? "/auth/login" : "/auth/sign-up"}>
          <Button icon={false} outline={true}>
            {pathname === "/auth/sign-up" ? "Login" : "Sign up"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthWrapper;
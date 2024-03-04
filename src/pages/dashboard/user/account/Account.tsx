import React from "react";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import useTitleSet from "../../../../hooks/useTitleSet";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../services/auth/authSelector";
import addDaysToTimestamp from "../../../../utils/addDaysToTimestamp";
import { Link } from "react-router-dom";

const Account: React.FC = () => {
  useTitleSet("Account");
  const user = useSelector(selectUser);

  return (
    <>
      <h1 className="font-semibold text-4xl">Account Settings</h1>
      <div className=" rounded-md overflow-hidden bg-white p-5 flex justify-between my-5 items-center">
        <h1 className=" w-full font-semibold text-xl text-c-dark-light flex flex-col md:flex-row  justify-between items-start">
          <span>
            Download point =
            <span className=" text-c-primary">{user.plan.downloadlimite}</span>
          </span>

          {user.plan.downloadlimite === 0 ? (
            <Link
              to="/pricing"
              className=" text-xl font-semibold text-c-primary">
              Upgrade
            </Link>
          ) : (
            <span className="text-base font-semibold text-red-400">
              Validation{" "}
              {addDaysToTimestamp(user.plan.checkoutDate, user.plan.timeLimite)}
            </span>
          )}
        </h1>
      </div>
      <Avatar />
      <PersonalInfo />
    </>
  );
};

export default Account;

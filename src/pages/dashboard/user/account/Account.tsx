import React from "react";
import { Container } from "../../../../components/common/Container";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import useTitleSet from "../../../../hooks/useTitleSet";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../services/auth/authSelector";
import addDaysToTimestamp from "../../../../utils/addDaysToTimestamp";

const Account: React.FC = () => {
  useTitleSet("Account");
  const user = useSelector(selectUser);

  return (
    <div className=" text-c-dark bg-gray-100 py-8">
      <Container>
        <div className="max-w-[700px] mx-auto my-10">
          <h1 className="font-semibold text-4xl">Account Settings</h1>
          <div className=" rounded-md overflow-hidden bg-white p-5 flex justify-between my-5 items-center">
            <h1 className=" w-full font-semibold text-xl text-c-dark-light flex justify-between items-center">
              Downloading point
              <span className=" text-c-primary">
                {user.plan.downloadlimite}
              </span>
              <span className="text-base font-semibold text-red-400">
                Validation{" "}
                {addDaysToTimestamp(
                  user.plan.checkoutDate,
                  user.plan.timeLimite
                )}
              </span>
            </h1>
          </div>
          <Avatar />
          <PersonalInfo />
        </div>
      </Container>
    </div>
  );
};

export default Account;

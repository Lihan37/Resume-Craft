import React from "react";
import { Container } from "../../../../components/common/Container";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";

const Account: React.FC = () => {
  return (
    <div className=" text-c-dark bg-gray-100 py-8">
      <Container>
        <div className="max-w-[700px] mx-auto my-10">
          <h1 className="font-semibold text-4xl">Account Settings</h1>
          <div className=" rounded-md overflow-hidden bg-white p-5 flex justify-between my-5 items-center">
            <div className="">
              <h1 className=" font-semibold text-2xl text-c-dark-light">
                Free Account
              </h1>
              <p>
                You are on the free plan. Upgrade for PDF downloads & premium
                features.
              </p>
            </div>
            <button className=" text-xl font-semibold text-c-primary">
              Upgrade
            </button>
          </div>
          <Avatar />
          <PersonalInfo />
        </div>
      </Container>
    </div>
  );
};

export default Account;

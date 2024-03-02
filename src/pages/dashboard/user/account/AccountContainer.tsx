import React from "react";
import { Container } from "../../../../components/common/Container";
import { NavLink } from "react-router-dom";
import { useGetPaymentHistoryQuery } from "../../../../services/api/api";

interface IAccountContainer {
  children: React.ReactNode;
}

const AccountContainer: React.FC<IAccountContainer> = ({ children }) => {
  useGetPaymentHistoryQuery("paymentHistory");

  return (
    <div className=" text-c-dark bg-gray-100 py-8 ">
      <Container>
        <div className=" flex flex-col md:flex-row justify-start items-start gap-10 max-w-[1080px] mx-auto ">
          <div className="w-full md:w-4/12">
            <div className="w-full my-5 md:my-10 ">
              <div className=" flex  md:flex-col w-full text-center text-c-dark font-semibold">
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    isActive
                      ? ` bg-c-primary text-white block w-full p-2 `
                      : `w-full p-2 block bg-white`
                  }>
                  Account
                </NavLink>
                <NavLink
                  to="/payment-history"
                  className={({ isActive }) =>
                    isActive
                      ? ` bg-c-primary text-white block w-full p-2 `
                      : `w-full p-2 block bg-white`
                  }>
                  Payment History
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-8/12">
            <div className=" my-5 md:my-10 ">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountContainer;

import React from "react";
import BalanceChart from "./charts/BalanceChart";
import PaymentChart from "./charts/PaymentChart";

const DashBoardChart: React.FC = () => {
  return (
    <div className="flex gap-5 flex-col md:flex-row md:justify-between  bg-blue-100 p-5 my-10">
      <div className="flex-1 flex gap-5 flex-col md:flex-row items-center justify-between p-8 rounded-2xl bg-white">
        <div className="">
          <p className="text-2xl text-c-dark font-semibold">Current Balance</p>
          <p className="text-c-dark-light font-semibold mt-3">567.99 USD</p>
          <p className="text-3xl font-semibold text-c-dark mt-5">
            5,000 <span className="text-lg text-c-dark-light">USD</span>
          </p>
        </div>
        <div>
          <BalanceChart></BalanceChart>
        </div>
      </div>
      <div className="flex-1 flex gap-5 flex-col md:flex-row items-center justify-between p-8 rounded-2xl bg-white">
        <div className="">
          <p className="text-2xl text-c-dark font-semibold">Payment Details</p>
          <p className="text-c-dark-light font-semibold text-sm mt-8">
            Next Payment 567.99 USD
          </p>
          <p className="text-base font-bold text-c-dark">February 14, 2024</p>
        </div>
        <div>
          <PaymentChart></PaymentChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoardChart;

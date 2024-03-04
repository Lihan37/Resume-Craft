/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetPaymentHistoryQuery } from "../../../../services/api/api";
import addDaysToTimestamp from "../../../../utils/addDaysToTimestamp";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PaymentHistoryPDF from "./PaymentHistoryPDF";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../services/auth/authSelector";
import formatDateToDayMonth from "../../../../utils/formatDateToDayMonth";

const PaymentHistory: React.FC = () => {
  const { data, isLoading } = useGetPaymentHistoryQuery("paymentHistory");
  const user = useSelector(selectUser);

  return !isLoading ? (
    <div className=" min-h-[600px] ">
      <h1 className="font-semibold text-4xl">Payment History</h1>
      <div className="overflow-scroll">
        <table className="w-full border-collapse border border-blue-500 max-w-xl  mt-4 text-center">
          <thead>
            <tr className="bg-blue-500 text-white ">
              <th className="py-2 ">Buy</th>
              <th className="py-2 ">Price</th>
              <th className="py-2 ">Point</th>
              <th className="py-2 ">Dateline</th>
              <th className="py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.history.map((item: any) => (
              <tr key={item._id} className="bg-white border-b border-blue-500 ">
                <td className="py-2 px-4 capitalize">{item.type}</td>
                <td className="py-2 px-4">${item.price}</td>
                <td className="py-2 px-4">{item.downloadlimite}</td>
                <td className="py-2 px-4">
                  {addDaysToTimestamp(item.createdAt, item.timeLimite)}
                </td>
                <td className="py-2 px-4 cursor-pointer hover:text-c-primary duration-300">
                  <PDFDownloadLink
                    document={
                      <PaymentHistoryPDF
                        history={{
                          name: user.name,
                          email: user.email,
                          plan: item.type,
                          price: item.price,
                          transactionId: item.transactionId,
                          purchase: formatDateToDayMonth(item.createdAt),
                          expiration: addDaysToTimestamp(
                            item.createdAt,
                            item.timeLimite
                          ),
                          timeLimit: item.timeLimite,
                          downloadPoint: item.downloadlimite,
                        }}
                      />
                    }
                    fileName="resumeCraft-payment-history.pdf">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </PDFDownloadLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};

export default PaymentHistory;

import React, { useEffect } from "react";
import { Pricing } from "../../../../types/paymentResponse";
import Edit from "./Edit";
import { useDeletePricingMutation } from "../../../../services/api/api";
import Swal from "sweetalert2";

interface ISinglePrice {
  item: Pricing;
}

const SinglePrice: React.FC<ISinglePrice> = ({ item }) => {
  const [deletePrice, { isSuccess }] = useDeletePricingMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        icon: "success",
        text: "Delete Successfully",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [isSuccess]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        deletePrice(item._id);
      }
    });
  };

  return (
    <tr>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Free <span className=" text-c-primary">Price : </span> ${" "}
              {item.monthly.free.price} Download : {item.monthly.free.download}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Premium <span className=" text-c-primary">Price : </span> ${" "}
              {item.monthly.premium.price} Download :{" "}
              {item.monthly.premium.download}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Enterprise <span className=" text-c-primary">Price : </span> ${" "}
              {item.monthly.enterprise.price} Download :{" "}
              {item.monthly.enterprise.download}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
              Discount : {item.monthly.discount.amount}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Free <span className=" text-c-primary">Price : </span> ${" "}
              {item.yearly.free.price} Download : {item.yearly.free.download}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Premium <span className=" text-c-primary">Price : </span> ${" "}
              {item.yearly.premium.price} Download :{" "}
              {item.yearly.premium.download}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Enterprise <span className=" text-c-primary">Price : </span> ${" "}
              {item.yearly.enterprise.price} Download :{" "}
              {item.yearly.enterprise.download}
            </p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
              Discount : {item.yearly.discount.amount}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        {item.active ? (
          <h1 className=" w-fit text-xs px-2 py-1 bg-green-200 rounded-xl">
            Active
          </h1>
        ) : (
          <h1 className=" w-fit text-xs px-2 py-1 bg-red-200 rounded-xl">
            Deactivate{" "}
          </h1>
        )}
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <Edit data={item} id={item._id} />
        <button
          onClick={handleDelete}
          className="relative hover:text-red-500 duration-300 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button">
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default SinglePrice;

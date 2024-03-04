import React, { useEffect, useState } from "react";
import Modal from "../../../../components/common/Modal";
import PricingForm, { InitialFormData } from "./PricingForm";
import { useEditPricingMutation } from "../../../../services/api/api";
import Swal from "sweetalert2";

interface IEdit {
  data?: InitialFormData;
  id?: string;
}

const Edit: React.FC<IEdit> = ({ data, id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [editPricing, { isLoading, isSuccess }] = useEditPricingMutation();

  const handleEdit = (data: InitialFormData) => {
    editPricing({ data, id });
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
      Swal.fire({
        icon: "success",
        text: "Update Successfully",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative hover:text-c-primary duration-300 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <PricingForm
          loading={isLoading}
          initialData={data}
          getValue={handleEdit}
        />
      </Modal>
    </>
  );
};

export default Edit;

import React, { useEffect, useState } from "react";
import Modal from "../../../../components/common/Modal";
import PricingForm, { InitialFormData } from "./PricingForm";
import Button from "../../../../components/common/Button";
import { useCreatePricingMutation } from "../../../../services/api/api";
import Swal from "sweetalert2";

const Create: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [createPricing, { isLoading, isSuccess }] = useCreatePricingMutation();

  const handleCreate = (data: InitialFormData) => {
    createPricing(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
      Swal.fire({
        icon: "success",
        text: "Create Successfully",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} icon={false}>
        Create
      </Button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <PricingForm loading={isLoading} getValue={handleCreate} />
      </Modal>
    </>
  );
};

export default Create;

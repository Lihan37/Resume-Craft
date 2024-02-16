import React from "react";
import InputText from "../../../components/common/InputText";

const LeftSideBarOptions: React.FC = () => {
  return (
    <div>
      <div className="px-5 text-c-dark space-y-4">
        <h1 className=" font-semibold text-xl">Personal Details :</h1>
        <InputText placeholder="Full Name" />
        <InputText placeholder="Job Title" />
        <InputText placeholder="Address" />
        <InputText placeholder="Email" />
        <InputText placeholder="Phone Number" />

        <h1 className=" font-semibold text-xl">Employer Details :</h1>
        <InputText placeholder="Company Name" />
        <InputText placeholder="Hiring Manager Name" />
        <h1 className=" font-semibold text-xl">Letter Details :</h1>
        <InputText textarea={true} />
      </div>
    </div>
  );
};

export default LeftSideBarOptions;

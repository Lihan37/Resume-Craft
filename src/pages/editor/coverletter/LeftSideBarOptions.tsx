import React from "react";
import InputText from "../../../components/common/InputText";
import { useDispatch } from "react-redux";
import { setFocus } from "../../../services/generalEditor/generalEditorSlice";
import { setValue } from "../../../services/coverletterEditor/coverletterEditorSlice";

const LeftSideBarOptions: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="px-5 text-c-dark space-y-4">
        <h1 className=" font-semibold text-xl">Personal Details :</h1>
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "fullName" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "fullName", value: e.target.value }));
          }}
          placeholder="Full Name"
        />
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "JobTitle" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "JobTitle", value: e.target.value }));
          }}
          placeholder="Job Title"
        />
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "address" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "address", value: e.target.value }));
          }}
          placeholder="Address"
        />
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "email" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "email", value: e.target.value }));
          }}
          placeholder="Email"
        />
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "phoneNumber" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "phoneNumber", value: e.target.value }));
          }}
          placeholder="Phone Number"
        />

        <h1 className=" font-semibold text-xl">Employer Details :</h1>
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "companyName" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "companyName", value: e.target.value }));
          }}
          placeholder="Company Name"
        />
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "managerName" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "managerName", value: e.target.value }));
          }}
          placeholder="Hiring Manager Name"
        />
        <h1 className=" font-semibold text-xl">Letter Details :</h1>
        <InputText
          onFocus={() => {
            dispatch(setFocus({ focusInput: "details" }));
          }}
          onChange={(e) => {
            dispatch(setValue({ name: "details", value: e.target.value }));
          }}
          textarea={true}
          placeholder="Details..."
        />
      </div>
    </div>
  );
};

export default LeftSideBarOptions;

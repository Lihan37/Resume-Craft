import React, { useEffect, useState } from "react";
import InputText from "../../../components/common/InputText";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IResumePersonalInfo } from "../../../types/resumeEditor";

const initialState = {
  _id: "",
  jobTitle: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  city: "",
  address: "",
  postalCode: "",
  drivingLicense: "",
  nationality: "",
  placeOfBirth: "",
  DateOfBirth: "",
};

interface IPersonaData {
  getValue?: (data: IResumePersonalInfo) => void;
  initialValue?: IResumePersonalInfo;
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}
const PersonaData: React.FC<IPersonaData> = ({
  getValue = () => {},
  getFocusedInputValue = () => {},
  initialValue,
  initialFocusedValue,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState<IResumePersonalInfo>(
    initialValue || initialState
  );
  const [focusedInput, setFocusedInput] = useState<string>(
    initialFocusedValue || ""
  );

  useEffect(() => {
    if (
      getFocusedInputValue &&
      typeof getFocusedInputValue === "function" &&
      focusedInput !== initialFocusedValue
    ) {
      getFocusedInputValue(focusedInput);
    }
  }, [focusedInput]);

  useEffect(() => {
    if (getValue && typeof getValue === "function") {
      getValue(state);
    }
  }, [state]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev: IResumePersonalInfo) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  return (
    <div className=" space-y-3 py-5 px-5 ">
      <InputText
        value={state.jobTitle}
        name="jobTitle"
        placeholder="Job Title"
        onChange={handleInputValue}
        onFocus={() => handleInputFocus("jobTitle")}
      />
      <InputText
        value={state.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={handleInputValue}
        onFocus={() => handleInputFocus("firstName")}
      />
      <InputText
        value={state.lastName}
        placeholder="Last Name"
        name="lastName"
        onChange={handleInputValue}
        onFocus={() => handleInputFocus("lastName")}
      />
      <InputText
        value={state.email}
        onChange={handleInputValue}
        name="email"
        placeholder="Email Address"
        onFocus={() => handleInputFocus("email")}
      />
      <InputText
        value={state.phoneNumber}
        onChange={handleInputValue}
        name="phoneNumber"
        placeholder="Phone Number"
        onFocus={() => handleInputFocus("phoneNumber")}
      />
      <InputText
        value={state.country}
        onChange={handleInputValue}
        name="country"
        placeholder="Your Country"
        onFocus={() => handleInputFocus("country")}
      />

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
            <div className="space-y-3 ">
              <InputText
                value={state.city}
                onChange={handleInputValue}
                name="city"
                placeholder="Your City"
                onFocus={() => handleInputFocus("city")}
              />
              <InputText
                value={state.address}
                onChange={handleInputValue}
                name="address"
                placeholder="Your Address"
                onFocus={() => handleInputFocus("address")}
              />
              <InputText
                value={state.postalCode}
                onChange={handleInputValue}
                name="postalCode"
                placeholder="Postal Code"
                onFocus={() => handleInputFocus("postalCode")}
              />
              <InputText
                value={state.drivingLicense}
                onChange={handleInputValue}
                name="drivingLicense"
                placeholder="Driving License"
                onFocus={() => handleInputFocus("drivingLicense")}
              />
              <InputText
                value={state.nationality}
                onChange={handleInputValue}
                name="nationality"
                placeholder="Nationality"
                onFocus={() => handleInputFocus("nationality")}
              />
              <InputText
                value={state.placeOfBirth}
                onChange={handleInputValue}
                name="placeOfBirth"
                placeholder="Place Of Birth"
                onFocus={() => handleInputFocus("placeOfBirth")}
              />
              <InputText
                value={state.DateOfBirth}
                onChange={handleInputValue}
                name="DateOfBirth"
                placeholder="Date Of Birth"
                onFocus={() => handleInputFocus("DateOfBirth")}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsActive((prev) => !prev)}
        className=" hover:text-blue-800 duration-300 transition-colors font-semibold text-base text-c-primary cursor-pointer flex justify-start items-center gap-3">
        Edit additional details{" "}
        {!isActive ? (
          <IoIosArrowDown className=" text-xl" />
        ) : (
          <IoIosArrowUp className=" text-xl" />
        )}
      </button>
    </div>
  );
};

export default PersonaData;

import React, { useState } from "react";
import InputText from "../../../components/common/InputText";
import Accordion from "../../../components/accordion";
import AccordionItem from "../../../components/accordion/AccordionItem";
import AccordionHeader from "../../../components/accordion/AccordionHeader";
import AccordionPanel from "../../../components/accordion/AccordionPanelProps";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import InputTextEditor from "../../../components/common/InputTextEditor";
import AddEmploymentHistory from "./AddEmploymentHistory";
import { TypeOfSingleEmploymentHistory } from "../../../types";

// const initialState = {
//   personal: {
//     jobTitle: "",
//     picture: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     city: "",
//     address: "",
//     postalCode: "",
//     drivingLicense: "",
//     nationality: "",
//     placeOfBirth: "",
//     dateOfBirth: "",
//   },
// };

const ResumeEditor: React.FC = () => {
  // const [state, setState] = useState(initialState);
  const [isActive, setIsActive] = useState(false);

  const handleAddEmploymentHistory = (
    data: TypeOfSingleEmploymentHistory[]
  ) => {
    console.log("handleAddEmploymentHistory 1", data);
  };

  return (
    <div>
      <div className="">
        <Accordion defaultIndex={0}>
          {/* Personal Information  */}
          <AccordionItem>
            <AccordionHeader>Personal Information</AccordionHeader>
            <AccordionPanel>
              <div className=" space-y-3 py-5 px-5 ">
                <InputText placeholder="Job Title" />
                <InputText placeholder="First Name" />
                <InputText placeholder="Last Name" />
                <InputText placeholder="Email Address" />
                <InputText placeholder="Phone Number" />
                <InputText placeholder="Your Country" />

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
                      <div className="space-y-3 ">
                        <InputText placeholder="Your City" />
                        <InputText placeholder="Your Address" />
                        <InputText placeholder="Postal Code" />
                        <InputText placeholder="Driving License" />
                        <InputText placeholder="Nationality" />
                        <InputText placeholder="Place Of Birth" />
                        <InputText placeholder="Date Of Birth" />
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
            </AccordionPanel>
          </AccordionItem>
          {/* Professional Summary */}
          <AccordionItem>
            <AccordionHeader>Professional Summary</AccordionHeader>
            <AccordionPanel>
              <div className="py-5 px-5">
                <InputTextEditor />
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>Employment History</AccordionHeader>
            <AccordionPanel>
              <AddEmploymentHistory getValue={handleAddEmploymentHistory} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default React.memo(ResumeEditor);

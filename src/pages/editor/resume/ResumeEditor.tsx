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
import {
  TypeOfLanguage,
  TypeOfReference,
  TypeOfSingleEducationHistory,
  TypeOfSingleEmploymentHistory,
  TypeOfSingleSocialWebSite,
  TypeOfSkill,
} from "../../../types";
import AddEducationHistory from "./AddEducationHistory";
import AddSocialWebSite from "./AddSocialWebSite";
import AddSkills from "./AddSkills";
import AddLanguages from "./AddLanguages";
import AddReferences from "./AddReferences";

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
    console.log("handleAddEmploymentHistory", data);
  };

  const handleAddEducationHistory = (data: TypeOfSingleEducationHistory[]) => {
    console.log("handleAddEducationHistory", data);
  };

  const handleAddSocialWebSite = (data: TypeOfSingleSocialWebSite[]) => {
    console.log("handleAddSocialWebSite", data);
  };

  const handleAddSkills = (data: TypeOfSkill[]) => {
    console.log("handleAddSkills", data);
  };

  const handleAddLanguages = (data: TypeOfLanguage[]) => {
    console.log("handleAddLanguages", data);
  };

  const handleAddReferences = (data: TypeOfReference[]) => {
    console.log("handleAddReferences", data);
  };

  return (
    <div>
      <div className="pb-10">
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
          {/* Employment History */}
          <AccordionItem>
            <AccordionHeader>Employment History</AccordionHeader>
            <AccordionPanel>
              <AddEmploymentHistory getValue={handleAddEmploymentHistory} />
            </AccordionPanel>
          </AccordionItem>
          {/* Education */}
          <AccordionItem>
            <AccordionHeader>Education</AccordionHeader>
            <AccordionPanel>
              <AddEducationHistory getValue={handleAddEducationHistory} />
            </AccordionPanel>
          </AccordionItem>
          {/* Websites & Social Links */}
          <AccordionItem>
            <AccordionHeader>Websites & Social Links</AccordionHeader>
            <AccordionPanel>
              <AddSocialWebSite getValue={handleAddSocialWebSite} />
            </AccordionPanel>
          </AccordionItem>
          {/* Skills */}
          <AccordionItem>
            <AccordionHeader>Skills</AccordionHeader>
            <AccordionPanel>
              <AddSkills getValue={handleAddSkills} />
            </AccordionPanel>
          </AccordionItem>
          {/* Language */}
          <AccordionItem>
            <AccordionHeader>Languages</AccordionHeader>
            <AccordionPanel>
              <AddLanguages getValue={handleAddLanguages} />
            </AccordionPanel>
          </AccordionItem>
          {/* References */}
          <AccordionItem>
            <AccordionHeader>References</AccordionHeader>
            <AccordionPanel>
              <AddReferences getValue={handleAddReferences} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default React.memo(ResumeEditor);

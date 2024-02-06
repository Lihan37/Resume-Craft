import React from "react";
import AccordionItem from "../../../components/accordion/AccordionItem";
import AccordionHeader from "../../../components/accordion/AccordionHeader";
import AccordionPanel from "../../../components/accordion/AccordionPanelProps";
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
import PersonaData from "./PersonaData";

const LeftSideBarOptions: React.FC = () => {
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
        {/* <Accordion multiple={true} defaultIndex={0}> */}
        {/* Personal Information  */}
        <AccordionItem>
          <AccordionHeader id={1}>Personal Information</AccordionHeader>
          <AccordionPanel id={1}>
            <PersonaData />
          </AccordionPanel>
        </AccordionItem>
        {/* Professional Summary */}
        <AccordionItem>
          <AccordionHeader id={2}>Professional Summary</AccordionHeader>
          <AccordionPanel id={2}>
            <div className="py-5 px-5">
              <InputTextEditor />
            </div>
          </AccordionPanel>
        </AccordionItem>
        {/* Employment History */}
        <AccordionItem>
          <AccordionHeader id={3}>Employment History</AccordionHeader>
          <AccordionPanel id={3}>
            <AddEmploymentHistory getValue={handleAddEmploymentHistory} />
          </AccordionPanel>
        </AccordionItem>
        {/* Education */}
        <AccordionItem>
          <AccordionHeader id={4}>Education</AccordionHeader>
          <AccordionPanel id={4}>
            <AddEducationHistory getValue={handleAddEducationHistory} />
          </AccordionPanel>
        </AccordionItem>
        {/* Websites & Social Links */}
        <AccordionItem>
          <AccordionHeader id={4}>Websites & Social Links</AccordionHeader>
          <AccordionPanel id={4}>
            <AddSocialWebSite getValue={handleAddSocialWebSite} />
          </AccordionPanel>
        </AccordionItem>
        {/* Skills */}
        <AccordionItem>
          <AccordionHeader id={5}>Skills</AccordionHeader>
          <AccordionPanel id={5}>
            <AddSkills getValue={handleAddSkills} />
          </AccordionPanel>
        </AccordionItem>
        {/* Language */}
        <AccordionItem>
          <AccordionHeader id={6}>Languages</AccordionHeader>
          <AccordionPanel id={6}>
            <AddLanguages getValue={handleAddLanguages} />
          </AccordionPanel>
        </AccordionItem>
        {/* References */}
        <AccordionItem>
          <AccordionHeader id={7}>References</AccordionHeader>
          <AccordionPanel id={7}>
            <AddReferences getValue={handleAddReferences} />
          </AccordionPanel>
        </AccordionItem>
        {/* </Accordion> */}
      </div>
    </div>
  );
};

export default React.memo(LeftSideBarOptions);
